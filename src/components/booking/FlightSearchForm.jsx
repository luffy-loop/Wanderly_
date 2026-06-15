import { useState, memo } from "react";
import Input from "../common/Input.jsx";
import Select from "../common/Select.jsx";
import Button from "../common/Button.jsx";
import { CITIES } from "../../utils/constants.js";
import { validateFlightSearch } from "../../utils/validation.js";

function FlightSearchForm({ onSearch, compact = false }) {
  const [form, setForm] = useState({
    from: "",
    to: "",
    departDate: "",
    passengers: "1",
    class: "Economy",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: null }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateFlightSearch(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    onSearch?.(form);
  };

  const cityOptions = [{ value: "", label: "Select city" }, ...CITIES.map((c) => ({ value: c, label: c }))];

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Flight search form">
      <div className={`grid gap-4 ${compact ? "md:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-2 lg:grid-cols-3"}`}>
        <Select label="From" value={form.from} onChange={handleChange("from")} options={cityOptions} error={errors.from} required />
        <Select label="To" value={form.to} onChange={handleChange("to")} options={cityOptions} error={errors.to} required />
        <Input label="Departure Date" type="date" value={form.departDate} onChange={handleChange("departDate")} error={errors.departDate} required />
        <Select
          label="Passengers"
          value={form.passengers}
          onChange={handleChange("passengers")}
          options={["1", "2", "3", "4", "5", "6"].map((n) => ({ value: n, label: `${n} Passenger${n > 1 ? "s" : ""}` }))}
        />
        {!compact && (
          <Select
            label="Class"
            value={form.class}
            onChange={handleChange("class")}
            options={["Economy", "Premium Economy", "Business", "First Class"].map((c) => ({ value: c, label: c }))}
          />
        )}
      </div>
      <div className="mt-5 flex justify-end">
        <Button type="submit" variant="accent" aria-label="Search flights">
          Search Flights
        </Button>
      </div>
    </form>
  );
}

export default memo(FlightSearchForm);
