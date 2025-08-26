import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface NewsStoriesSectionProps {
  language: 'en' | 'ja';
}

const content = {
  en: {
    title: "News & Stories",
    stories: [
      {
        id: 1,
        title: "Elevator Technology 2025",
        location: "Tokyo, Japan",
        date: "Nov 18 - 21, 2025",
        description: "Elevator Technology 2025 – Innovation to accelerate vertical transportation November 18 – 20 | Tokyo Exhibition Centre | Japan | Hall 3, Booth C90",
        image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        hasVideo: false
      },
      {
        id: 2,
        title: "Advancing elevator safety with smart automation",
        description: "With our support, Elevator Control units IT and OT to advance elevator safety and improve efficiency.",
        image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        hasVideo: true
      },
      {
        id: 3,
        title: "Smart technology: Between innovation and reliability",
        description: "Find out how smart elevators and quantum sensors are revolutionizing our reality and learn about the challenges that must still be overcome.",
        image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        hasVideo: false
      },
      {
        id: 4,
        title: "Clean operation, anytime and anywhere",
        description: "Advanced maintenance solutions for optimal elevator performance.",
        image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        hasVideo: false
      },
      {
        id: 5,
        title: "Smart manufacturing redefines the elevator industry",
        description: "How digital transformation is revolutionizing elevator manufacturing processes.",
        image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        hasVideo: true
      },
      {
        id: 6,
        title: "From the design to the installation",
        description: "Complete elevator solutions from concept to commissioning.",
        image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        hasVideo: false
      }
    ]
  },
  ja: {
    title: "ニュース & ストーリー",
    stories: [
      {
        id: 1,
        title: "エレベーター技術 2025",
        location: "東京、日本",
        date: "11月18日 - 21日, 2025",
        description: "エレベーター技術 2025 – 垂直輸送を加速するイノベーション 11月18日 – 20日 | 東京展示センター | 日本 | ホール3、ブースC90",
        image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        hasVideo: false
      },
      {
        id: 2,
        title: "スマート自動化でエレベーターの安全性を向上",
        description: "私たちのサポートにより、エレベーター制御ユニットのITとOTがエレベーターの安全性を向上させ、効率を改善します。",
        image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        hasVideo: true
      },
      {
        id: 3,
        title: "スマート技術：イノベーションと信頼性の間",
        description: "スマートエレベーターと量子センサーが私たちの現実をどのように革命化しているかを発見し、まだ克服すべき課題について学びます。",
        image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        hasVideo: false
      },
      {
        id: 4,
        title: "クリーンな運用、いつでもどこでも",
        description: "最適なエレベーター性能のための高度なメンテナンスソリューション。",
        image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        hasVideo: false
      },
      {
        id: 5,
        title: "スマート製造がエレベーター業界を再定義",
        description: "デジタル変革がエレベーター製造プロセスをどのように革命化しているか。",
        image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        hasVideo: true
      },
      {
        id: 6,
        title: "設計から設置まで",
        description: "コンセプトから試運転まで、完全なエレベーターソリューション。",
        image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        hasVideo: false
      }
    ]
  }
};

export const NewsStoriesSection = ({ language }: NewsStoriesSectionProps) => {
  const t = content[language];
  const navigate = useNavigate();

  return (
    <section className="siemens-section py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="siemens-title text-4xl md:text-5xl text-foreground mb-8">
            {t.title}
          </h2>
        </div>

        <div className="siemens-grid">
          {t.stories.map((story, index) => (
            <div key={story.id} className={`siemens-card group cursor-pointer ${index === 0 ? 'md:col-span-2' : ''}`}>
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {story.hasVideo && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              
              <div className="p-6">
                {story.location && story.date && (
                  <div className="text-sm text-primary mb-2 font-medium">
                    {story.location}<br />
                    {story.date}
                  </div>
                )}
                
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {story.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {story.description}
                </p>
                
                <div className="flex items-center text-primary group-hover:text-secondary transition-colors">
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 px-8 py-3"
            onClick={() => navigate('/news')}
          >
            View All News
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};