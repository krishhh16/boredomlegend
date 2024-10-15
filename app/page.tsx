"use client"

import { Gift, CheckCircle, Disc, Flame, Wallet } from "lucide-react"
import { useState } from "react"

export default function Component() {
  const [activeTab, setActiveTab] = useState("Tap")

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#1a1b26] p-2">
      <div className="flex justify-between items-center">
        <NavItem icon={<Gift size={18} />} label="Ref" activeTab={activeTab} setActiveTab={setActiveTab} />
        <NavItem icon={<CheckCircle size={18} />} label="Tasks" activeTab={activeTab} setActiveTab={setActiveTab} />
        <NavItem icon={<Disc size={18} />} label="Tap" activeTab={activeTab} setActiveTab={setActiveTab} />
        <NavItem icon={<Flame size={18} />} label="Boost" activeTab={activeTab} setActiveTab={setActiveTab} />
        <NavItem icon={<Wallet size={18} />} label="Wallet" activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </nav>
  )
}

function NavItem({ icon, label, activeTab, setActiveTab }: { icon: React.ReactNode, label: string, activeTab: string, setActiveTab: React.Dispatch<React.SetStateAction<string>> }) {
  const isActive = activeTab === label
  return (
    <button
      onClick={() => setActiveTab(label)}
      className={`flex flex-col items-center justify-center p-2 rounded-md w-16 h-16 ${
        isActive
          ? "bg-[#2a2b36] border border-blue-500 text-blue-500"
          : "border border-gray-700 text-gray-400 hover:text-gray-200"
      }`}
    >
      {icon}
      <span className="text-[10px] mt-1">{label}</span>
    </button>
  )
}