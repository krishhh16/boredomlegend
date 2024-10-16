'use client'

import localFont from "next/font/local";
import "../globals.css";
import { usePathname } from 'next/navigation';
import Link from 'next/link';

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
  const pathname = usePathname();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <nav className="fixed bottom-4 left-0 right-0 bg-[#1a1b26] p-3">
          <div className="flex justify-between items-center">
            <NavItem icon={<img src="/referr.png" className="w-[10vw] h-[12vh] flex justify-center items-center mt-2" alt="referral" />} label="Ref" isActive={pathname === '/referral'} path="/referral" />
            <NavItem icon={<img src="/tick.png" className="w-[11vw] h-[5vh] flex justify-center items-center mt-2" alt="tasks" />} label="Tasks" isActive={pathname === '/tasks'} path="/tasks" />
            <NavItem icon={<img src="/coinn.png" className="w-12 h-10 flex justify-center items-center mt-2 -mb-1" alt="tap" />} label="Tap" isActive={pathname === '/'} path="/" />
            <NavItem icon={<img src="/firee.png" className="w-8 h-8 flex justify-center items-center mt-2" alt="boost" />} label="Boost" isActive={pathname === '/boost'} path="/boost" />
            <NavItem icon={<img src="/bitcoin_wallet.png" className="w-12 h-8 flex justify-center items-center mt-2" alt="wallet" />} label="Wallet" isActive={pathname === '/wallet'} path="/wallet" />
          </div>
        </nav>
      </body>
    </html>
  );
}

function NavItem({ icon, label, isActive, path }: { icon: React.ReactNode, label: string, isActive: boolean, path: string }) {
  return (
    <Link
      href={path}
      className={`flex flex-col items-center justify-evenly rounded-md w-16 h-16 ${
        isActive
          ? "bg-[#1B4468] border-2 border-blue-700 text-blue-500"
          : "border border-gray-700 text-gray-400 hover:text-gray-200"
      }`}
    >
      {icon}
      <span className="text-[10px] text-white mt-1">{label}</span>
    </Link>
  )
}
