import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout.jsx";
import ProtectedRoute from "../components/layout/ProtectedRoute.jsx";
import { SkeletonList } from "../components/common/Skeleton.jsx";

const HomePage = lazy(() => import("../pages/HomePage.jsx"));
const FlightsPage = lazy(() => import("../pages/FlightsPage.jsx"));
const HotelsPage = lazy(() => import("../pages/HotelsPage.jsx"));
const BusesPage = lazy(() => import("../pages/BusesPage.jsx"));
const TrainsPage = lazy(() => import("../pages/TrainsPage.jsx"));
const HolidaysPage = lazy(() => import("../pages/HolidaysPage.jsx"));
const HotelDetailPage = lazy(() => import("../pages/HotelDetailPage.jsx"));
const HolidayDetailPage = lazy(() => import("../pages/HolidayDetailPage.jsx"));
const LoginPage = lazy(() => import("../pages/LoginPage.jsx"));
const DashboardPage = lazy(() => import("../pages/DashboardPage.jsx"));
const AboutPage = lazy(() => import("../pages/AboutPage.jsx"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage.jsx"));

function PageLoader() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <SkeletonList count={2} />
    </div>
  );
}

export default function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="flights" element={<FlightsPage />} />
          <Route path="hotels" element={<HotelsPage />} />
          <Route path="hotels/:id" element={<HotelDetailPage />} />
          <Route path="buses" element={<BusesPage />} />
          <Route path="trains" element={<TrainsPage />} />
          <Route path="holidays" element={<HolidaysPage />} />
          <Route path="holidays/:id" element={<HolidayDetailPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route
            path="dashboard"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
