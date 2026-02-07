//import React from 'react';
import { Input } from "@/components/ui/input"; // shadcn/ui input
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"; // shadcn/ui avatar
import { Button } from "@/components/ui/button"; // shadcn/ui button
import { Home, Users, Tv, Gamepad2, MessageCircle, Bell, ChevronDown, Search } from "lucide-react"; // Assuming lucide-react for icons

const FacebookHeader = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-2 bg-white shadow-sm border-b">
      {/* Left section: Logo and Search */}
      <div className="flex items-center gap-2">
        <div className="text-3xl font-bold text-blue-600">f</div>
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input 
            type="text" 
            placeholder="Search Facebook" 
            className="rounded-full bg-slate-100 pl-8 w-60 border-none"
          />
        </div>
      </div>

      {/* Center section: Navigation icons */}
      <div className="flex items-center gap-2">
        {[Home, Users, Tv, Gamepad2].map((Icon, i) => (
          <Button key={i} variant="ghost" size="icon" className="rounded-xl h-12 w-16 text-slate-600">
            <Icon className="h-6 w-6" />
          </Button>
        ))}
      </div>

      {/* Right section: User profile and notifications */}
      <div className="flex items-center gap-2">
        <Button variant="ghost" className="flex items-center gap-2 rounded-full p-1 pr-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://via.placeholder.com/40" alt="User Avatar" />
            <AvatarFallback>J</AvatarFallback>
          </Avatar>
          <span className="font-semibold text-sm">Hello world</span>
        </Button>
        
        {[MessageCircle, Bell, ChevronDown].map((Icon, i) => (
          <Button key={i} variant="secondary" size="icon" className="rounded-full bg-slate-100 hover:bg-slate-200">
            <Icon className="h-5 w-5" />
          </Button>
        ))}
      </div>
    </div>
  );
};

export default FacebookHeader;
