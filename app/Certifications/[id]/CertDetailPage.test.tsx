import { render, screen } from "@testing-library/react";
import CertDetailPage from "./page";

describe("CertDetailPage", () => {
  test("renders Back to Home link", async () => {
    const params = Promise.resolve({ id: "1" });
    render(await CertDetailPage({ params }));

    const backLink = screen.getByRole("link", { name: /back to home/i });
    expect(backLink).toBeInTheDocument();
    expect(backLink).toHaveAttribute("href", "/");
  });
});
