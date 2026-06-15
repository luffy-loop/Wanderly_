import TrainResultsContainer from "../containers/TrainResultsContainer.jsx";

export default function TrainsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
      <div className="mb-8">
        <h1 className="section-title">Search Trains</h1>
        <p className="section-subtitle">Book train tickets with ease</p>
      </div>
      <TrainResultsContainer />
    </div>
  );
}
