import React, { Suspense } from "react";
import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import DestinationList from "./DestinationList.jsx";
import BookingForm from "./BookingForm.jsx";
import Cart from "./Cart.jsx";
import Footer from "./Footer.jsx";
import ErrorBoundary from "./ErrorBoundary.jsx";
import Comments from "./Comments.jsx";
import SearchBar from "./SearchBar.jsx";
import Counter from "./Counter.jsx";

export default function App() {
  return (
    <div className="min-h-screen text-slate-800 bg-gradient-to-b from-sky-50 to-white">
      <Navbar />
      <Hero />
      <main className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 space-y-12">
        <ErrorBoundary>
          <section id="discover" className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <h2 className="text-2xl font-bold">Discover</h2>
              <SearchBar />
            </div>
            <DestinationList />
          </section>

          <section id="booking" className="space-y-6">
            <h2 className="text-2xl font-bold">Book your trip</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <BookingForm />
              </div>
              <Cart />
            </div>
          </section>

          <section id="social" className="space-y-6">
            <h2 className="text-2xl font-bold">Traveler wall</h2>
            <Suspense fallback={<div className="animate-pulse">Loading comments…</div>}>
              <Comments />
            </Suspense>
          </section>

          <section id="fun" className="space-y-4">
            <h2 className="text-2xl font-bold">Fun counter</h2>
            <Counter />
          </section>
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  );
}