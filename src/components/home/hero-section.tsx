import React from "react";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
const heroImage = "/lovable-uploads/57dc1d74-a5b1-4084-a40c-c4d359fd3582.png";
import elevatorInstallation from "@/assets/thai-elevator-installation.jpg";
import elevatorControlRoom from "@/assets/thai-control-systems.jpg";
import modernFactory from "@/assets/modern-factory-bg.jpg";
import modernBuildingHero from "@/assets/modern-building-hero-new.jpg";
interface HeroSectionProps {
  language: 'en' | 'ja';
}
const content = {
  en: {
    title: "PROFESSIONAL",
    titleHighlight: "ELEVATOR SOLUTIONS",
    subtitle: "Advanced Japanese Elevator Technology - Leading provider of passenger elevators, freight elevators, escalators, maintenance and modernization services.",
    cta1: "View Products",
    cta2: "About Us",
    stats: [{
      number: "25+",
      label: "Years Experience"
    }, {
      number: "5,000+",
      label: "Installations"
    }, {
      number: "15+",
      label: "Countries"
    }, {
      number: "99.9%",
      label: "Reliability"
    }]
  },
  ja: {
    title: "プロフェッショナル",
    titleHighlight: "エレベーターソリューション",
    subtitle: "先進的な日本のエレベーター技術 - 乗用エレベーター、貨物エレベーター、エスカレーター、メンテナンス、モダナイゼーションサービスの大手プロバイダー",
    cta1: "製品を見る",
    cta2: "会社概要",
    stats: [{
      number: "25+",
      label: "年の経験"
    }, {
      number: "5,000+",
      label: "設置実績"
    }, {
      number: "15+",
      label: "国"
    }, {
      number: "99.9%",
      label: "信頼性"
    }]
  }
};
export const HeroSection = ({
  language
}: HeroSectionProps) => {
  const t = content[language];
  const navigate = useNavigate();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Siemens-style Background with Blue Rays */}
      <div className="absolute inset-0">
        {/* Blue ray pattern background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10"></div>
        
        {/* Animated blue rays */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 w-1 bg-gradient-to-t from-transparent via-primary/30 to-transparent transform-gpu"
              style={{
                height: '200vh',
                transformOrigin: 'center bottom',
                transform: `translate(-50%, -50%) rotate(${i * 30}deg)`,
                animation: `pulse ${2 + i * 0.2}s ease-in-out infinite alternate`
              }}
            />
          ))}
        </div>
        
        {/* Central glow */}
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* FUJI Logo */}
          <div className="flex justify-center mb-12">
            <div className="text-6xl md:text-8xl font-bold text-white tracking-wider">
              FUJI
            </div>
          </div>
          
          {/* Japanese subtitle */}
          <div className="text-lg md:text-xl text-primary mb-8 font-medium tracking-widest">
            富士エレベーター
          </div>

          {/* Main Taglines */}
          <div className="space-y-4 mb-12">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-wide">
              SMART CONTROL
            </h1>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-wide flex items-center justify-center gap-4">
              <span className="text-primary">▶</span>
              STRONG DRIVE
              <span className="text-secondary">◀</span>
            </h2>
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-wide">
              SEAMLESS RIDE
            </h3>
          </div>
          
          {/* Company name */}
          <div className="text-lg md:text-xl text-muted-foreground mb-12 tracking-widest font-medium">
            FUJI JAPAN ELEVATOR CO., LTD
          </div>

          {/* Traditional subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12">
            {language === 'ja' 
              ? '1995年創業 - 日本の伝統的な職人技術と最新のエレベーター技術を融合した、信頼性の高い垂直輸送ソリューションを提供'
              : 'Since 1995 - Combining traditional Japanese craftsmanship with cutting-edge elevator technology for reliable vertical transportation solutions'
            }
          </p>

          {/* Elevator equipment showcase */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
            <div className="siemens-card group">
              <div className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <span className="text-2xl text-white">🏗️</span>
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">
                  {language === 'ja' ? '制御システム' : 'Control Systems'}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {language === 'ja' ? '最先端のスマート制御技術' : 'Advanced smart control technology'}
                </p>
              </div>
            </div>
            
            <div className="siemens-card group">
              <div className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-secondary to-primary rounded-lg flex items-center justify-center">
                  <span className="text-2xl text-white">⚙️</span>
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">
                  {language === 'ja' ? 'ドライブシステム' : 'Drive Systems'}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {language === 'ja' ? '強力で効率的な駆動技術' : 'Powerful and efficient drive technology'}
                </p>
              </div>
            </div>
            
            <div className="siemens-card group">
              <div className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <span className="text-2xl text-white">🚀</span>
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">
                  {language === 'ja' ? 'スムーズライド' : 'Seamless Ride'}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {language === 'ja' ? '快適で静かな乗り心地' : 'Comfortable and quiet ride experience'}
                </p>
              </div>
            </div>
            </span>
          </h1>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="group relative overflow-hidden btn-siemens px-8 py-4 text-lg font-semibold"
              onClick={() => navigate('/products')}
            >
              <span className="relative z-10">{t.cta1}</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="group border-primary/50 text-primary hover:bg-primary/10 text-lg px-8 py-4 font-semibold transition-all duration-300"
              onClick={() => navigate('/about')}
            >
              <Play className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              {t.cta2}
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {t.stats.map((stat, index) => (
              <div key={index} className="group relative">
                <div className="siemens-card p-6 text-center">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};