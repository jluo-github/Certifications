import { render, screen } from "@testing-library/react";
import CertDetailPage from "./page";

beforeEach(async () => {
  const params = Promise.resolve({ id: "1" });
  render(await CertDetailPage({ params }));
});

describe("CertDetailPage", () => {
  test("renders Back to Home link", () => {
    const backLink = screen.getByRole("link", { name: /back to home/i });
    expect(backLink).toBeInTheDocument();
    expect(backLink).toHaveAttribute("href", "/");
  });

  test("image", () => {
    const title = screen.getByText(/AWS Certified Cloud Practitioner/i);
    expect(title).toBeInTheDocument();

    const imageAlt = screen.getByAltText(/AWS Certified Cloud Practitioner/i);
    expect(imageAlt).toBeInTheDocument();
  });
});
