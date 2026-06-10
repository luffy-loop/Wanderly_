import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { fetchDestinations } from "./api.js";

const TravelContext = createContext();

export function TravelProvider({ children }) {
  const [destinations, setDestinations] = useState([]);
  const [query, setQuery] = useState("");
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });
  const [view, setView] = useState("grid"); // derived UI state

  useEffect(() => {
    fetchDestinations().then(setDestinations);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return destinations;
    return destinations.filter(d =>
      [d.name, d.country, d.tags.join(" ")].join(" ").toLowerCase().includes(q)
    );
  }, [destinations, query]);

  const total = useMemo(
    () => cart.reduce((s, i) => s + i.price * i.qty, 0),
    [cart]
  );

  const value = {
    destinations,
    filtered,
    query,
    setQuery,
    cart,
    setCart,
    addToCart: (dest) =>
      setCart(prev => {
        const idx = prev.findIndex(p => p.id === dest.id);
        if (idx >= 0) {
          const next = [...prev];
          next[idx] = { ...next[idx], qty: next[idx].qty + 1 };
          return next;
        }
        return [...prev, { id: dest.id, name: dest.name, price: dest.price, qty: 1 }];
      }),
    removeFromCart: (id) => setCart(prev => prev.filter(p => p.id !== id)),
    updateQty: (id, qty) =>
      setCart(prev => prev.map(p => (p.id === id ? { ...p, qty: Math.max(1, qty) } : p))),
    total,
    view,
    setView
  };

  return <TravelContext.Provider value={value}>{children}</TravelContext.Provider>;
}

export const useTravel = () => useContext(TravelContext);