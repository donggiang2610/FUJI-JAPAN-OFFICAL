import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { SerialSearch } from "@/components/ui/serial-search";

interface HeaderProps {
  language: 'en' | 'ja';
  onLanguageChange: (lang: 'en' | 'ja') => void;
}

const navigation = {
  en: [{
    name: 'Home',
    href: '/'
  }, {
    name: 'Products',
    href: '/products'
  }, {
    name: 'Services',
    href: '/services'
  }, {
    name: 'About',
    href: '/about'
  }, {
    name: 'News',
    href: '/news'
  }, {
    name: 'Careers',
    href: '/careers'
  }, {
    name: 'Contact',
    href: '/contact'
  }],
  ja: [{
    name: 'ホーム',
    href: '/'
  }, {
    name: '製品',
    href: '/products'
  }, {
    name: 'サービス',
    href: '/services'
  }, {
    name: '会社概要',
    href: '/about'
  }, {
    name: 'ニュース',
    href: '/news'
  }, {
    name: '採用情報',
    href: '/careers'
  }, {
    name: 'お問い合わせ',
    href: '/contact'
  }]
};

export const Header = ({
  language,
  onLanguageChange
}: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const nav = navigation[language];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/e0326921-6f08-4e36-bf37-3adf3bd694a0.png" 
              alt="FUJI Japan Elevator" 
              className="h-10 w-auto md:h-12 object-contain brightness-0 invert" 
            />
            <div className="hidden md:block">
              <div className="text-lg font-bold text-foreground">FUJI</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Japan Elevator</div>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {nav.map(item => (
              <NavLink 
                key={item.name} 
                to={item.href} 
                className={({ isActive }) => 
                  `px-4 py-2 text-sm font-medium transition-all duration-300 rounded-md relative group ${
                    isActive 
                      ? 'text-primary' 
                      : 'text-foreground hover:text-primary'
                  }`
                }
              >
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary"></div>
                )}
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Search & Language */}
          <div className="hidden lg:flex items-center space-x-4 flex-1 max-w-md justify-end">
            <div className="w-full max-w-xs">
              <SerialSearch 
                placeholder={language === 'ja' ? 'シリアル番号を検索...' : 'Search serial number...'} 
                language={language} 
              />
            </div>
            <LanguageSwitcher currentLang={language} onLanguageChange={onLanguageChange} />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSwitcher currentLang={language} onLanguageChange={onLanguageChange} />
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="text-foreground hover:text-primary"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card border border-border rounded-lg mt-2">
              {nav.map(item => (
                <NavLink 
                  key={item.name} 
                  to={item.href} 
                  className={({ isActive }) => 
                    `block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                      isActive 
                        ? 'text-primary bg-primary/10' 
                        : 'text-foreground hover:text-primary hover:bg-primary/5'
                    }`
                  } 
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
  );
};