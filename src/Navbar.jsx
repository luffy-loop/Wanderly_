import React from "react";
import { useTravel } from "../src/TravelContext.jsx";

export default function Navbar() {
  const { cart } = useTravel();
  const count = cart.reduce((s, i) => s + i.qty, 0);

  return (
    <header className="sticky top-0 z-40 gradient-brand text-white">
      <nav className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-3 flex items-center justify-between">
        <a href="#" className="font-extrabold tracking-wide text-xl">Wanderly</a>
        <ul className="hidden sm:flex gap-6 font-medium">
          <li><a href="#discover" className="hover:underline">Discover</a></li>
          <li><a href="#booking" className="hover:underline">Book</a></li>
          <li><a href="#social" className="hover:underline">Wall</a></li>
        </ul>
        <div className="flex items-center gap-3">
          <span className="text-sm bg-white/20 px-3 py-1 rounded-full">Cart {count}</span>
        </div>
      </nav>
    </header>
  );
}