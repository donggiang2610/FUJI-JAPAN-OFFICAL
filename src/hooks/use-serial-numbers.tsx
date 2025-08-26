import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export interface SerialNumber {
  id: string;
  serial_number: string;
  product_id: string | null;
  installation_date: string | null;
  location: string | null;
  status: 'active' | 'maintenance' | 'retired';
  notes: string | null;
  created_at: string;
  updated_at: string;
  product?: {
    id: string;
    name_th: string;
    name_en: string;
    description_th: string;
    description_en: string;
    image_url: string;
    specifications: any;
    features_th: string[];
    features_en: string[];
    category?: {
      name_th: string;
      name_en: string;
    };
  };
}

export interface SerialSearchResult {
  serialNumber: SerialNumber;
  product: SerialNumber['product'];
}

export const useSerialNumbers = () => {
  const [serialNumbers, setSerialNumbers] = useState<SerialNumber[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchSerialNumbers = async () => {
    try {
      const { data, error } = await supabase
        .from('serial_numbers')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setSerialNumbers((data || []).map(item => ({
        ...item,
        status: item.status as 'active' | 'maintenance' | 'retired'
      })));
    } catch (error) {
      console.error('Error fetching serial numbers:', error);
      toast({
        title: 'Lỗi',
        description: 'Không thể tải danh sách serial number',
        variant: 'destructive'
      });
    }
  };

  const searchSerialNumber = async (serialNumber: string): Promise<SerialSearchResult | null> => {
    try {
      const response = await fetch(`https://aiedvxrxzsmtupsdoyui.supabase.co/functions/v1/search-serial/${encodeURIComponent(serialNumber)}`, {
        headers: {
          'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFpZWR2eHJ4enNtdHVwc2RveXVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUwNzQ3NTksImV4cCI6MjA3MDY1MDc1OX0.IrYG5WIdw4eBctMXG4BVxmVh_-S4taVcLJCzu72CNPk'
        }
      });

      if (response.status === 404) {
        return null;
      }

      if (!response.ok) {
        throw new Error('Search failed');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error searching serial number:', error);
      toast({
        title: 'Lỗi',
        description: 'Không thể tìm kiếm serial number',
        variant: 'destructive'
      });
      return null;
    }
  };

  const addSerialNumber = async (serialNumber: Omit<SerialNumber, 'id' | 'created_at' | 'updated_at' | 'product'>) => {
    try {
      // Process installation_date properly
      let processedInstallationDate = null;
      if (serialNumber.installation_date) {
        const dateStr = String(serialNumber.installation_date).trim();
        // Check if already in YYYY-MM-DD format
        if (dateStr.match(/^\d{4}-\d{2}-\d{2}$/)) {
          processedInstallationDate = dateStr;
        } else if (dateStr.match(/^\d{4}$/)) {
          // If just year, add -01-01
          processedInstallationDate = `${dateStr}-01-01`;
        } else {
          processedInstallationDate = dateStr;
        }
      }

      const processedSerialNumber = {
        ...serialNumber,
        product_id: null, // Always null for static products
        installation_date: processedInstallationDate
      };

      const { error } = await supabase
        .from('serial_numbers')
        .insert(processedSerialNumber);

      if (error) throw error;
      
      await fetchSerialNumbers();
      toast({
        title: 'Thành công',
        description: 'Đã thêm serial number mới'
      });
    } catch (error: any) {
      console.error('Error adding serial number:', error);
      if (error.code === '23505') {
        toast({
          title: 'Lỗi',
          description: 'Serial number này đã tồn tại',
          variant: 'destructive'
        });
      } else {
        toast({
          title: 'Lỗi',
          description: 'Không thể thêm serial number',
          variant: 'destructive'
        });
      }
    }
  };

  const deleteSerialNumber = async (id: string) => {
    try {
      const { error } = await supabase
        .from('serial_numbers')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      await fetchSerialNumbers();
      toast({
        title: 'Thành công',
        description: 'Đã xóa serial number'
      });
    } catch (error) {
      console.error('Error deleting serial number:', error);
      toast({
        title: 'Lỗi',
        description: 'Không thể xóa serial number',
        variant: 'destructive'
      });
    }
  };

  const updateSerialNumber = async (id: string, updates: Partial<SerialNumber>) => {
    try {
      const { error } = await supabase
        .from('serial_numbers')
        .update(updates)
        .eq('id', id);

      if (error) throw error;
      
      await fetchSerialNumbers();
      toast({
        title: 'Thành công',
        description: 'Đã cập nhật serial number'
      });
    } catch (error) {
      console.error('Error updating serial number:', error);
      toast({
        title: 'Lỗi',
        description: 'Không thể cập nhật serial number',
        variant: 'destructive'
      });
    }
  };

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      await fetchSerialNumbers();
      setLoading(false);
    };

    loadData();
  }, []);

  return {
    serialNumbers,
    loading,
    searchSerialNumber,
    addSerialNumber,
    deleteSerialNumber,
    updateSerialNumber,
    refetch: fetchSerialNumbers
  };
};