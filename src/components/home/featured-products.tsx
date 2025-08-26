import React from "react";
import { ArrowRight, Zap, Shield, Settings, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

interface FeaturedProductsProps {
  language: 'en' | 'ja';
}

const content = {
  en: {
    title: "Featured Products",
    subtitle: "Discover THAI FUJI's elevator solutions crafted with cutting-edge technology",
    viewAll: "View All Products",
    learnMore: "Learn More",
    products: [
      {
        id: 1,
        name: "FES Control Cabinet",
        category: "Control System",
        description: "EN81-20, CE compliant elevator control cabinet with advanced safety features",
        features: ["EN81-20, CE compliant", "Auto brake force monitoring", "Door lock bypass device", "Secondary brake safety"],
        image: "/lovable-uploads/0b6b45d0-94c1-4fe3-ae57-c38c9a1f2185.png",
        badge: "Popular"
      },
      {
        id: 2,
        name: "FJD1 SERIES",
        category: "Traction System", 
        description: "High-capacity traction machine with reliable performance and safety features",
        features: ["AC380V / DC110V brake", "Load capacity up to 5500kg", "S5–40% duty, stable & reliable", "Class F insulation, IP41 protection"],
        image: "/lovable-uploads/74b9382f-7881-42e9-a882-81b89d7210a6.png",
        badge: "New"
      }
    ]
  },
  ja: {
    title: "注目製品",
    subtitle: "最先端技術で作られたFUJI Japanのエレベーターソリューションをご覧ください",
    viewAll: "すべての製品を見る",
    learnMore: "詳細を見る",
    products: [
      {
        id: 1,
        name: "FES制御盤",
        category: "制御システム",
        description: "EN81-20、CE準拠の高度な安全機能を備えたエレベーター制御盤",
        features: ["EN81-20, CE compliant", "ตรวจสอบแรงเบรกอัตโนมัติ", "อุปกรณ์บายพาสล็อคประตู", "ความปลอดภัยเบรกสำรอง"],
        image: "/lovable-uploads/0b6b45d0-94c1-4fe3-ae57-c38c9a1f2185.png",
        badge: "人気"
      },
      {
        id: 2,
        name: "FJD1シリーズ",
        category: "トラクションシステム",
        description: "信頼性の高い性能と安全機能を備えた大容量トラクションマシン",
        features: ["AC380V / DC110Vブレーキ", "最大5500kgの積載容量", "S5–40%デューティ、安定・信頼性", "クラスF絶縁、IP41保護"],
        image: "/lovable-uploads/74b9382f-7881-42e9-a882-81b89d7210a6.png",
        badge: "新製品"
      }
    ]
  }
};

export const FeaturedProducts = ({ language }: FeaturedProductsProps) => {
  const t = content[language] || content.en;
  const navigate = useNavigate();

  return (
    <section className="siemens-section py-20">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="siemens-title text-4xl md:text-5xl text-foreground mb-6">
            {t.title}
          </h2>
          <p className="siemens-subtitle text-xl max-w-3xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Products Grid */}
        <div className="siemens-grid mb-16">
          {t.products.map((product, index) => (
            <div key={product.id} className="siemens-card group cursor-pointer">
                {/* Image Section */}
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Badge */}
                  <div className="absolute top-6 left-6">
                    <div className="bg-primary text-white px-3 py-1 rounded text-sm font-medium">
                      {product.badge}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <div className="text-sm text-primary mb-2 font-medium uppercase tracking-wide">
                    {product.category}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                    {product.name}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                    {product.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {product.features.slice(0, 2).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-primary text-sm">
                        <ArrowRight className="w-4 h-4 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button 
            className="btn-siemens px-8 py-3 font-semibold"
            onClick={() => navigate('/products')}
          >
            {t.viewAll}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};