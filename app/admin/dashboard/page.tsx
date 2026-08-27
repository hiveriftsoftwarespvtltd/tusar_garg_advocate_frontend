"use client";

import { useEffect, useState } from "react";
import { Map, Scale, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";
import { fetchApi } from "../../../lib/api/client"; // Notice we use the fetch API utility

export default function AdminDashboard() {
  const [stats, setStats] = useState({ states: 0, courts: 0 });

  useEffect(() => {
    // In a real app we'd fetch actual counts here from a stats API
    const loadStats = async () => {
      try {
        const states = await fetchApi('/states');
        setStats(prev => ({ ...prev, states: states.length }));
      } catch (error) {
        console.error(error);
      }
    };
    loadStats();
  }, []);

  const cards = [
    { title: "Total States", value: stats.states || "...", icon: Map, color: "bg-blue-500", link: "/admin/dashboard/states" },
    { title: "Total Courts", value: "...", icon: Scale, color: "bg-[#c9a84c]", link: "/admin/dashboard/courts" },
    { title: "Judgments", value: "...", icon: FileText, color: "bg-purple-500", link: "/admin/dashboard/judgments" },
  ];

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-500 mt-1">Welcome to the Tushar Garg Advocate management portal.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg text-white ${card.color}`}>
                <card.icon size={24} />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-1">{card.value}</h3>
            <p className="text-gray-500 font-medium mb-4">{card.title}</p>
            <div className="mt-auto pt-4 border-t border-gray-100">
              <Link href={card.link} className="flex items-center gap-2 text-sm font-semibold text-[#0d1b3e] hover:text-[#c9a84c] transition-colors">
                Manage {card.title.split(" ")[1] || card.title}
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      {/* Recent Activity / Quick Actions Placeholder */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mt-8">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h2>
        <div className="flex gap-4">
           <Link href="/admin/dashboard/states" className="px-4 py-2 bg-[#0d1b3e] text-white rounded-md text-sm font-medium hover:bg-[#c9a84c] transition-colors">
             Add New State
           </Link>
           <Link href="/admin/dashboard/courts" className="px-4 py-2 border border-[#0d1b3e] text-[#0d1b3e] rounded-md text-sm font-medium hover:bg-gray-50 transition-colors">
             Add New Court
           </Link>
        </div>
      </div>
    </div>
  );
}
