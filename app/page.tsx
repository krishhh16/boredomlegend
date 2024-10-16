"use client"

import React from 'react'
import Image from 'next/image'
import { ChevronRight, Zap } from "lucide-react"

function Page() {
  return (
    <main className="flex-1 flex flex-col bg-[#1a1b26] items-center justify-center p-2 space-y-8 min-h-screen w-full">
      {/* Coin Count and Status */}
      <div className="flex flex-col items-center bg-[#1a1b26] space-x-4 -mt-[18vh]">
        <div className="flex items-center">
          <Image src="/coinnn.png" width={40} height={40} alt="Coin" className="mr-2" />
          <span className="text-3xl font-bold">4</span>
        </div>
        <div className="flex items-center text-gray-500">
          <Image src="/trophy.png" width={30} height={30} alt="Trophy" className="mr-2" />
          <span className='text-sm' style={{ zIndex: 1000 }} >Bronze</span>
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
          <div className="bg-yellow-500 h-[4px] rounded-full" style={{ width: "29.4%" }}></div>
        </div>
      </div>

    </main>
  )
}

export default Page