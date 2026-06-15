import HolidayResultsContainer from "../containers/HolidayResultsContainer.jsx";

export default function HolidaysPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
      <div className="mb-8">
        <h1 className="section-title">Holiday Packages</h1>
        <p className="section-subtitle">Curated travel experiences for every budget</p>
      </div>
      <HolidayResultsContainer />
    </div>
  );
}
