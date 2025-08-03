"use client";

import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  console.log("=== NAVBAR DEBUG ===");
  console.log("Current pathname:", pathname);
  console.log("Router object:", router);
  console.log("Menu open:", isMenuOpen);

  // Close menu when pathname changes
  useEffect(() => {
    console.log("Pathname changed to:", pathname);
    setIsMenuOpen(false);
  }, [pathname]);

  const handleNavigation = (path: string) => {
    console.log("=== NAVIGATION ATTEMPT ===");
    console.log("Attempting to navigate to:", path);
    console.log("Current pathname:", pathname);
    
    try {
      setIsMenuOpen(false);
      console.log("Menu closed, pushing to router...");
      router.push(path);
      console.log("Router.push() called successfully");
    } catch (error) {
      console.error("Navigation error:", error);
    }
  };

  const isActive = (path: string) => {
    const active = (path === "/home" && (pathname === "/" || pathname === "/home")) || 
                   (path !== "/home" && pathname === path);
    console.log(`Checking if ${path} is active: ${active}`);
    return active;
  };

  const getButtonStyles = (path: string) => {
    const active = isActive(path);
    if (active) {
      return "text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg px-3 py-2 font-semibold shadow-lg cursor-pointer";
    }
    return "text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-blue-600/20 rounded-lg px-3 py-2 transition-all duration-200 font-medium cursor-pointer";
  };

  const handleMenuToggle = () => {
    console.log("Menu toggle clicked, current state:", isMenuOpen);
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-b border-purple-500/20 shadow-lg relative z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <button 
          onClick={() => handleNavigation("/")}
          className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200 cursor-pointer relative z-10"
        >
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">E</span>
            </div>
            <span className="self-center text-2xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Edmilzon
            </span>
        </button>
        
        {/* Mobile menu button */}
        <button 
          onClick={handleMenuToggle}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-purple-200 rounded-lg md:hidden hover:bg-purple-800/50 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200 cursor-pointer relative z-10"
        >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        
        {/* Navigation Menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto relative z-10`}>
          <div className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-purple-500/20 rounded-lg bg-slate-800/50 backdrop-blur-sm md:flex-row md:space-x-2 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent">
            
            <button 
              onClick={() => handleNavigation("/home")}
              className={getButtonStyles("/home")}
              type="button"
            >
              Home
            </button>
            
            <button 
              onClick={() => handleNavigation("/about")}
              className={getButtonStyles("/about")}
              type="button"
            >
              About
            </button>
            
            <button 
              onClick={() => handleNavigation("/services")}
              className={getButtonStyles("/services")}
              type="button"
            >
              Services
            </button>
            
            <button 
              onClick={() => handleNavigation("/projects")}
              className={getButtonStyles("/projects")}
              type="button"
            >
              Projects
            </button>
            
            <button 
              onClick={() => handleNavigation("/contact")}
              className={getButtonStyles("/contact")}
              type="button"
            >
              Contact
            </button>
            
          </div>
        </div>
      </div>
    </nav>
  );
}