
import React from 'react'

export default function Navbar() {
  return (
    <nav className="bg-transparent p-4">
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex gap-4">
        <button className="text-white px-4 py-2 rounded-full border border-white">إنشاء حساب</button>
      <details className="dropdown">
  <summary className=" text-white px-4 py-2 rounded-full border border-white">USD</summary>
  <ul className="menu dropdown-content border-black bg-white/30 text-white rounded-box z-[1] w-52 p-2 shadow">
    <li><a>EGP</a></li>
    <li><a>AED</a></li>
    <li><a>TRY</a></li>
  </ul>
</details>
      </div>
     <div>
     <div className="text-white text-2xl font-bold">Wanderlust</div>
     <span>Travels</span>
     </div>
    </div>
  </nav>
  )
}
