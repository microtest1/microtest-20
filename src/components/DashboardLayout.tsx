import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { FileUp, BarChart2, Settings, LogOut } from "lucide-react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-white">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 z-40 h-screen w-64 bg-white/80 backdrop-blur-xl border-r border-primary-100 shadow-lg">
        <div className="flex h-full flex-col justify-between">
          <div>
            <div className="flex items-center justify-center p-6 border-b border-primary-100">
              <h1 className="text-2xl font-bold bg-gradient-premium text-transparent bg-clip-text">
                Micro-Test
              </h1>
            </div>
            <nav className="space-y-2 p-4">
              <Button
                variant="ghost"
                className="w-full justify-start hover:bg-primary-50 hover:text-primary-600 transition-all duration-200"
                onClick={() => navigate("/dashboard")}
              >
                <BarChart2 className="mr-2 h-5 w-5" />
                Dashboard
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start hover:bg-primary-50 hover:text-primary-600 transition-all duration-200"
                onClick={() => navigate("/new-test")}
              >
                <FileUp className="mr-2 h-5 w-5" />
                New Test
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start hover:bg-primary-50 hover:text-primary-600 transition-all duration-200"
                onClick={() => navigate("/settings")}
              >
                <Settings className="mr-2 h-5 w-5" />
                Settings
              </Button>
            </nav>
          </div>
          <div className="p-4 border-t border-primary-100">
            <Button 
              variant="ghost" 
              className="w-full justify-start text-red-500 hover:bg-red-50 hover:text-red-600 transition-all duration-200"
            >
              <LogOut className="mr-2 h-5 w-5" />
              Logout
            </Button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="ml-64 p-8">
        <div className="mx-auto max-w-7xl">{children}</div>
      </main>
    </div>
  );
};