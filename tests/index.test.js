import Home from "../pages/index";

import Product from "../pages/product/[id]";

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Home", () => {
  it("renders homepage", () => {
    render(<Home />);
    expect(screen.getByTestId("container")).toBeInTheDocument();
    const main = screen.getByRole("main");
    expect(main).toBeInTheDocument();
  });
});

describe("Inner Page", () => {
  it("renders inner page", () => {
    render(<Product />);
    const main = screen.getByRole("main");
    expect(main).toBeInTheDocument();
  });
});
