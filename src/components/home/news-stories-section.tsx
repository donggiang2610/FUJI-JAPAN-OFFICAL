import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Calendar, MapPin } from "lucide-react";
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
        hasVideo: false,
        featured: true
      },
      {
        id: 2,
        title: "Advancing elevator safety with smart automation",
        description: "With our support, Elevator Control units IT and OT to advance elevator safety and improve efficiency.",
        image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        hasVideo: true,
        featured: false
      },
      {
        id: 3,
        title: "Smart technology: Between innovation and reliability",
        description: "Find out how smart elevators and quantum sensors are revolutionizing our reality and learn about the challenges that must still be overcome.",
        image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        hasVideo: false,
        featured: false
      },
      {
        id: 4,
        title: "Clean operation, anytime and anywhere",
        description: "Advanced maintenance solutions for optimal elevator performance.",
        image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        hasVideo: false,
        featured: false
      },
      {
        id: 5,
        title: "3D printing redefines the elevator industry",
        description: "How digital transformation is revolutionizing elevator manufacturing processes.",
        image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        hasVideo: true,
        featured: false
      },
      {
        id: 6,
        title: "From the design to the installation",
        description: "Complete elevator solutions from concept to commissioning.",
        image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        hasVideo: false,
        featured: false
      }
    ],
    viewAllNews: "View All News"
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
        hasVideo: false,
        featured: true
      },
      {
        id: 2,
        title: "スマート自動化でエレベーターの安全性を向上",
        description: "私たちのサポートにより、エレベーター制御ユニットのITとOTがエレベーターの安全性を向上させ、効率を改善します。",
        image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        hasVideo: true,
        featured: false
      },
      {
        id: 3,
        title: "スマート技術：イノベーションと信頼性の間",
        description: "スマートエレベーターと量子センサーが私たちの現実をどのように革命化しているかを発見し、まだ克服すべき課題について学びます。",
        image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        hasVideo: false,
        featured: false
      },
      {
        id: 4,
        title: "クリーンな運用、いつでもどこでも",
        description: "最適なエレベーター性能のための高度なメンテナンスソリューション。",
        image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        hasVideo: false,
        featured: false
      },
      {
        id: 5,
        title: "3Dプリンティングがエレベーター業界を再定義",
        description: "デジタル変革がエレベーター製造プロセスをどのように革命化しているか。",
        image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        hasVideo: true,
        featured: false
      },
      {
        id: 6,
        title: "設計から設置まで",
        description: "コンセプトから試運転まで、完全なエレベーターソリューション。",
        image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        hasVideo: false,
        featured: false
      }
    ],
    viewAllNews: "すべてのニュースを見る"
  }
};

export const TechnologyShowcase = ({ language }: TechnologyShowcaseProps) => {
  const t = content[language];
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('technology-showcase');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="technology-showcase" className="news-section py-24">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="siemens-title text-4xl md:text-5xl text-foreground mb-6">
            {t.title}
          </h2>
        </div>

        {/* News Grid - Siemens Style */}
        <div className="news-grid">
          {t.stories.map((story, index) => {
            const IconComponent = story.icon;
            return (
              <div 
                key={story.id} 
                className={`news-card group cursor-pointer transition-all duration-1000 delay-${index * 100} ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} ${story.featured ? 'md:col-span-2' : ''}`}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {story.hasVideo && (
                    <div className="video-play-btn">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  
                  {/* Technology Icon */}
                  {IconComponent && (
                    <div className="absolute top-6 left-6">
                      <div className="w-12 h-12 bg-primary/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="p-8">
                  {story.location && story.date && (
                    <div className="flex items-center gap-4 mb-4 text-sm text-primary">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {story.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {story.date}
                      </div>
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {story.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {story.description}
                  </p>
                  
                  <div className="flex items-center text-primary group-hover:text-secondary transition-colors">
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All News Button */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-600 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <Button 
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 px-8 py-3 group"
            onClick={() => navigate('/news')}
          >
            {t.viewAllNews}
            <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};