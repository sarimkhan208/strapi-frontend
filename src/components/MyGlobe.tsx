import React from 'react'
import Globe from './magicui/globe'
import GradualSpacing from './magicui/gradual-spacing'

export const MyGlobe = (data:any) => {
  return (
    <div className=" flex h-full w-full items-center justify-center overflow-hidden rounded-lg px-40 pb-40 pt-16 md:pb-[500px]">
      <div>
        <GradualSpacing
      className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10  "
      text={data.Title}
    />
        <h3 className='text-center text-[15px] text-gray-500 mt-2 font-[400] ' >{data.Description}</h3>
      </div>
      <Globe className="top-[200px] " />
    </div>
  )
}












{/* <h3 className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
Hey Developers
</h3> */}