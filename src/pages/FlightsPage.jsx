import FlightResultsContainer from "../containers/FlightResultsContainer.jsx";

export default function FlightsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
      <div className="mb-8">
        <h1 className="section-title">Search Flights</h1>
        <p className="section-subtitle">Find the best deals on domestic and international flights</p>
      </div>
      <FlightResultsContainer />
    </div>
  );
}
