"use client";

import Image from "next/image";
import ArrowRight from "@/assets/arrow-right.svg";
import MenuIcon from "@/assets/menu.svg";
import { Globe, Heart, Lock, User } from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky top-0 z-30 bg-gradient-to-r from-white via-[#f9f9ff] to-white shadow-md">
      {/* Top Info Bar */}
      <div className="bg-gradient-to-r from-[#183EC2] to-[#EAEEFE] text-white py-2 px-4 text-xs flex items-center justify-between">
        <p className="hidden md:block opacity-90">
          Power your brand with smarter, AI-driven ad monetization.
        </p>
        <div className="flex items-center gap-1 cursor-pointer hover:underline">
          <span>Start earning today</span>
          <ArrowRight className="w-3 h-3" />
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
            ADmyBRAND
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-800 font-medium">
          <button className="border border-pink-500 text-pink-600 rounded-full px-4 py-1 hover:bg-pink-50 transition">
            Sell Ad Space
          </button>
          <a href="#" className="hover:text-black">Ad Agency</a>
          <Globe className="w-5 h-5 hover:text-black" />
          <Heart className="w-5 h-5 hover:text-black" />
          <Lock className="w-5 h-5 hover:text-black" />
          <User className="w-6 h-6 text-gray-700 hover:text-black" />
        </nav>

        {/* Mobile Navigation */}
        <button className="md:hidden">
          <MenuIcon className="w-6 h-6 text-gray-700" />
        </button>
      </div>
    </header>
  );
};
