import { useState, memo } from "react";
import Input from "../common/Input.jsx";
import Select from "../common/Select.jsx";
import Button from "../common/Button.jsx";
import { CITIES } from "../../utils/constants.js";
import { validateHotelSearch } from "../../utils/validation.js";

function HotelSearchForm({ onSearch, compact = false }) {
  const [form, setForm] = useState({
    city: "",
    checkIn: "",
    checkOut: "",
    guests: "2",
    rooms: "1",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: null }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateHotelSearch(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    onSearch?.(form);
  };

  const cityOptions = [{ value: "", label: "Select city" }, ...CITIES.map((c) => ({ value: c, label: c }))];

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Hotel search form">
      <div className={`grid gap-4 ${compact ? "md:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-2 lg:grid-cols-3"}`}>
        <Select label="City" value={form.city} onChange={handleChange("city")} options={cityOptions} error={errors.city} required />
        <Input label="Check-in" type="date" value={form.checkIn} onChange={handleChange("checkIn")} error={errors.checkIn} required />
        <Input label="Check-out" type="date" value={form.checkOut} onChange={handleChange("checkOut")} error={errors.checkOut} required />
        <Select
          label="Guests"
          value={form.guests}
          onChange={handleChange("guests")}
          options={["1", "2", "3", "4", "5", "6"].map((n) => ({ value: n, label: `${n} Guest${n > 1 ? "s" : ""}` }))}
        />
        {!compact && (
          <Select
            label="Rooms"
            value={form.rooms}
            onChange={handleChange("rooms")}
            options={["1", "2", "3", "4"].map((n) => ({ value: n, label: `${n} Room${n > 1 ? "s" : ""}` }))}
          />
        )}
      </div>
      <div className="mt-5 flex justify-end">
        <Button type="submit" variant="accent" aria-label="Search hotels">
          Search Hotels
        </Button>
      </div>
    </form>
  );
}

export default memo(HotelSearchForm);
