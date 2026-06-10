import React from "react";
import { useTravel } from "../src/TravelContext.jsx";

export default function Cart() {
  const { cart, removeFromCart, updateQty, total } = useTravel();

  return (
    <aside className="card-glass p-6 h-fit">
      <h3 className="font-bold text-lg">Your cart</h3>
      <ul className="divide-y divide-slate-200">
        {cart.map(item => (
          <li key={item.id} className="py-3 flex items-center justify-between gap-2">
            <div>
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-slate-600">${item.price}</p>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min="1"
                value={item.qty}
                onChange={(e) => updateQty(item.id, Number(e.target.value))}
                className="w-16 px-2 py-1 rounded-lg border"
              />
              <button
                onClick={() => removeFromCart(item.id)}
                className="px-2 py-1 rounded-lg bg-rose-500 text-white hover:bg-rose-600"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex items-center justify-between">
        <span className="font-bold">Total</span>
        <span className="font-extrabold text-emerald-700">${total}</span>
      </div>
    </aside>
  );
}