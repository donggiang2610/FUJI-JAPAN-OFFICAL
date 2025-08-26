import React from "react";
import { Button } from "@/components/ui/button";
import flagsImage from "@/assets/flags.png";

interface LanguageSwitcherProps {
  currentLang: 'en' | 'ja';
  onLanguageChange: (lang: 'en' | 'ja') => void;
}

export const LanguageSwitcher = ({ currentLang, onLanguageChange }: LanguageSwitcherProps) => {
  return (
    <div className="flex items-center space-x-2">
      {/* English Flag Button */}
      <Button 
        variant="ghost" 
        size="sm" 
        className={`glass-morphism p-2 ${currentLang === 'en' ? 'ring-2 ring-white' : ''}`}
        onClick={() => onLanguageChange('en')}
      >
        <div className="w-12 h-8 bg-cover bg-center rounded-sm" 
             style={{ 
               backgroundImage: `url(/lovable-uploads/e3767485-d2a7-4edf-a7a1-95496e574aab.png)`
             }}
        />
      </Button>
      
      {/* Japanese Flag Button */}
      <Button 
        variant="ghost" 
        size="sm" 
        className={`glass-morphism p-2 ${currentLang === 'ja' ? 'ring-2 ring-white' : ''}`}
        onClick={() => onLanguageChange('ja')}
      >
        <div className="w-12 h-8 bg-cover bg-center rounded-sm" 
             style={{ 
               backgroundImage: `url(https://images.pexels.com/photos/161963/flag-japan-japanese-asia-161963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`
             }} 
        />
      </Button>
    </div>
  );
};