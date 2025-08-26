import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface CompanyOverviewProps {
  language: 'en' | 'ja';
}

const content = {
  en: {
    title: "Who we are",
    description1: "We are a leading technology company focused on industry, infrastructure, mobility, and healthcare. Our purpose is to create technology to transform the everyday, for everyone.",
    description2: "By combining the real and the digital worlds, we empower customers to accelerate their digital and sustainability transformations, making factories more efficient, cities more livable, and transportation more sustainable.",
    description3: "A leader in industrial AI, we leverage our deep domain know-how to apply AI – including generative AI – to real-world applications, making AI accessible and impactful for customers across diverse industries.",
    showMore: "Show more"
  },
  ja: {
    title: "私たちについて",
    description1: "私たちは産業、インフラ、モビリティ、ヘルスケアに焦点を当てた大手テクノロジー企業です。私たちの目的は、すべての人の日常を変革するテクノロジーを創造することです。",
    description2: "リアルとデジタルの世界を融合することで、お客様のデジタル・サステナビリティ変革を加速し、工場をより効率的に、都市をより住みやすく、交通をより持続可能にします。",
    description3: "産業AIのリーダーとして、私たちは深いドメイン知識を活用してAI（生成AIを含む）を実世界のアプリケーションに適用し、多様な業界のお客様にとってAIをアクセシブルで影響力のあるものにしています。",
    showMore: "詳細を見る"
  }
};

export const CompanyOverview = ({ language }: CompanyOverviewProps) => {
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

    const element = document.getElementById('company-overview');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="company-overview" className="siemens-section py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className={`relative transition-all duration-1000 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="aspect-[4/3] rounded-xl overflow-hidden siemens-card">
              <img 
                src="https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Modern building"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating accent elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/20 rounded-full blur-lg animate-float" style={{ animationDelay: '1s' }}></div>
          </div>

          {/* Content */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <h2 className="siemens-title text-5xl md:text-6xl text-foreground">
              {t.title}
            </h2>
            
            <div className="space-y-6 text-lg siemens-subtitle">
              <p className="leading-relaxed">{t.description1}</p>
              <p className="leading-relaxed">{t.description2}</p>
              <p className="leading-relaxed">{t.description3}</p>
            </div>

            <Button 
              className="btn-teal text-background font-semibold px-8 py-4 text-lg hover:shadow-teal transition-all duration-300 group"
              onClick={() => navigate('/about')}
            >
              {t.showMore}
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};