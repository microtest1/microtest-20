import React from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Activity, FileText, Clock } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();

  const stats = [
    { label: "Total Tests", value: "0", icon: Activity },
    { label: "Pending Results", value: "0", icon: Clock },
    { label: "Completed Tests", value: "0", icon: FileText },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8 animate-fade-in">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary-600"
            onClick={() => navigate("/new-test")}
          >
            New Test
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <Card key={stat.label} className="p-6">
              <div className="flex items-center space-x-4">
                <div className="rounded-full bg-primary-50 p-3">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    {stat.label}
                  </p>
                  <p className="text-2xl font-semibold text-gray-900">
                    {stat.value}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Recent Tests
          </h2>
          <div className="text-center py-8 text-gray-500">
            No tests submitted yet. Click "New Test" to get started.
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;