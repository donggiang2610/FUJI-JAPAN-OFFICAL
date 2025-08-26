import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface TechnologyShowcaseProps {
  language: 'en' | 'ja';
}

const content = {
  en: {
    technologies: [
      {
        id: 1,
        title: "Digital Twin Power",
        description: "Our comprehensive Digital Twin approach allows realistic simulations and validation of the entire elevator products, lines and complete plants and is the foundation for flexible, efficient and sustainable manufacturing.",
        features: [
          "Connected verification & certification",
          "Elevator systems engineering", 
          "Elevator design"
        ],
        image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        hasVideo: false
      },
      {
        id: 2,
        title: "Cutting edge technologies",
        description: "As an innovation leader, we think ahead to the next level of digital transformation and integrate cutting edge technologies such as Artificial Intelligence, Edge Computing, cloud computing, industrial 5G, blockchain and Additive Manufacturing into our portfolio.",
        features: [
          "Smart manufacturing for E&D"
        ],
        image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        hasVideo: true
      },
      {
        id: 3,
        title: "Elevator program management",
        description: "Achieve program planning and execution excellence with a model-based approach to elevator program management.",
        features: [
          "Learn more"
        ],
        image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        hasVideo: false
      }
    ]
  },
  ja: {
    technologies: [
      {
        id: 1,
        title: "デジタルツインパワー",
        description: "私たちの包括的なデジタルツインアプローチにより、エレベーター製品全体、ライン、完全なプラントのリアルなシミュレーションと検証が可能になり、柔軟で効率的で持続可能な製造の基盤となります。",
        features: [
          "接続された検証と認証",
          "エレベーターシステムエンジニアリング",
          "エレベーター設計"
        ],
        image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        hasVideo: false
      },
      {
        id: 2,
        title: "最先端技術",
        description: "イノベーションリーダーとして、私たちはデジタル変革の次のレベルを先取りし、人工知能、エッジコンピューティング、クラウドコンピューティング、産業5G、ブロックチェーン、アディティブマニュファクチャリングなどの最先端技術をポートフォリオに統合しています。",
        features: [
          "E&D向けスマート製造"
        ],
        image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        hasVideo: true
      },
      {
        id: 3,
        title: "エレベータープログラム管理",
        description: "エレベータープログラム管理へのモデルベースアプローチで、プログラム計画と実行の卓越性を実現します。",
        features: [
          "詳細を見る"
        ],
        image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        hasVideo: false
      }
    ]
  }
};

export const TechnologyShowcase = ({ language }: TechnologyShowcaseProps) => {
  const t = content[language];
  const navigate = useNavigate();

  return (
    <section className="siemens-section py-20">
      <div className="container mx-auto px-4">
        <div className="siemens-grid">
          {t.technologies.map((tech, index) => (
            <div key={tech.id} className="siemens-card group cursor-pointer">
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={tech.image}
                  alt={tech.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {tech.hasVideo && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {tech.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {tech.description}
                </p>
                
                <div className="space-y-2">
                  {tech.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-primary hover:text-secondary transition-colors cursor-pointer">
                      <ArrowRight className="w-4 h-4 mr-2" />
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Back to top button */}
        <div className="text-center mt-16">
          <Button 
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 px-8 py-3"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className="mr-2">▲</span>
            Back to top
          </Button>
        </div>
      </div>
    </section>
  );
};