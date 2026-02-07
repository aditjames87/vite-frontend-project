//import React from 'react';
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@components/ui/button.tsx";
import { 
  Home, Users, Tv, Gamepad2, MessageCircle, Bell, 
  ChevronDown, Search, Store, Clock, Flag, Calendar 
} from "lucide-react";

const FacebookLayout = () => {
  return (
    <div className="min-h-screen bg-slate-100">
      {/* 1. HEADER (Fixed at top) */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-2 bg-white shadow-sm border-b h-14">
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

        <div className="hidden md:flex items-center gap-2">
          {[Home, Users, Tv, Gamepad2].map((Icon, i) => (
            <Button key={i} variant="ghost" size="icon" className="rounded-xl h-12 w-16 text-slate-600">
              <Icon className="h-6 w-6" />
            </Button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" className="flex items-center gap-2 rounded-full p-1 pr-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://via.placeholder.com" />
              <AvatarFallback>HW</AvatarFallback>
            </Avatar>
            <span className="font-semibold text-sm">Hello world</span>
          </Button>
          {[MessageCircle, Bell, ChevronDown].map((Icon, i) => (
            <Button key={i} variant="secondary" size="icon" className="rounded-full bg-slate-100">
              <Icon className="h-5 w-5" />
            </Button>
          ))}
        </div>
      </nav>

      {/* 2. SIDEBAR (Fixed at left, below header) */}
      <aside className="fixed left-0 top-14 bottom-0 w-[300px] overflow-y-auto p-2 hidden lg:block">
        <div className="space-y-1">
          {/* Sidebar Rows */}
          <SidebarRow Icon={Avatar} label="Hello world" isAvatar color={undefined} />
          <SidebarRow Icon={Users} label="Friends" color="text-blue-500" isAvatar={undefined} />
          <SidebarRow Icon={Store} label="Marketplace" color="text-blue-500" isAvatar={undefined} />
          <SidebarRow Icon={Clock} label="Memories" color="text-blue-500" isAvatar={undefined} />
          <SidebarRow Icon={Flag} label="Pages" color="text-orange-500" isAvatar={undefined} />
          <SidebarRow Icon={Calendar} label="Groups" color="text-red-500" isAvatar={undefined} />
          <SidebarRow Icon={Calendar} label="People" color="text-red-500" isAvatar={undefined} />
          <SidebarRow Icon={Calendar} label="Settings" color="text-red-500" isAvatar={undefined} />
          <SidebarRow Icon={ChevronDown} label="See more" color="bg-slate-200 rounded-full p-1" isAvatar={undefined} />
        </div>
      </aside>
    </div>
  );
};

// Reusable Row Component
//const SidebarRow = ({ Icon, label, isAvatar, color }) => (
  <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-200 cursor-pointer transition-colors">
    {isAvatar ? (
      <Avatar className="h-9 w-9">
        <AvatarImage src="https://via.placeholder.com" />
        <AvatarFallback>HW</AvatarFallback>
      </Avatar>
    ) : (
      <Icon className={`h-9 w-9 ${color}`} />
    )}
    <span className="font-medium text-[15px]">{label}</span>
  </div>
);

export default FacebookLayout;
