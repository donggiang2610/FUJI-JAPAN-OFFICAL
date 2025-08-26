import React from "react";
import { Mail, Phone, MapPin, ArrowRight, Zap, Star, Facebook, Twitter, Youtube, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import fujiLogo from "@/assets/fuji-logo-new.png";
import worldMapBg from "@/assets/world-map-bg.png";
interface FooterProps {
  language: 'en' | 'ja';
}
const content = {
  en: {
    company: "FUJI Japan Elevator",
    tagline: "Advanced Japanese Elevator Technology",
    quickLinks: "Quick Links",
    contact: "Contact Information",
    newsletter: "Stay Connected",
    newsletterText: "Subscribe to our newsletter for the latest updates and innovations",
    subscribe: "Subscribe",
    address: "Shinmei minami 1-1-41, Adachi-ku, Tokyo, Japan",
    phone: "+81-3-1234-5678",
    email: "info@fuji-elevator.jp",
    website: "fuji-elevator.jp",
    copyright: "© 2024 FUJI Japan Elevator. All rights reserved.",
    links: [{
      name: "Home",
      href: "/"
    }, {
      name: "About",
      href: "/about"
    }, {
      name: "Products",
      href: "/products"
    }, {
      name: "Services",
      href: "/services"
    }, {
      name: "Contact",
      href: "/contact"
    }]
  },
  ja: {
    company: "富士日本エレベーター株式会社",
    tagline: "先進的な日本のエレベーター技術",
    quickLinks: "クイックリンク",
    contact: "お問い合わせ",
    newsletter: "最新情報",
    newsletterText: "最新のアップデートとイノベーションをお届けするニュースレターにご登録ください",
    subscribe: "登録する",
    address: "東京都足立区新田南1-1-41",
    phone: "+81-3-1234-5678",
    email: "info@fuji-elevator.jp",
    website: "fuji-elevator.jp",
    copyright: "© 2024 富士日本エレベーター株式会社 無断転載禁止",
    links: [{
      name: "ホーム",
      href: "/"
    }, {
      name: "会社概要",
      href: "/about"
    }, {
      name: "製品",
      href: "/products"
    }, {
      name: "サービス",
      href: "/services"
    }, {
      name: "お問い合わせ",
      href: "/contact"
    }]
  }
};
export const Footer = ({
  language
}: FooterProps) => {
  const t = content[language];
  return <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-5 bg-cover bg-center" style={{
        backgroundImage: `url(${worldMapBg})`
      }} />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary-foreground/10" />
      </div>

      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-primary/20 to-primary-foreground/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-br from-primary-foreground/20 to-primary/20 rounded-full blur-xl animate-pulse animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-gradient-to-br from-primary/10 to-primary-foreground/10 rounded-full blur-2xl animate-pulse animation-delay-4000" />
      </div>

      <div className="relative container mx-auto px-4 py-16">
        {/* Newsletter Section */}
        <div className="mb-16">
          <Card className="border-0 bg-gradient-to-r from-primary/20 via-primary-foreground/20 to-primary/20 backdrop-blur-sm">
            <CardContent className="p-12 text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Star className="w-8 h-8 text-primary" />
                <h3 className="text-3xl font-bold">{t.newsletter}</h3>
                <Star className="w-8 h-8 text-primary" />
              </div>
              <p className="mb-8 max-w-2xl mx-auto text-lg text-slate-950">
                {t.newsletterText}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input type="email" placeholder="Enter your email" className="flex-1 px-6 py-4 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary rounded-xl bg-[#232236]" />
                <Button className="px-8 py-4 bg-gradient-to-r from-primary to-primary-foreground hover:scale-105 transition-all duration-300 group">
                  <Zap className="mr-2 w-5 h-5" />
                  {t.subscribe}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <img src="/lovable-uploads/b54c91b9-8d26-4cc2-a3fc-2c6826e592c5.png" alt="THAI FUJI ELEVATOR" className="h-20 w-auto object-contain" />
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  {t.company}
                </h3>
                <p className="text-primary-foreground font-medium">{t.tagline}</p>
              </div>
            </div>
            <p className="text-white/70 text-lg leading-relaxed max-w-lg mb-8">
              {language === 'ja' ? "富士日本エレベーター株式会社は、先進的な日本の技術、AIイノベーション、スマートシステムを備えた乗用エレベーター、貨物エレベーター、エスカレーター、メンテナンス、モダナイゼーションサービスの大手プロバイダーです。" : "FUJI Japan Elevator is a leading provider of passenger elevators, freight elevators, escalators, maintenance and modernization services with advanced Japanese technology, AI innovations and smart systems."}
            </p>
            
            {/* Social Icons */}
            <div className="flex space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary-foreground/20 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer group">
                <Facebook className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary-foreground/20 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer group">
                <Twitter className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary-foreground/20 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer group">
                <Linkedin className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary-foreground/20 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer group">
                <Youtube className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-xl mb-8 bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
              {t.quickLinks}
            </h4>
            <ul className="space-y-4">
              {t.links.map(link => <li key={link.name}>
                  <a href={link.href} className="text-white/70 hover:text-primary transition-all duration-300 text-lg flex items-center group">
                    <ArrowRight className="w-4 h-4 mr-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-xl mb-8 bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
              {t.contact}
            </h4>
            <div className="space-y-6">
              <div className="flex items-start space-x-4 group hover:scale-105 transition-transform duration-300">
                <div className="p-3 bg-gradient-to-br from-primary/20 to-primary-foreground/20 rounded-xl">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <p className="text-white/70 text-sm leading-relaxed group-hover:text-white transition-colors">{t.address}</p>
              </div>
              
              <div className="flex items-center space-x-4 group hover:scale-105 transition-transform duration-300">
                <div className="p-3 bg-gradient-to-br from-primary/20 to-primary-foreground/20 rounded-xl">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <p className="text-white/70 text-lg group-hover:text-white transition-colors">{t.phone}</p>
              </div>
              
              <div className="flex items-center space-x-4 group hover:scale-105 transition-transform duration-300">
                <div className="p-3 bg-gradient-to-br from-primary/20 to-primary-foreground/20 rounded-xl">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <p className="text-white/70 text-lg group-hover:text-white transition-colors">{t.email}</p>
              </div>
              
              <div className="flex items-center space-x-4 group hover:scale-105 transition-transform duration-300">
                <div className="p-3 bg-gradient-to-br from-primary/20 to-primary-foreground/20 rounded-xl">
                  <div className="h-5 w-5 text-primary">🌐</div>
                </div>
                <p className="text-white/70 text-lg group-hover:text-white transition-colors">{t.website}</p>
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
    </footer>;
};