"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { ChevronRight, Zap } from "lucide-react"
import WebApp  from '@twa-dev/sdk';

interface User {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code: string;
  is_premium?: string;
}

function Page() {
  const [user, setUser] = useState<null | User>(null);

  useEffect(()=> {
    if (WebApp.initDataUnsafe.user){
      setUser(WebApp.initDataUnsafe.user as User)
    }
  }, [])

  return (
    <main className="flex-1 flex flex-col bg-[#1a1b26] items-center justify-center p-2 space-y-8 min-h-screen w-full">
      {/* Coin Count and Status */}
      <div className="flex flex-col items-center bg-[#1a1b26] space-x-4 -mt-[18vh]">
        <div className="flex items-center">
          <Image src="/coinnn.png" width={40} height={40} alt="Coin" className="mr-2" />
          <span className="text-3xl font-bold">4</span>
        </div>
        <div className="flex flex-col items-center text-gray-500">
          <Image src="/trophy.png" width={30} height={30} alt="Trophy" className="mr-2" />
          <div className='text-sm' style={{ zIndex: 1000 }} >Username: {user?.username}</div>
          <br></br>
          <div className='text-sm' style={{ zIndex: 1000 }} >first_name: {user?.first_name}</div>
          <br></br>
          <div className='text-sm' style={{ zIndex: 1000 }} >id: {user?.id}</div>
          <ChevronRight size={16} />
        </div>
      </div>
      <div />
      {/* Large Coin Image */}
      <div className="w-64 h-72">
        <div className="inset-0 absolute mt-[25vh] ml-[5vh]">
          <div style={{
            transform: 'rotateX(360deg) rotateZ(30deg) rotateY(40deg)',
            transformStyle: 'preserve-3d',
            zIndex: 10
          }}>
            <Image
              src="/monkey.png"
              width={340}
              height={340}
              alt="Large Coin"
              className="-mt-4"
            />
          </div>
        </div>
      </div>
      <img src="/spotlightt.jpeg" alt="Large Coin" className="w-[100vw] absolute top-8 h-[60vh] object-contain" style={{ zIndex: 1, opacity: 0.2 }} />

      {/* Progress Bar */}
      <div className="w-full max-w-xs absolute bottom-[10vh] space-y-2">
        <div style={{ zIndex: 1000 }} className="flex justify-center items-center">
          <Zap size={16} className="text-yellow-500" />
          <span className="text-sm">7/500</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2 border-4 border-gray-500 flex justify-start items-center">
          <div className="bg-yellow-500 h-[4px] rounded-full" style={{ width: "5%" }}></div>
        </div>
      </div>

    </main>
  )
}

export default Page