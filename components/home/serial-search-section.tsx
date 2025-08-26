import React from "react";
import { SerialSearch } from "@/components/ui/serial-search";
import { Search, Database } from "lucide-react";

interface SerialSearchSectionProps {
  language: 'en' | 'ja';
}

const content = {
  en: {
    title: "Product Serial Number Search",
    subtitle: "Enter your product's serial number to check installation information and status",
    placeholder: "Enter serial number..."
  },
  ja: {
    title: "製品シリアル番号検索",
    subtitle: "製品のシリアル番号を入力して、設置情報とステータスを確認してください",
    placeholder: "シリアル番号を入力..."
  }
};

export const SerialSearchSection = ({ language }: SerialSearchSectionProps) => {
  const t = content[language];
  
  return (
    <section className="siemens-section py-20">
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="siemens-title text-4xl md:text-5xl text-foreground mb-6">
              {t.title}
            </h2>
            <p className="siemens-subtitle text-xl max-w-3xl mx-auto leading-relaxed">
              {t.subtitle}
            </p>
          </div>

          {/* Search Panel */}
          <div className="siemens-card p-8 md:p-12 mb-12">
              <div className="max-w-2xl mx-auto">
                <SerialSearch 
                  placeholder={t.placeholder}
                  onSearch={(serialNumber) => {
                    console.log('Searching for:', serialNumber);
                  }}
                  language={language}
                />
              </div>
          </div>
          
          {/* Feature highlights */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="siemens-card p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-primary rounded-lg flex items-center justify-center">
                <Search className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">
                {language === 'ja' ? 'リアルタイム検索' : 'Real-time Search'}
              </div>
            </div>
            
            <div className="siemens-card p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-secondary rounded-lg flex items-center justify-center">
                <Database className="h-6 w-6 text-background" />
              </div>
              <div className="text-2xl font-bold text-secondary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">
                {language === 'ja' ? '正確な情報' : 'Accurate Info'}
              </div>
            </div>
            
            <div className="siemens-card p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">⚡</span>
              </div>
              <div className="text-2xl font-bold text-primary mb-2">
                {language === 'ja' ? '瞬時' : 'Instant'}
              </div>
              <div className="text-sm text-muted-foreground">
                {language === 'ja' ? '結果' : 'Results'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};