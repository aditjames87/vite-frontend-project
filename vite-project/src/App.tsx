//import React from 'react';
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button"; 
import { 
  Home, Users, Tv, Gamepad2, MessageCircle, Bell, 
  ChevronDown, Search, Store, Clock, Flag, Calendar 
} from "lucide-react";

/**
 * Reusable Sidebar Row Component
 */
const SidebarRow = ({ Icon, label, isAvatar = false, color = "" }: any) => (
  <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-200 cursor-pointer transition-colors w-full group">
    {isAvatar ? (
      <Avatar className="h-9 w-9">
        <AvatarImage src="https://github.com" />
        <AvatarFallback>HW</AvatarFallback>
      </Avatar>
    ) : (
      <div className={`flex items-center justify-center rounded-full ${color.includes('bg-') ? color : ''}`}>
        <Icon className={`h-8 w-8 ${!color.includes('bg-') ? color : 'text-slate-600'}`} />
      </div>
    )}
    <span className="font-medium text-[15px] text-slate-900">{label}</span>
  </div>
);

const FacebookLayout = () => {
  return (
    <div className="min-h-screen bg-[#f0f2f5]">
      {/* 1. HEADER - Facebook Blue Theme */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 h-14 bg-[#1877F2] shadow-md">
        
        {/* Left Section: Logo & Search */}
        <div className="flex items-center gap-2">
          <div className="text-4xl font-bold text-white tracking-tighter cursor-pointer">f</div>
          <div className="relative hidden sm:block">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-blue-100" />
            <Input 
              type="text" 
              placeholder="Search Facebook" 
              className="rounded-full bg-white/20 pl-9 w-64 border-none h-10 text-white placeholder:text-blue-100 focus-visible:ring-1 focus-visible:ring-white/50"
            />
          </div>
        </div>

        {/* Center Section: Main Navigation */}
        <div className="hidden md:flex items-center gap-1 h-full">
          <Button variant="ghost" className="rounded-none h-full w-24 border-b-4 border-white text-white hover:bg-white/10">
            <Home className="h-7 w-7" />
          </Button>
          {[Users, Tv, Gamepad2].map((Icon, i) => (
            <Button key={i} variant="ghost" className="rounded-none h-full w-24 border-b-4 border-transparent hover:bg-white/10 text-blue-100 hover:text-white">
              <Icon className="h-7 w-7" />
            </Button>
          ))}
        </div>

        {/* Right Section: Actions & Profile */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" className="hidden xl:flex items-center gap-2 rounded-full pl-1 pr-3 h-9 text-white hover:bg-white/10">
            <Avatar className="h-7 w-7 border border-white/20">
              <AvatarImage src="https://github.com" />
              <AvatarFallback>HW</AvatarFallback>
            </Avatar>
            <span className="font-semibold text-sm">Hello world</span>
          </Button>
          
          <div className="flex items-center gap-2">
            {[MessageCircle, Bell, ChevronDown].map((Icon, i) => (
              <Button key={i} variant="ghost" size="icon" className="rounded-full bg-white/10 hover:bg-white/20 h-10 w-10 text-white">
                <Icon className="h-5 w-5" />
              </Button>
            ))}
          </div>
        </div>
      </nav>

      {/* 2. SIDEBAR - Left Side */}
      <aside className="fixed left-0 top-14 bottom-0 w-[300px] overflow-y-auto p-2 hidden lg:block custom-scrollbar">
        <div className="flex flex-col gap-0.5">
          <SidebarRow isAvatar label="Hello world" />
          <SidebarRow Icon={Users} label="Friends" color="text-blue-500" />
          <SidebarRow Icon={Store} label="Marketplace" color="text-blue-500" />
          <SidebarRow Icon={Clock} label="Memories" color="text-blue-400" />
          <SidebarRow Icon={Flag} label="Pages" color="text-orange-500" />
          <SidebarRow Icon={Calendar} label="Events" color="text-red-500" />
          <SidebarRow Icon={ChevronDown} label="See more" color="bg-slate-200 p-1.5" />
        </div>
      </aside>
      
      {/* 3. MAIN FEED AREA */}
      <main className="lg:ml-[300px] pt-20 px-4 flex justify-center">
        <div className="w-full max-w-[680px]">
          {/* Example Post Box Placeholder */}
          <div className="bg-white rounded-lg shadow p-4 mb-4">
            <div className="flex gap-2">
              <Avatar className="h-10 w-10">
                <AvatarImage src="https://github.com" />
                <AvatarFallback>HW</AvatarFallback>
              </Avatar>
              <Button variant="secondary" className="w-full justify-start rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 h-10">
                What's on your mind, Hello world?
              </Button>
            </div>
          </div>

          {/* Feed Content starts here */}
          <div className="text-center text-slate-500 mt-10">
            <p>Your news feed will appear here...</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FacebookLayout;
