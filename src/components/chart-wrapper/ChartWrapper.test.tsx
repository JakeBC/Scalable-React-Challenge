import { ReactNode } from "react";
import { render, screen } from "@testing-library/react";
import ChartWrapper from "./ChartWrapper";

jest.mock("recharts", () => {
  const originalModule = jest.requireActual("recharts");
  return {
    ...originalModule,
    ResponsiveContainer: ({ children }: { children: ReactNode }) => (
      <div>{children}</div>
    ),
  };
});

describe("ChartWrapper", () => {
  test("displays an h2 heading", () => {
    render(
      <ChartWrapper name="sup?">
        <p>nothing</p>
      </ChartWrapper>
    );
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("sup?");
    expect(screen.getByText("nothing")).toBeInTheDocument();
  });
});
