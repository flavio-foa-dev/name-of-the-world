import React from 'react'

export default function Header() {
  return (
    <div className=" h-20 flex items-center justify-evenly  bg-amber-500 text-yellow-50 bold shadow-lg ">
      <div className="font-black border-4 px-3 flex py-1">
        <p className="inline-flex  items-center">WorldS
        <svg className="w-6 h-6 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></p>
      </div>
      <div className="">
        <ul className="flex ml-auto space-x-4">
          <li className="text-sm text-yellow-50 cursor-pointer hover:text-yellow-800 bold hover:underline">Home</li>
          <li className="text-sm text-yellow-50 cursor-pointer hover:text-yellow-800 bold hover:underline">Contatos</li>
          <li className="text-sm text-yellow-50 cursor-pointer hover:text-yellow-800 bold hover:underline ">Sobre-nos</li>
        </ul>
      </div>
      <div className=" hover:text-yellow-800 bold hover:underline">
        <span className="cursor-pointer">Login</span>
      </div>
    </div>
  )
}