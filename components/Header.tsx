"use client"

import { useState, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 bg-background transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h1 className="text-2xl font-bold">LinkHub</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><Button variant="ghost">Home</Button></li>
            <li><Button variant="ghost">About</Button></li>
            <li><Button variant="ghost">Links</Button></li>
            <li><Button variant="ghost">Contact</Button></li>
          </ul>
        </nav>
        <Button size="icon" variant="outline">
          <MessageCircle className="h-4 w-4" />
        </Button>
      </div>
    </header>
  );
};

export default Header;