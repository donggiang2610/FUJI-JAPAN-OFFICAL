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
      <div className="relative container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-white mb-2">
                FUJI
              </h3>
              <p className="text-muted-foreground">{t.tagline}</p>
            </div>
            <p className="text-white/70 text-lg leading-relaxed max-w-lg mb-8">
              {language === 'ja' ? "富士日本エレベーター株式会社は、先進的な日本の技術、AIイノベーション、スマートシステムを備えた乗用エレベーター、貨物エレベーター、エスカレーター、メンテナンス、モダナイゼーションサービスの大手プロバイダーです。" : "FUJI Japan Elevator is a leading provider of passenger elevators, freight elevators, escalators, maintenance and modernization services with advanced Japanese technology, AI innovations and smart systems."}
            </p>
            
            {/* Social Icons */}
            <div className="flex space-x-4">
              <div className="w-10 h-10 border border-white/20 rounded flex items-center justify-center hover:bg-white/10 transition-all duration-300 cursor-pointer">
                <Facebook className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 border border-white/20 rounded flex items-center justify-center hover:bg-white/10 transition-all duration-300 cursor-pointer">
                <Twitter className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 border border-white/20 rounded flex items-center justify-center hover:bg-white/10 transition-all duration-300 cursor-pointer">
                <Linkedin className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 border border-white/20 rounded flex items-center justify-center hover:bg-white/10 transition-all duration-300 cursor-pointer">
                <Youtube className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">
              {t.quickLinks}
            </h4>
            <ul className="space-y-3">
              {t.links.map(link => <li key={link.name}>
                  <a href={link.href} className="text-white/70 hover:text-primary transition-all duration-300 text-sm">
                    {link.name}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">
              {t.contact}
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary mt-1" />
                <p className="text-white/70 text-sm leading-relaxed">{t.address}</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <p className="text-white/70 text-sm">{t.phone}</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <p className="text-white/70 text-sm">{t.email}</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="h-4 w-4 text-primary">🌐</div>
                <p className="text-white/70 text-sm">{t.website}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-xs">{t.copyright}</p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <a href="#" className="text-white/60 hover:text-primary text-xs transition-colors duration-300">
                {language === 'ja' ? 'プライバシーポリシー' : 'Privacy Policy'}
              </a>
              <a href="#" className="text-white/60 hover:text-primary text-xs transition-colors duration-300">
                {language === 'ja' ? '利用規約' : 'Terms of Service'}
              </a>
              <a href="#" className="text-white/60 hover:text-primary text-xs transition-colors duration-300">
                {language === 'ja' ? 'クッキー' : 'Cookies'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};