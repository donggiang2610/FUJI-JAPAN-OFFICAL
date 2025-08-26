import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Upload, X, Image as ImageIcon } from 'lucide-react';

interface ProductImageUploadProps {
  productId: string;
  currentImageUrl?: string;
  onImageUpdate: (newImageUrl: string) => void;
  language: 'ja' | 'en';
}

const ProductImageUpload: React.FC<ProductImageUploadProps> = ({
  productId,
  currentImageUrl,
  onImageUpdate,
  language
}) => {
  const [uploading, setUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const { toast } = useToast();

  const content = {
    ja: {
      uploadImage: "画像をアップロード",
      dragDrop: "画像をドラッグ＆ドロップするか、クリックして選択してください",
      currentImage: "現在の画像",
      uploading: "アップロード中...",
      success: "画像が正常にアップロードされました",
      error: "画像のアップロードに失敗しました",
      invalidFile: "JPG、PNGファイルのみアップロード可能です",
      fileTooLarge: "ファイルサイズは5MB以下である必要があります"
    },
    en: {
      uploadImage: "Upload Image",
      dragDrop: "Drag and drop an image or click to select",
      currentImage: "Current Image",
      uploading: "Uploading...",
      success: "Image uploaded successfully",
      error: "Failed to upload image",
      invalidFile: "Only JPG and PNG files are allowed",
      fileTooLarge: "File size must be less than 5MB"
    }
  };

  const t = content[language];

  const uploadImage = async (file: File) => {
    try {
      setUploading(true);

      // Validate file type
      if (!file.type.startsWith('image/')) {
        toast({
          title: "Error",
          description: t.invalidFile,
          variant: "destructive"
        });
        return;
      }

      // Validate file size (5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "Error",
          description: t.fileTooLarge,
          variant: "destructive"
        });
        return;
      }

      // Create unique filename
      const fileExt = file.name.split('.').pop();
      const fileName = `${productId}-${Date.now()}.${fileExt}`;

      // Upload to Supabase storage
      const { data, error } = await supabase.storage
        .from('product-images')
        .upload(fileName, file, {
          cacheControl: '3600',
          upsert: false
        });

      if (error) throw error;

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('product-images')
        .getPublicUrl(data.path);

      // Update product in database
      const { error: updateError } = await supabase
        .from('products')
        .update({ image_url: publicUrl })
        .eq('id', productId);

      if (updateError) throw updateError;

      onImageUpdate(publicUrl);
      
      toast({
        title: "Success",
        description: t.success
      });

    } catch (error) {
      console.error('Error uploading image:', error);
      toast({
        title: "Error",
        description: t.error,
        variant: "destructive"
      });
    } finally {
      setUploading(false);
    }
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      uploadImage(file);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragOver(false);
    
    const file = event.dataTransfer.files[0];
    if (file) {
      uploadImage(file);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragOver(false);
  };

  return (
    <div className="space-y-4">
      {currentImageUrl && (
        <div>
          <Label className="text-sm font-medium">{t.currentImage}</Label>
          <div className="mt-1">
            <img 
              src={currentImageUrl} 
              alt="Product" 
              className="w-24 h-24 object-cover rounded-lg border"
            />
          </div>
        </div>
      )}

      <div>
        <Label className="text-sm font-medium">{t.uploadImage}</Label>
        <div
          className={`mt-1 border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
            dragOver 
              ? 'border-primary bg-primary/5' 
              : 'border-muted-foreground/25 hover:border-primary/50'
          }`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onClick={() => document.getElementById(`file-input-${productId}`)?.click()}
        >
          <Input
            id={`file-input-${productId}`}
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
            disabled={uploading}
          />
          
          {uploading ? (
            <div className="flex flex-col items-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              <p className="mt-2 text-sm text-muted-foreground">{t.uploading}</p>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <Upload className="h-8 w-8 text-muted-foreground mb-2" />
              <p className="text-sm text-muted-foreground">{t.dragDrop}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductImageUpload;