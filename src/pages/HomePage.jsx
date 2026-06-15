import HeroSearch from "../components/home/HeroSearch.jsx";
import TrendingOffers from "../components/home/TrendingOffers.jsx";
import PopularDestinations from "../components/home/PopularDestinations.jsx";
import TravelPackages from "../components/home/TravelPackages.jsx";
import HotelRecommendations from "../components/home/HotelRecommendations.jsx";
import Testimonials from "../components/home/Testimonials.jsx";
import TravelBlogs from "../components/home/TravelBlogs.jsx";
import Newsletter from "../components/home/Newsletter.jsx";

export default function HomePage() {
  return (
    <>
      <HeroSearch />
      <TrendingOffers />
      <PopularDestinations />
      <TravelPackages />
      <HotelRecommendations />
      <Testimonials />
      <TravelBlogs />
      <Newsletter />
    </>
  );
}
