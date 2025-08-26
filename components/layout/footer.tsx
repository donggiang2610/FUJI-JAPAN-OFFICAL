import React from "react";
import { Mail, Phone, MapPin, ArrowRight, Facebook, Twitter, Youtube, Linkedin, Instagram } from "lucide-react";

interface FooterProps {
  language: 'en' | 'ja';
}

const content = {
  en: {
    company: "FUJI",
    tagline: "Advanced Japanese Elevator Technology",
    description: "FUJI Japan Elevator is a leading provider of passenger elevators, freight elevators, escalators, maintenance and modernization services with advanced Japanese technology, AI innovations and smart systems.",
    address: "Shinmei minami 1-1-41, Adachi-ku, Tokyo, Japan",
    phone: "+81-3-1234-5678",
    email: "info@fuji-elevator.jp",
    website: "fuji-elevator.jp",
    copyright: "© 2024 FUJI Japan Elevator. All rights reserved.",
    socialLinks: "Follow us"
  },
  ja: {
    company: "FUJI",
    tagline: "先進的な日本のエレベーター技術",
    description: "富士日本エレベーター株式会社は、先進的な日本の技術、AIイノベーション、スマートシステムを備えた乗用エレベーター、貨物エレベーター、エスカレーター、メンテナンス、モダナイゼーションサービスの大手プロバイダーです。",
    address: "東京都足立区新田南1-1-41",
    phone: "+81-3-1234-5678",
    email: "info@fuji-elevator.jp",
    website: "fuji-elevator.jp",
    copyright: "© 2024 富士日本エレベーター株式会社 無断転載禁止",
    socialLinks: "フォローする"
  }
};

export const Footer = ({ language }: FooterProps) => {
  const t = content[language];

  return (
    <footer className="siemens-footer relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10"></div>
      </div>

      <div className="relative container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h3 className="text-4xl font-bold text-white mb-3 tracking-wider">
                {t.company}
              </h3>
              <p className="text-primary text-lg font-medium">{t.tagline}</p>
            </div>
            
            <p className="text-white/80 text-lg leading-relaxed max-w-2xl mb-8">
              {t.description}
            </p>
            
            {/* Contact Information */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-white/80 leading-relaxed">{t.address}</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <p className="text-white/80">{t.phone}</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <p className="text-white/80">{t.email}</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="h-5 w-5 text-primary flex-shrink-0">🌐</div>
                <p className="text-white/80">{t.website}</p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-bold text-xl mb-6 text-white">
              {t.socialLinks}
            </h4>
            
            {/* Social Icons - Siemens Style */}
            <div className="flex space-x-4">
              <div className="w-12 h-12 border border-white/20 rounded-lg flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 cursor-pointer group">
                <Linkedin className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              </div>
              <div className="w-12 h-12 border border-white/20 rounded-lg flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 cursor-pointer group">
                <Youtube className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              </div>
              <div className="w-12 h-12 border border-white/20 rounded-lg flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 cursor-pointer group">
                <Facebook className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              </div>
              <div className="w-12 h-12 border border-white/20 rounded-lg flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 cursor-pointer group">
                <Twitter className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              </div>
              <div className="w-12 h-12 border border-white/20 rounded-lg flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 cursor-pointer group">
                <Instagram className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">{t.copyright}</p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <a href="#" className="text-white/60 hover:text-primary text-sm transition-colors duration-300">
                {language === 'ja' ? 'プライバシーポリシー' : 'Privacy Policy'}
              </a>
              <a href="#" className="text-white/60 hover:text-primary text-sm transition-colors duration-300">
                {language === 'ja' ? '利用規約' : 'Terms of Service'}
              </a>
              <a href="#" className="text-white/60 hover:text-primary text-sm transition-colors duration-300">
                {language === 'ja' ? 'クッキー' : 'Cookies'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};