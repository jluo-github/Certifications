import { render, screen } from "@testing-library/react";

import Footer from "./Footer";

describe("Test Footer component", () => {
  test("render footer", () => {
    render(<Footer />);
    expect(screen.getByText(/All Rights reserved./i)).toBeInTheDocument();
  });
});
