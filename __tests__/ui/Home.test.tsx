import { render, screen } from "@testing-library/react";

import Home from "@/app/page";

describe("Test Home Page", () => {
  test("Heading should be in the document", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", { level: 1, name: /Certifications/i });

    expect(heading).toBeInTheDocument();
  });
});
