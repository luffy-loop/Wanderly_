import BusResultsContainer from "../containers/BusResultsContainer.jsx";

export default function BusesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
      <div className="mb-8">
        <h1 className="section-title">Search Buses</h1>
        <p className="section-subtitle">Comfortable bus journeys across India</p>
      </div>
      <BusResultsContainer />
    </div>
  );
}
