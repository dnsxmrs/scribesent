"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react';
import { 
  Avatar, 
  AvatarFallback, 
  AvatarImage 
} from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Logo } from './logo';
import { Footer } from './footer';
import { 
  Settings, 
  LogOut 
} from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);

  const navItems = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Channels', href: '/channels' },
    { name: 'Transcript', href: '/transcripts' },
  ];

  const isActivePath = (href: string) => {
    if (href === '/dashboard') {
      return pathname === '/dashboard';
    }
    return pathname.startsWith(href);
  };

  const handleLogout = async () => {
    try {
      await signOut({ callbackUrl: '/' });
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  // Mock user data - this would come from auth context in real app
  const mockUser = {
    name: "John Doe",
    email: "john.doe@gmail.com",
    avatar: "https://github.com/shadcn.png"
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/dashboard" className="flex items-center gap-2">
                <Logo />
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center space-x-2">
              <div className="hidden md:flex space-x-2">
                {navItems.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <Button
                      variant={isActivePath(item.href) ? "default" : "ghost"}
                      size="sm"
                      className={`font-bold transition-colors duration-300 ${
                        isActivePath(item.href)
                          ? 'bg-blue-500 text-white hover:bg-blue-600'
                          : 'text-black hover:bg-blue-100'
                      }`}
                    >
                      {item.name}
                    </Button>
                  </Link>
                ))}
              </div>

              {/* Profile Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="outline" 
                    className="flex items-center justify-center border-2 border-black font-bold bg-white hover:bg-blue-100 p-2 ml-4"
                  >
                    <Avatar className="h-6 w-6 border-2 border-black">
                      <AvatarImage src={mockUser.avatar} alt={mockUser.name} />
                      <AvatarFallback className="bg-blue-500 text-white font-bold text-xs">
                        {mockUser.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  className="w-56 border-2 border-black bg-white"
                  align="end"
                  sideOffset={4}
                >
                  <DropdownMenuLabel className="font-bold">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-bold text-black">{mockUser.name}</p>
                      <p className="text-xs text-gray-600">{mockUser.email}</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-black" />
                  <DropdownMenuGroup>
                    <DropdownMenuItem className="font-bold hover:bg-blue-100">
                      <Link href="/settings" className="flex items-center w-full">
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Settings</span>
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator className="bg-black" />
                  <AlertDialog open={isLogoutDialogOpen} onOpenChange={setIsLogoutDialogOpen}>
                    <AlertDialogTrigger asChild>
                      <DropdownMenuItem 
                        className="font-bold hover:bg-red-100 text-red-600"
                        onSelect={(e) => {
                          e.preventDefault();
                          setIsLogoutDialogOpen(true);
                        }}
                      >
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Log out</span>
                      </DropdownMenuItem>
                    </AlertDialogTrigger>
                    <AlertDialogContent className="border-2 border-black bg-white">
                      <AlertDialogHeader>
                        <AlertDialogTitle className="font-bold text-black">
                          Confirm Logout
                        </AlertDialogTitle>
                        <AlertDialogDescription className="text-gray-600">
                          Are you sure you want to log out? You will need to sign in again to access your account.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel className="border-2 border-black font-bold hover:bg-gray-100">
                          Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction 
                          onClick={handleLogout}
                          className="bg-red-500 hover:bg-red-600 text-white font-bold border-2 border-black"
                        >
                          Log out
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div className="md:hidden border-t-2 border-black bg-white pb-4 pt-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href}>
                  <Button
                    variant={isActivePath(item.href) ? "default" : "ghost"}
                    size="sm"
                    className={`w-full justify-start font-bold transition-colors duration-300 ${
                      isActivePath(item.href)
                        ? 'bg-blue-500 text-white hover:bg-blue-600'
                        : 'text-black hover:bg-blue-100'
                    }`}
                  >
                    {item.name}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default DashboardLayout;