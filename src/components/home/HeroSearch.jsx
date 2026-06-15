import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { useBooking } from "../../contexts/BookingContext.jsx";
import { BOOKING_TABS } from "../../utils/constants.js";
import FlightSearchForm from "../booking/FlightSearchForm.jsx";
import HotelSearchForm from "../booking/HotelSearchForm.jsx";
import BusSearchForm from "../booking/BusSearchForm.jsx";
import TrainSearchForm from "../booking/TrainSearchForm.jsx";
import HolidaySearchForm from "../booking/HolidaySearchForm.jsx";
import { TRAVEL_IMAGES } from "../../utils/images.js";

const formComponents = {
  flights: FlightSearchForm,
  hotels: HotelSearchForm,
  buses: BusSearchForm,
  trains: TrainSearchForm,
  holidays: HolidaySearchForm,
};

function HeroSearch() {
  const { activeTab, setActiveTab } = useBooking();
  const navigate = useNavigate();
  const ActiveForm = formComponents[activeTab];

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  const handleSearch = (params) => {
    const tab = BOOKING_TABS.find((t) => t.id === activeTab);
    if (tab) navigate(tab.path, { state: { searchParams: params } });
  };

  return (
    <section
      className="relative overflow-hidden"
      aria-label="Travel booking search"
    >
      <div className="absolute inset-0 gradient-hero" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('${TRAVEL_IMAGES.hero}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-900/20 to-brand-900/40" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24 lg:py-28">
        <div className="text-center mb-8 md:mb-10 animate-in">
          <h1 className="font-display font-bold text-3xl md:text-5xl lg:text-6xl text-white leading-tight">
            Explore the World with
            <span className="block mt-1 text-cyan-200">TravelEase</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            Book flights, hotels, buses, trains & holiday packages at the best prices
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            className="flex flex-wrap gap-1 p-1.5 bg-white/10 backdrop-blur-md rounded-2xl mb-4"
            role="tablist"
            aria-label="Booking type"
          >
            {BOOKING_TABS.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`flex-1 min-w-[80px] flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-white text-brand-800 shadow-lg"
                    : "text-white/90 hover:bg-white/10"
                }`}
              >
                <span aria-hidden="true">{tab.icon}</span>
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>

          <div
            className="bg-white rounded-2xl shadow-hero p-5 md:p-8 animate-in"
            role="tabpanel"
            aria-label={`${activeTab} search`}
          >
            <ActiveForm onSearch={handleSearch} compact />
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(HeroSearch);
