import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Test Navbar component", () => {
  test("render Navbar", () => {
    render(<Navbar />);

    const link = screen.getByRole("link", { name: /my-certs/i });
    expect(link).toBeInTheDocument();
  });
});
