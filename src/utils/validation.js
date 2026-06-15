export function validateRequired(value, fieldName) {
  if (!value || !String(value).trim()) {
    return `${fieldName} is required`;
  }
  return null;
}

export function validateDate(value, fieldName) {
  const required = validateRequired(value, fieldName);
  if (required) return required;
  const date = new Date(value);
  if (isNaN(date.getTime())) return `${fieldName} must be a valid date`;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (date < today) return `${fieldName} cannot be in the past`;
  return null;
}

export function validateEmail(value) {
  if (!value || !String(value).trim()) return "Email is required";
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(value)) return "Please enter a valid email address";
  return null;
}

export function validateFlightSearch(form) {
  const errors = {};
  const fromError = validateRequired(form.from, "Departure city");
  const toError = validateRequired(form.to, "Destination city");
  const dateError = validateDate(form.departDate, "Departure date");
  if (fromError) errors.from = fromError;
  if (toError) errors.to = toError;
  if (dateError) errors.departDate = dateError;
  if (form.from && form.to && form.from === form.to) {
    errors.to = "Destination must differ from departure city";
  }
  return errors;
}

export function validateHotelSearch(form) {
  const errors = {};
  const cityError = validateRequired(form.city, "City");
  const checkInError = validateDate(form.checkIn, "Check-in date");
  const checkOutError = validateDate(form.checkOut, "Check-out date");
  if (cityError) errors.city = cityError;
  if (checkInError) errors.checkIn = checkInError;
  if (checkOutError) errors.checkOut = checkOutError;
  if (form.checkIn && form.checkOut && new Date(form.checkOut) <= new Date(form.checkIn)) {
    errors.checkOut = "Check-out must be after check-in";
  }
  return errors;
}

export function validateLogin(form) {
  const errors = {};
  const emailError = validateEmail(form.email);
  if (emailError) errors.email = emailError;
  const passwordError = validateRequired(form.password, "Password");
  if (passwordError) errors.password = passwordError;
  return errors;
}
