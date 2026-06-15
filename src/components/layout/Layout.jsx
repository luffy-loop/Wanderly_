import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import ErrorBoundary from "../common/ErrorBoundary.jsx";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <ErrorBoundary>
        <main className="flex-1" id="main-content">
          <Outlet />
        </main>
      </ErrorBoundary>
      <Footer />
    </div>
  );
}
