import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Button from "../components/common/Button.jsx";

describe("Button", () => {
  it("renders children text", () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByRole("button", { name: "Click Me" })).toBeInTheDocument();
  });

  it("calls onClick when clicked", async () => {
    const user = userEvent.setup();
    let clicked = false;
    render(<Button onClick={() => { clicked = true; }}>Click</Button>);
    await user.click(screen.getByRole("button"));
    expect(clicked).toBe(true);
  });

  it("is disabled when loading", () => {
    render(<Button loading>Submit</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
    expect(screen.getByText("Loading…")).toBeInTheDocument();
  });
});

describe("SafeImage", () => {
  it("renders with provided src and alt text", async () => {
    const { default: SafeImage } = await import("../components/common/SafeImage.jsx");

    render(
      <div className="card-image">
        <SafeImage src="https://example.com/photo.jpg" alt="Goa beach" />
      </div>
    );

    const img = screen.getByRole("img", { name: "Goa beach" });
    expect(img).toHaveAttribute("src", "https://example.com/photo.jpg");
  });

  it("falls back to default travel image on load error", async () => {
    const { default: SafeImage } = await import("../components/common/SafeImage.jsx");
    const { TRAVEL_IMAGES } = await import("../utils/images.js");

    render(
      <div className="card-image">
        <SafeImage src="https://invalid.example/broken.jpg" alt="Fallback test" />
      </div>
    );

    const img = screen.getByRole("img", { name: "Fallback test" });
    fireEvent.error(img);
    expect(img).toHaveAttribute("src", TRAVEL_IMAGES.fallback);
  });
});

describe("Navbar", () => {
  it("renders TravelEase brand and navigation links", async () => {
    const { default: Navbar } = await import("../components/layout/Navbar.jsx");
    const { AuthProvider } = await import("../contexts/AuthContext.jsx");

    render(
      <BrowserRouter>
        <AuthProvider>
          <Navbar />
        </AuthProvider>
      </BrowserRouter>
    );

    expect(screen.getByLabelText("TravelEase Home")).toBeInTheDocument();
    expect(screen.getByText("Flights")).toBeInTheDocument();
    expect(screen.getByText("Hotels")).toBeInTheDocument();
  });
});
