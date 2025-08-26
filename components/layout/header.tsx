import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Search, Globe, Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { SerialSearch } from "@/components/ui/serial-search";

interface HeaderProps {
  language: 'en' | 'ja';
  onLanguageChange: (lang: 'en' | 'ja') => void;
}

const navigation = {
  en: [
    { name: 'Products & Services', href: '/products' },
    { name: 'Industries', href: '/services' },
    { name: 'Company', href: '/about' }
  ],
  ja: [
    { name: '製品・サービス', href: '/products' },
    { name: '産業', href: '/services' },
    { name: '会社', href: '/about' }
  ]
};

const breadcrumbNav = {
  en: [
    { name: 'Home', href: '/' },
    { name: 'Products & Services', href: '/products' },
    { name: 'Drive Technology', href: '/products' },
    { name: 'Converter', href: '/products' },
    { name: 'Low Voltage Converters', href: '/products' },
    { name: 'FUJI Servo Drives', href: '/products' },
    { name: 'FUJI V90', href: '/products' }
  ],
  ja: [
    { name: 'ホーム', href: '/' },
    { name: '製品・サービス', href: '/products' },
    { name: 'ドライブ技術', href: '/products' },
    { name: 'コンバーター', href: '/products' },
    { name: '低電圧コンバーター', href: '/products' },
    { name: 'FUJIサーボドライブ', href: '/products' },
    { name: 'FUJI V90', href: '/products' }
  ]
};

export const Header = ({ language, onLanguageChange }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const nav = navigation[language];
  const breadcrumb = breadcrumbNav[language];

  return (
    <>
      {/* Main Header - Siemens Style */}
      <header className="fixed top-0 left-0 right-0 z-50 global-nav">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <NavLink to="/" className="flex items-center">
              <div className="text-2xl font-bold text-white tracking-wider">
                FUJI
              </div>
            </NavLink>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {nav.map(item => (
                <NavLink 
                  key={item.name} 
                  to={item.href} 
                  className="text-white hover:text-primary transition-colors duration-300 font-medium text-sm"
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Search Bar */}
              <div className="hidden lg:block w-80">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder={language === 'ja' ? '何でも検索または質問...' : 'Ask or search anything...'}
                    className="siemens-search w-full pl-10 pr-4 py-2 text-sm"
                  />
                  <Button size="sm" className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0">
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Global Language */}
              <div className="hidden md:flex items-center space-x-2">
                <Globe className="h-4 w-4 text-white" />
                <span className="text-white text-sm">Global</span>
              </div>

              {/* Contact */}
              <Button variant="ghost" size="sm" className="hidden md:flex text-white hover:text-primary">
                <Mail className="h-4 w-4" />
              </Button>

              {/* User */}
              <Button variant="ghost" size="sm" className="hidden md:flex text-white hover:text-primary">
                <User className="h-4 w-4" />
              </Button>

              {/* Language Switcher */}
              <LanguageSwitcher currentLang={language} onLanguageChange={onLanguageChange} />

              {/* Mobile menu button */}
              <div className="md:hidden">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
                  className="text-white hover:text-primary"
                >
                  {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 siemens-card mt-2">
                {nav.map(item => (
                  <NavLink 
                    key={item.name} 
                    to={item.href} 
                    className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                ))}
                
                {/* Mobile Search */}
                <div className="px-3 py-2">
                  <SerialSearch 
                    placeholder={language === 'ja' ? 'シリアル番号を検索...' : 'Search serial number...'} 
                    language={language} 
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Breadcrumb Navigation - Siemens Style */}
      <div className="fixed top-16 left-0 right-0 z-40 siemens-breadcrumb-nav">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-xs">
            {breadcrumb.map((item, index) => (
              <React.Fragment key={item.name}>
                {index > 0 && <span className="text-muted-foreground">›</span>}
                <NavLink 
                  to={item.href}
                  className={`siemens-breadcrumb hover:text-secondary transition-colors ${
                    index === breadcrumb.length - 1 ? 'text-white' : ''
                  }`}
                >
                  {item.name}
                </NavLink>
              </React.Fragment>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};