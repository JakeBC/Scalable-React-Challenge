import { render, screen } from "@testing-library/react";
import ChartGrid from "./ChartGrid";
import { ReactNode } from "react";

jest.mock("recharts", () => {
  const originalModule = jest.requireActual("recharts");
  return {
    ...originalModule,
    ResponsiveContainer: ({ children }: { children: ReactNode }) => (
      <div>{children}</div>
    ),
  };
});

describe("ChartGrid", () => {
  test("displays the expected charts", () => {
    render(<ChartGrid />);
    expect(
      screen.getByRole("heading", { name: "sightings by year" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "sightings by ufo shape" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "sightings by country" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "sightings per month" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "sighting locations" })
    ).toBeInTheDocument();
  });
});
