'use client'

import localFont from "next/font/local";
import "./globals.css";
import {useState} from "react"
// import { useRouter } from 'next/navigation';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [activeTab, setActiveTab] = useState("Tap")

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <nav className="fixed bottom-4 left-0 right-0 bg-[#1a1b26] p-2">
          <div className="flex justify-between items-center">
            <NavItem icon={<img src={"/referr.png"} className="w-[10vw] h-[12vh] flex justify-center items-center mt-2" alt="wallet--v1" />} label="Ref" activeTab={activeTab} setActiveTab={setActiveTab}  />
            <NavItem icon={<img src={"/tick.png"} className="w-[11vw] h-[5vh]flex justify-center items-center mt-2" alt="wallet--v1" />} label="Tasks" activeTab={activeTab} setActiveTab={setActiveTab} />
            <NavItem icon={<img src={"/coinn.png"} className="w-12 h-10 flex justify-center items-center mt-2 -mb-1" alt="wallet--v1" />} label="Tap" activeTab={activeTab} setActiveTab={setActiveTab}  />
            <NavItem icon={<img src={"/firee.png"} className="w-8 h-8 flex justify-center items-center mt-2" alt="wallet--v1" />} label="Boost" activeTab={activeTab} setActiveTab={setActiveTab} />
            <NavItem icon={<img src={"/bitcoin_wallet.png"} className="w-12 h-8 flex justify-center items-center mt-2" alt="wallet--v1" />} label="Wallet" activeTab={activeTab} setActiveTab={setActiveTab}  />
          </div>
        </nav>
      </body>
    </html>
  );
}

function NavItem({ icon, label, activeTab, setActiveTab }: { icon: React.ReactNode, label: string, activeTab: string, setActiveTab: React.Dispatch<React.SetStateAction<string>>}) {
  // const router = useRouter();
  const isActive = activeTab === label

  const handleClick = () => {
    setActiveTab(label);
    // router.push(path);
  };

  return (
    <button
      onClick={handleClick}
      className={`flex flex-col items-center justify-evenly rounded-md w-16 h-16 ${isActive
          ? "bg-[#1B4468] border-2 border-blue-700  text-blue-500"
          : "border border-gray-700 text-gray-400 hover:text-gray-200"
        }`}
    >
      {icon}
      <span className="text-[10px] text-white mt-1">{label}</span>
    </button>
  )
}
