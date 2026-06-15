import HotelResultsContainer from "../containers/HotelResultsContainer.jsx";

export default function HotelsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
      <div className="mb-8">
        <h1 className="section-title">Search Hotels</h1>
        <p className="section-subtitle">Discover premium stays at the best prices</p>
      </div>
      <HotelResultsContainer />
    </div>
  );
}
