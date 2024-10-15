'use client'

import localFont from "next/font/local";
import "../globals.css";
import {useState} from "react"
import { useRouter } from 'next/navigation';

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [activeTab, setActiveTab] = useState("Tap")
  const router = useRouter();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <nav className="fixed bottom-0 left-0 right-0 bg-[#1a1b26] p-2">
          <div className="flex justify-between items-center">
            <NavItem icon={<img src={"/kitty.png"} className="w-8 h-10" alt="wallet--v1" />} label="Ref" activeTab={activeTab} setActiveTab={setActiveTab} path="/1" />
            <NavItem icon={<img src={"/tick.png"} className="w-8" alt="wallet--v1" />} label="Tasks" activeTab={activeTab} setActiveTab={setActiveTab} path="/2" />
            <NavItem icon={<img src={"/coinn.png"} className="w-10 h-8" alt="wallet--v1" />} label="Tap" activeTab={activeTab} setActiveTab={setActiveTab} path="/3" />
            <NavItem icon={<img src={"/firee.png"} className="w-8 h-8" alt="wallet--v1" />} label="Boost" activeTab={activeTab} setActiveTab={setActiveTab} path="/4" />
            <NavItem icon={<img src={"/bitcoin_wallet.png"} className="w-8 h-10" alt="wallet--v1" />} label="Wallet" activeTab={activeTab} setActiveTab={setActiveTab} path="/5" />
          </div>
        </nav>
      </body>
    </html>
  );
}

function NavItem({ icon, label, activeTab, setActiveTab, path }: { icon: React.ReactNode, label: string, activeTab: string, setActiveTab: React.Dispatch<React.SetStateAction<string>>, path: string }) {
  const router = useRouter();
  const isActive = activeTab === label

  const handleClick = () => {
    setActiveTab(label);
    router.push(path);
  };

  return (
    <button
      onClick={handleClick}
      className={`flex flex-col items-center justify-center p-2 rounded-md w-16 h-16 ${isActive
          ? "bg-[#2a2b36] border border-blue-500 text-blue-500"
          : "border border-gray-700 text-gray-400 hover:text-gray-200"
        }`}
    >
      {icon}
      <span className="text-[10px] mt-1">{label}</span>
    </button>
  )
}
