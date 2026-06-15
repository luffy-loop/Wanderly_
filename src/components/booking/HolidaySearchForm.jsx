import { useState, memo } from "react";
import Select from "../common/Select.jsx";
import Button from "../common/Button.jsx";
import { CITIES } from "../../utils/constants.js";
import { validateRequired } from "../../utils/validation.js";

function HolidaySearchForm({ onSearch, compact = false }) {
  const [destination, setDestination] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validateRequired(destination, "Destination");
    if (err) {
      setError(err);
      return;
    }
    onSearch?.({ destination });
  };

  const cityOptions = [{ value: "", label: "Select destination" }, ...CITIES.map((c) => ({ value: c, label: c }))];

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Holiday search form">
      <div className={`grid gap-4 ${compact ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"}`}>
        <Select
          label="Destination"
          value={destination}
          onChange={(e) => {
            setDestination(e.target.value);
            setError(null);
          }}
          options={cityOptions}
          error={error}
          required
        />
        {!compact && (
          <div className="flex items-end">
            <p className="text-sm text-slate-500 pb-3">
              Explore curated holiday packages with flights, hotels & activities included.
            </p>
          </div>
        )}
      </div>
      <div className="mt-5 flex justify-end">
        <Button type="submit" variant="accent" aria-label="Search holiday packages">
          Explore Packages
        </Button>
      </div>
    </form>
  );
}

export default memo(HolidaySearchForm);
