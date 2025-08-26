import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { useSerialNumbers, SerialNumber } from '@/hooks/use-serial-numbers';
import { Plus, Trash2, Download, Upload, FileSpreadsheet } from 'lucide-react';

// Static products data
const staticProducts = [
  { id: 'fet-control', name_th: 'FET CONTROL CABINET', name_en: 'FET CONTROL CABINET' },
  { id: 'fen-control', name_th: 'FEN CONTROL CABINET', name_en: 'FEN CONTROL CABINET' },
  { id: 'fes-control', name_th: 'FES Control Cabinet', name_en: 'FES Control Cabinet' },
  { id: 'fjd1-b450', name_th: 'FJD1-B450 SERIES', name_en: 'FJD1-B450 SERIES' },
  { id: 'fjd1-b1000', name_th: 'FJD1-B1000 SERIES', name_en: 'FJD1-B1000 SERIES' },
  { id: 'fjd1-b1600', name_th: 'FJD1-B1600 SERIES', name_en: 'FJD1-B1600 SERIES' },
  { id: 'fjd1-b2500', name_th: 'FJD1-B2500 SERIES', name_en: 'FJD1-B2500 SERIES' },
  { id: 'fjd2-b450', name_th: 'FJD2-B450 (φ240) Series', name_en: 'FJD2-B450 (φ240) Series' },
  { id: 'fjd2-b800', name_th: 'FJD2-B800 (φ240) Series', name_en: 'FJD2-B800 (φ240) Series' },
  { id: 'fjd2-b630', name_th: 'FJD2-B630 (φ320) Series', name_en: 'FJD2-B630 (φ320) Series' },
];
import { useToast } from '@/hooks/use-toast';
import * as XLSX from 'xlsx';

const SerialNumberManager = () => {
  const { serialNumbers, loading, addSerialNumber, deleteSerialNumber, updateSerialNumber } = useSerialNumbers();
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    serial_number: '',
    product_id: '',
    installation_date: new Date().getFullYear().toString(),
    location: 'Thailand',
    status: 'active' as 'active' | 'maintenance' | 'retired',
    notes: ''
  });
  const { toast } = useToast();

  const resetForm = () => {
    setFormData({
      serial_number: '',
      product_id: '',
      installation_date: new Date().getFullYear().toString(),
      location: 'Thailand',
      status: 'active' as 'active' | 'maintenance' | 'retired',
      notes: ''
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Find selected product name for notes
      const selectedProduct = staticProducts.find(p => p.id === formData.product_id);
      const productNote = selectedProduct ? `Sản phẩm: ${selectedProduct.name_th}` : '';
      const fullNotes = productNote + (formData.notes ? ` - ${formData.notes}` : '');
      
      await addSerialNumber({
        ...formData,
        product_id: null, // Always null since using static products
        installation_date: formData.installation_date || null,
        location: formData.location || null,
        notes: fullNotes || null
      });
      resetForm();
      setIsAddDialogOpen(false);
    } catch (error) {
      console.error('Error adding serial number:', error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteSerialNumber(id);
    } catch (error) {
      console.error('Error deleting serial number:', error);
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (e) => {
      try {
        const data = e.target?.result;
        const workbook = XLSX.read(data, { type: 'binary' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet) as any[];

        let successCount = 0;
        let errorCount = 0;

        for (const row of jsonData) {
          try {
            // Process Product ID from Excel to notes format
            const productId = String(row['Product ID'] || row['product_id'] || '').trim();
            const userNotes = String(row['Notes'] || row['notes'] || '').trim();
            
            // Create full notes with product info (if product exists)
            let fullNotes = '';
            if (productId) {
              // Find the product by ID in staticProducts
              const matchedProduct = staticProducts.find(p => p.id === productId);
              const productName = matchedProduct ? matchedProduct.name_th : productId;
              
              fullNotes = `Sản phẩm: ${productName}`;
              if (userNotes) {
                fullNotes += ` - ${userNotes}`;
              }
            } else if (userNotes) {
              fullNotes = userNotes;
            }

            await addSerialNumber({
              serial_number: String(row['Serial Number'] || row['serial_number'] || '').trim(),
              product_id: null, // Always null for static products
              installation_date: String(row['Installation Date'] || row['installation_date'] || '').trim() || null,
              location: String(row['Location'] || row['location'] || '').trim() || null,
              status: String(row['Status'] || row['status'] || 'active').toLowerCase() as 'active' | 'maintenance' | 'retired',
              notes: fullNotes || null
            });
            successCount++;
          } catch (error) {
            errorCount++;
            console.error('Error importing row:', row, error);
          }
        }

        toast({
          title: 'Hoàn thành import',
          description: `Thành công: ${successCount}, Lỗi: ${errorCount}`,
        });
      } catch (error) {
        console.error('Error reading file:', error);
        toast({
          title: 'Lỗi',
          description: 'Không thể đọc file Excel',
          variant: 'destructive'
        });
      }
    };
    reader.readAsBinaryString(file);
    event.target.value = ''; // Reset input
  };

  const handleExport = () => {
    const exportData = serialNumbers.map(sn => {
      // Extract product ID from notes field by matching with staticProducts
      let productId = '';
      if (sn.notes && sn.notes.includes('Sản phẩm:')) {
        const productName = sn.notes.split(' - ')[0].replace('Sản phẩm: ', '');
        // Find the product ID by matching the name
        const matchedProduct = staticProducts.find(p => 
          p.name_th === productName || p.name_en === productName
        );
        productId = matchedProduct ? matchedProduct.id : productName;
      }
      
      // Extract actual notes (without product info)
      const actualNotes = sn.notes && sn.notes.includes(' - ') ? 
        sn.notes.split(' - ').slice(1).join(' - ') : 
        (sn.notes && !sn.notes.includes('Sản phẩm:') ? sn.notes : '');

      return {
        'Serial Number': sn.serial_number,
        'Product ID': productId,
        'Installation Date': sn.installation_date || '',
        'Location': sn.location || '',
        'Status': sn.status,
        'Notes': actualNotes,
        'Created At': new Date(sn.created_at).toLocaleDateString('vi-VN'),
        'Updated At': new Date(sn.updated_at).toLocaleDateString('vi-VN')
      };
    });

    const ws = XLSX.utils.json_to_sheet(exportData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Serial Numbers');
    
    const fileName = `serial-numbers-${new Date().toISOString().split('T')[0]}.xlsx`;
    XLSX.writeFile(wb, fileName);

    toast({
      title: 'Thành công',
      description: 'Đã tải xuống file Excel'
    });
  };

  if (loading) {
    return <div className="flex justify-center p-8">Đang tải...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Quản lý Serial Number</h2>
          <p className="text-muted-foreground">Quản lý danh sách serial number sản phẩm</p>
        </div>
        
        <div className="flex gap-2">
          <Button onClick={handleExport} variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Tải xuống Excel
          </Button>
          
          <div className="relative">
            <Button variant="outline" asChild>
              <label htmlFor="excel-upload" className="cursor-pointer flex items-center">
                <Upload className="mr-2 h-4 w-4" />
                Import Excel
              </label>
            </Button>
            <input
              id="excel-upload"
              type="file"
              accept=".xlsx,.xls"
              className="hidden"
              onChange={handleFileUpload}
            />
          </div>
          
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Thêm Serial Number
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Thêm Serial Number mới</DialogTitle>
                <DialogDescription>
                  Nhập thông tin serial number mới vào form bên dưới
                </DialogDescription>
              </DialogHeader>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="serial_number">Serial Number *</Label>
                  <Input
                    id="serial_number"
                    value={formData.serial_number}
                    onChange={(e) => setFormData({ ...formData, serial_number: e.target.value })}
                    required
                    placeholder="VD: SN123456789"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="product_id">Product ID</Label>
                  <Select value={formData.product_id} onValueChange={(value) => setFormData({ ...formData, product_id: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn sản phẩm" />
                    </SelectTrigger>
                    <SelectContent>
                      {staticProducts.map((product) => (
                        <SelectItem key={product.id} value={product.id}>
                          {product.name_th} - {product.name_en}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="installation_date">Năm lắp đặt</Label>
                  <Input
                    id="installation_date"
                    type="number"
                    min="1980"
                    max="2050"
                    value={formData.installation_date}
                    onChange={(e) => setFormData({ ...formData, installation_date: e.target.value })}
                    placeholder="VD: 2024"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="location">Địa điểm lắp đặt</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="Thailand"
                    disabled
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="status">Trạng thái</Label>
                  <Select value={formData.status} onValueChange={(value) => setFormData({ ...formData, status: value as 'active' | 'maintenance' | 'retired' })}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="active">Hoạt động</SelectItem>
                      <SelectItem value="maintenance">Bảo trì</SelectItem>
                      <SelectItem value="retired">Ngừng hoạt động</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="notes">Ghi chú</Label>
                  <Textarea
                    id="notes"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Ghi chú thêm về serial number này..."
                  />
                </div>
                
                <div className="flex justify-end gap-2">
                  <Button type="button" variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                    Hủy
                  </Button>
                  <Button type="submit">Thêm</Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileSpreadsheet className="h-5 w-5" />
            Danh sách Serial Number
          </CardTitle>
          <CardDescription>
            Tổng cộng: {serialNumbers.length} serial number
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Serial Number</TableHead>
                  <TableHead>Product ID</TableHead>
                  <TableHead>Ngày lắp đặt</TableHead>
                  <TableHead>Địa điểm</TableHead>
                  <TableHead>Trạng thái</TableHead>
                  <TableHead>Ghi chú</TableHead>
                  <TableHead className="w-[100px]">Thao tác</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {serialNumbers.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                      Chưa có serial number nào. Hãy thêm serial number đầu tiên!
                    </TableCell>
                  </TableRow>
                ) : (
                  serialNumbers.map((serialNumber) => (
                    <TableRow key={serialNumber.id}>
                      <TableCell className="font-mono font-medium">
                        {serialNumber.serial_number}
                      </TableCell>
                       <TableCell>
                          {serialNumber.notes && serialNumber.notes.includes('Sản phẩm:') ? 
                            serialNumber.notes.split(' - ')[0].replace('Sản phẩm: ', '') 
                            : '-'
                          }
                        </TableCell>
                      <TableCell>{serialNumber.installation_date || '-'}</TableCell>
                      <TableCell>{serialNumber.location || '-'}</TableCell>
                      <TableCell>
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          serialNumber.status === 'active' ? 'bg-green-100 text-green-800' :
                          serialNumber.status === 'maintenance' ? 'bg-yellow-100 text-yellow-800' :
                          serialNumber.status === 'retired' ? 'bg-red-100 text-red-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {serialNumber.status === 'active' ? 'Hoạt động' :
                           serialNumber.status === 'maintenance' ? 'Bảo trì' :
                           serialNumber.status === 'retired' ? 'Ngừng hoạt động' : serialNumber.status}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="max-w-[200px] truncate" title={serialNumber.notes || ''}>
                          {serialNumber.notes && serialNumber.notes.includes(' - ') ? 
                            serialNumber.notes.split(' - ').slice(1).join(' - ') 
                            : (serialNumber.notes && !serialNumber.notes.includes('Sản phẩm:') ? serialNumber.notes : '-')
                          }
                        </div>
                      </TableCell>
                      <TableCell>
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-800">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Xác nhận xóa</AlertDialogTitle>
                              <AlertDialogDescription>
                                Bạn có chắc chắn muốn xóa serial number "{serialNumber.serial_number}"? 
                                Hành động này không thể hoàn tác.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Hủy</AlertDialogCancel>
                              <AlertDialogAction 
                                onClick={() => handleDelete(serialNumber.id)}
                                className="bg-red-600 hover:bg-red-700"
                              >
                                Xóa
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SerialNumberManager;