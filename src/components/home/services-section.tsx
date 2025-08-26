import React from "react";
import { ArrowRight, Wrench, Settings, Zap, Phone, Users, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import elevatorInterior from "@/assets/elevator-interior.jpg";
import elevatorShaft from "@/assets/elevator-shaft.jpg";

interface ServicesSectionProps {
  language: 'en' | 'ja';
}

const content = {
  ja: {
    title: "サービス",
    subtitle: "安全で効率的な運用を保証するプロフェッショナルなエレベーターサービス",
    viewAllServices: "すべてのサービスを見る",
    services: [
      {
        icon: Wrench,
        title: "設置サービス",
        description: "専門技術者による安全で正確なエレベーター設置",
        features: ["現地調査", "プロフェッショナル設置", "品質検査"]
      },
      {
        icon: Settings,
        title: "メンテナンス",
        description: "最適なパフォーマンスを維持するための定期点検と管理",
        features: ["定期点検", "予防保全", "性能最適化"]
      },
      {
        icon: Zap,
        title: "モダナイゼーション",
        description: "最新技術で既存エレベーターをアップグレード",
        features: ["システムアップグレード", "省エネルギー", "安全性向上"]
      },
      {
        icon: Phone,
        title: "緊急修理",
        description: "迅速な問題解決のための24時間緊急対応",
        features: ["24時間対応", "緊急派遣", "遠隔診断"]
      },
      {
        icon: Users,
        title: "コンサルティング",
        description: "エレベータープロジェクトのあらゆる側面に関する専門的なコンサルティング",
        features: ["プロジェクト計画", "技術アドバイス", "コスト最適化"]
      },
      {
        icon: Shield,
        title: "安全点検",
        description: "事故を防ぎ安全を確保するための定期安全点検",
        features: ["安全点検", "リスク分析", "改善計画"]
      }
    ]
  },
  en: {
    title: "Services",
    subtitle: "Professional elevator services ensuring safe and efficient operation",
    viewAllServices: "View All Services",
    services: [
      {
        icon: Wrench,
        title: "Installation Service",
        description: "Safe and precise elevator installation by professional technicians",
        features: ["Site survey", "Professional installation", "Quality inspection"]
      },
      {
        icon: Settings,
        title: "Maintenance",
        description: "Regular inspection and management to maintain optimal performance",
        features: ["Regular inspection", "Preventive maintenance", "Performance optimization"]
      },
      {
        icon: Zap,
        title: "Modernization",
        description: "Upgrade existing elevators with latest technology",
        features: ["System upgrade", "Energy efficiency", "Safety enhancement"]
      },
      {
        icon: Phone,
        title: "Emergency Repair",
        description: "24-hour emergency response providing rapid problem resolution",
        features: ["24-hour response", "Emergency dispatch", "Remote diagnosis"]
      },
      {
        icon: Users,
        title: "Consulting",
        description: "Professional consulting for all aspects of elevator projects",
        features: ["Project planning", "Technical advisory", "Cost optimization"]
      },
      {
        icon: Shield,
        title: "Safety Inspection",
        description: "Regular safety inspections to prevent accidents and ensure safety",
        features: ["Safety inspection", "Risk analysis", "Improvement plans"]
      }
    ]
  }
};

export const ServicesSection = ({ language }: ServicesSectionProps) => {
  const t = content[language];
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {t.services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="industrial-card hover:shadow-lg transition-all group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                      <IconComponent className="h-6 w-6 text-primary group-hover:text-white" />
                    </div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Service Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="relative group overflow-hidden rounded-lg">
            <img 
              src={elevatorInterior} 
              alt="Elevator Interior" 
              className="w-full h-80 object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h4 className="font-bold text-xl mb-2">
                {language === 'ja' ? 'プレミアムエレベーター内装' : 'Premium Elevator Interior'}
              </h4>
              <p className="text-gray-200">
                {language === 'ja' ? '快適な乗車体験を提供するモダンで洗練されたデザイン' : 'Modern and sophisticated design providing comfortable ride experience'}
              </p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <img 
              src={elevatorShaft} 
              alt="Elevator Shaft" 
              className="w-full h-80 object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h4 className="font-bold text-xl mb-2">
                {language === 'ja' ? '先進的なトラクションシステム' : 'Advanced Traction System'}
              </h4>
              <p className="text-gray-200">
                {language === 'ja' ? '最先端技術で安全で効率的な運用を保証' : 'Ensuring safe and efficient operation with cutting-edge technology'}
              </p>
            </div>
          </div>
        </div>

        {/* View All Services Button */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="btn-industrial"
            onClick={() => navigate('/services')}
          >
            {t.viewAllServices}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};