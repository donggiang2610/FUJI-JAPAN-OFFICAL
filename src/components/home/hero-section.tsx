import React, { useEffect, useState } from "react";
import { ArrowRight, Play, Zap, Shield, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface HeroSectionProps {
  language: 'en' | 'ja';
}

const content = {
  en: {
    title: "FUJI",
    subtitle: "富士エレベーター",
    tagline1: "SMART CONTROL",
    tagline2: "STRONG DRIVE", 
    tagline3: "SEAMLESS RIDE",
    company: "FUJI JAPAN ELEVATOR CO., LTD",
    description: "Since 1995 - Combining traditional Japanese craftsmanship with cutting-edge elevator technology for reliable vertical transportation solutions",
    cta1: "View Products",
    cta2: "About Us",
    features: [
      {
        icon: Settings,
        title: "Control Systems",
        description: "Advanced smart control technology"
      },
      {
        icon: Zap,
        title: "Drive Systems", 
        description: "Powerful and efficient drive technology"
      },
      {
        icon: Shield,
        title: "Seamless Ride",
        description: "Comfortable and quiet ride experience"
      }
    ],
    stats: [
      { number: "29+", label: "Years Experience" },
      { number: "5,000+", label: "Installations" },
      { number: "15+", label: "Countries" },
      { number: "99.9%", label: "Reliability" }
    ]
  },
  ja: {
    title: "FUJI",
    subtitle: "富士エレベーター",
    tagline1: "スマートコントロール",
    tagline2: "ストロングドライブ",
    tagline3: "シームレスライド", 
    company: "富士日本エレベーター株式会社",
    description: "1995年創業 - 日本の伝統的な職人技術と最新のエレベーター技術を融合した、信頼性の高い垂直輸送ソリューションを提供",
    cta1: "製品を見る",
    cta2: "会社概要",
    features: [
      {
        icon: Settings,
        title: "制御システム",
        description: "最先端のスマート制御技術"
      },
      {
        icon: Zap,
        title: "ドライブシステム",
        description: "強力で効率的な駆動技術"
      },
      {
        icon: Shield,
        title: "スムーズライド",
        description: "快適で静かな乗り心地"
      }
    ],
    stats: [
      { number: "29+", label: "年の経験" },
      { number: "5,000+", label: "設置実績" },
      { number: "15+", label: "国" },
      { number: "99.9%", label: "信頼性" }
    ]
  }
};

export const HeroSection = ({ language }: HeroSectionProps) => {
  const t = content[language];
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden blue-rays-bg">
      {/* Animated Blue Rays Background */}
      <div className="blue-rays">
        {[...Array(16)].map((_, i) => (
          <div
            key={i}
            className="blue-ray"
            style={{
              transform: `translate(-50%, -50%) rotate(${i * 22.5}deg)`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${3 + i * 0.1}s`
            }}
          />
        ))}
      </div>

      {/* Central Glow Effect */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* FUJI Logo */}
          <div className={`flex justify-center mb-8 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="text-7xl md:text-9xl font-bold text-white tracking-wider">
              {t.title}
            </div>
          </div>
          
          {/* Japanese subtitle */}
          <div className={`text-xl md:text-2xl text-primary mb-12 font-medium tracking-widest transition-all duration-1000 delay-200 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            {t.subtitle}
          </div>

          {/* Main Taglines - Siemens Style */}
          <div className={`space-y-6 mb-16 transition-all duration-1000 delay-400 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-wide">
              {t.tagline1}
            </h1>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-wide flex items-center justify-center gap-6">
              <span className="text-primary text-6xl">▶</span>
              {t.tagline2}
              <span className="text-secondary text-6xl">◀</span>
            </h2>
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-wide">
              {t.tagline3}
            </h3>
          </div>
          
          {/* Company name */}
          <div className={`text-xl md:text-2xl text-muted-foreground mb-16 tracking-widest font-medium transition-all duration-1000 delay-600 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            {t.company}
          </div>

          {/* Description */}
          <p className={`text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-16 transition-all duration-1000 delay-800 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            {t.description}
          </p>

          {/* Technology Features - Siemens Style Grid */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto transition-all duration-1000 delay-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            {t.features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="siemens-card group hover-lift">
                  <div className="p-8">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-1200 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <Button 
              size="lg" 
              className="group relative overflow-hidden btn-siemens px-10 py-4 text-xl font-semibold"
              onClick={() => navigate('/products')}
            >
              <span className="relative z-10">{t.cta1}</span>
              <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="group border-primary/50 text-primary hover:bg-primary/10 text-xl px-10 py-4 font-semibold transition-all duration-300"
              onClick={() => navigate('/about')}
            >
              <Play className="mr-3 h-6 w-6 transition-transform group-hover:scale-110" />
              {t.cta2}
            </Button>
          </div>

          {/* Stats - Siemens Style */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 delay-1400 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            {t.stats.map((stat, index) => (
              <div key={index} className="group relative">
                <div className="siemens-card p-8 text-center hover-lift">
                  <div className="text-4xl md:text-5xl font-bold text-gradient-primary mb-3">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
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