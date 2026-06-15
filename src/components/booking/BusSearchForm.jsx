import { useState, memo } from "react";
import Select from "../common/Select.jsx";
import Input from "../common/Input.jsx";
import Button from "../common/Button.jsx";
import { CITIES } from "../../utils/constants.js";
import { validateFlightSearch } from "../../utils/validation.js";

function BusSearchForm({ onSearch, compact = false }) {
  const [form, setForm] = useState({ from: "", to: "", date: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: null }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateFlightSearch({ ...form, departDate: form.date });
    const mapped = { from: validationErrors.from, to: validationErrors.to, date: validationErrors.departDate };
    const filtered = Object.fromEntries(Object.entries(mapped).filter(([, v]) => v));
    if (Object.keys(filtered).length > 0) {
      setErrors(filtered);
      return;
    }
    onSearch?.(form);
  };

  const cityOptions = [{ value: "", label: "Select city" }, ...CITIES.map((c) => ({ value: c, label: c }))];

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Bus search form">
      <div className={`grid gap-4 ${compact ? "md:grid-cols-3" : "md:grid-cols-2 lg:grid-cols-3"}`}>
        <Select label="From" value={form.from} onChange={handleChange("from")} options={cityOptions} error={errors.from} required />
        <Select label="To" value={form.to} onChange={handleChange("to")} options={cityOptions} error={errors.to} required />
        <Input label="Travel Date" type="date" value={form.date} onChange={handleChange("date")} error={errors.date} required />
      </div>
      <div className="mt-5 flex justify-end">
        <Button type="submit" variant="accent" aria-label="Search buses">Search Buses</Button>
      </div>
    </form>
  );
}

export default memo(BusSearchForm);
