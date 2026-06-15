import { describe, it, expect } from "vitest";
import { validateFlightSearch, validateEmail, validateHotelSearch } from "../utils/validation.js";

describe("validation", () => {
  describe("validateEmail", () => {
    it("returns error for empty email", () => {
      expect(validateEmail("")).toBe("Email is required");
    });

    it("returns error for invalid email", () => {
      expect(validateEmail("not-an-email")).toBe("Please enter a valid email address");
    });

    it("returns null for valid email", () => {
      expect(validateEmail("user@example.com")).toBeNull();
    });
  });

  describe("validateFlightSearch", () => {
    it("returns errors for empty form", () => {
      const errors = validateFlightSearch({ from: "", to: "", departDate: "" });
      expect(errors.from).toBeDefined();
      expect(errors.to).toBeDefined();
      expect(errors.departDate).toBeDefined();
    });

    it("returns error when from and to are the same", () => {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const dateStr = tomorrow.toISOString().split("T")[0];
      const errors = validateFlightSearch({ from: "Mumbai", to: "Mumbai", departDate: dateStr });
      expect(errors.to).toBe("Destination must differ from departure city");
    });
  });

  describe("validateHotelSearch", () => {
    it("returns error when check-out is before check-in", () => {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const dayAfter = new Date();
      dayAfter.setDate(dayAfter.getDate() + 2);
      const errors = validateHotelSearch({
        city: "Goa",
        checkIn: dayAfter.toISOString().split("T")[0],
        checkOut: tomorrow.toISOString().split("T")[0],
      });
      expect(errors.checkOut).toBe("Check-out must be after check-in");
    });
  });
});
