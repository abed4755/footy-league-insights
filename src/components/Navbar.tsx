
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ChevronDown, Menu, X, LogIn, LogOut, User } from 'lucide-react';
import { AuthModal } from '@/components/AuthModal';
import { useAuth } from '@/contexts/AuthContext';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const location = useLocation();
  const { user, isAuthenticated, signOut } = useAuth();
  const isMobile = useIsMobile();
  
  const isActive = (path: string) => location.pathname === path;
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Premier League', path: '/premier-league' },
    { name: 'La Liga', path: '/la-liga' },
    { name: 'Champions League', path: '/champions-league' },
    { name: 'Predictions', path: '/predictions' }
  ];

  const openAuthModal = () => {
    setAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setAuthModalOpen(false);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-white dark:bg-gray-900 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="shrink-0">
                <Link to="/" className="flex items-center space-x-2">
                  <span className="text-xl font-bold text-gray-900 dark:text-white">FootyStats</span>
                </Link>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-4">
              <div className="flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={cn(
                      "transition-colors duration-200 px-3 py-2 rounded-md text-sm font-medium",
                      isActive(item.path)
                        ? "bg-primary text-primary-foreground"
                        : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              
              <div className="ml-4 flex items-center">
                {isAuthenticated ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="flex items-center">
                        <User className="h-4 w-4 mr-2" />
                        <span className="max-w-[100px] truncate">{user?.name}</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={signOut}>
                        <LogOut className="h-4 w-4 mr-2" />
                        Sign Out
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Button onClick={openAuthModal} size="sm" variant="outline" className="flex items-center">
                    <LogIn className="h-4 w-4 mr-2" />
                    Sign In
                  </Button>
                )}
              </div>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              {isAuthenticated && !isMobile && (
                <div className="mr-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <User className="h-4 w-4 mr-2" />
                        <span className="max-w-[80px] truncate">{user?.name}</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={signOut}>
                        <LogOut className="h-4 w-4 mr-2" />
                        Sign Out
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              )}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 py-3 px-2 shadow-lg rounded-b-lg animated-entrance">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={cn(
                    "block px-3 py-2 rounded-md text-base font-medium",
                    isActive(item.path)
                      ? "bg-primary text-primary-foreground"
                      : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {isAuthenticated ? (
                <Button 
                  onClick={() => {
                    signOut();
                    setMobileMenuOpen(false);
                  }} 
                  variant="ghost" 
                  className="w-full justify-start px-3 py-2"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </Button>
              ) : (
                <Button 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openAuthModal();
                  }} 
                  variant="ghost" 
                  className="w-full justify-start px-3 py-2"
                >
                  <LogIn className="h-4 w-4 mr-2" />
                  Sign In
                </Button>
              )}
            </div>
          </div>
        )}
      </nav>
      
      <AuthModal isOpen={authModalOpen} onClose={closeAuthModal} />
    </>
  );
}

export default Navbar;
