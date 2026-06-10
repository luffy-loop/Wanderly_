import React, { useRef, useState } from "react";
import { useTravel } from "../src/TravelContext.jsx";
import Toast from "./Toast.jsx";

/* Controlled + Uncontrolled:
   - name, email, date are controlled (useState)
   - notes is uncontrolled (useRef) */
export default function BookingForm() {
  const { cart, total } = useTravel();
  const [form, setForm] = useState({ name: "", email: "", date: "" });
  const [errors, setErrors] = useState({});
  const [showToast, setShowToast] = useState(false);
  const notesRef = useRef();

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Name is required.";
    if (!/\S+@\S+\.\S+/.test(form.email)) next.email = "A valid email is required.";
    if (!form.date) next.date = "Pick a date.";
    if (cart.length === 0) next.cart = "Add at least one destination.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const booking = {
      ...form,
      notes: notesRef.current?.value || "",
      items: cart,
      total
    };
    sessionStorage.setItem("lastBooking", JSON.stringify(booking));
setShowToast(true);

setTimeout(() => {
  setShowToast(false);
}, 3000);    setForm({ name: "", email: "", date: "" });
    if (notesRef.current) notesRef.current.value = "";
  };

  return (
    <form onSubmit={submit} className="card-glass p-6 space-y-4">
      <h3 className="font-bold text-lg">Traveler details</h3>

      <div>
        <label className="block text-sm font-medium">Name</label>
        <input
          className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-sky-400"
          name="name"
          value={form.name}
          onChange={onChange}
          placeholder="Aisha Khan"
        />
        {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium">Email</label>
        <input
          className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-sky-400"
          name="email"
          type="email"
          value={form.email}
          onChange={onChange}
          placeholder="aisha@example.com"
        />
        {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium">Travel date</label>
        <input
          className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-sky-400"
          name="date"
          type="date"
          value={form.date}
          onChange={onChange}
        />
        {errors.date && <p className="text-red-600 text-sm mt-1">{errors.date}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium">Notes (uncontrolled)</label>
        <textarea
          ref={notesRef}
          className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-sky-400"
          placeholder="Seat preference, food allergies..."
          rows="3"
        />
      </div>

      {errors.cart && <p className="text-red-600 text-sm">{errors.cart}</p>}

      <button className="px-4 py-2 rounded-lg bg-fuchsia-600 text-white hover:bg-fuchsia-700">
        Confirm booking
      </button>
      <Toast
  show={showToast}
  message="✅ Booking Confirmed Successfully!"
/>
    </form>
  );
}