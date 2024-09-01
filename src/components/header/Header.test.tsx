import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "./Header";
import * as ufoData from "../../context/ufoData";

const useUfoContext = jest.spyOn(ufoData, "useUfoContext");

beforeEach(() => {
  useUfoContext.mockReturnValue(ufoData.initialContext);
});

describe("Header", () => {
  test("displays h1 heading", () => {
    render(<Header />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "ufo data"
    );
  });

  test("does NOT display a selected year when not present in state", () => {
    render(<Header />);
    expect(screen.getByRole("banner").textContent).toEqual("ufo data");
    expect(
      screen.queryByRole("button", { name: "clear " })
    ).not.toBeInTheDocument();
  });

  test("displays a selected year when one is present in state", () => {
    useUfoContext.mockReturnValue({
      ...ufoData.initialContext,
      selectedYear: 1983,
    });
    render(<Header />);
    expect(screen.getByRole("banner")).toHaveTextContent("1983");
    expect(screen.getByRole("button", { name: "clear" })).toBeInTheDocument();
  });

  test("allows a user to clear the selected year", async () => {
    const setSelectedYear = jest.fn();
    useUfoContext.mockReturnValue({
      ...ufoData.initialContext,
      selectedYear: 1983,
      setSelectedYear,
    });

    render(<Header />);
    const button = screen.getByRole("button", { name: "clear" });
    userEvent.click(button);
    expect(setSelectedYear).toHaveBeenCalledWith();
  });
});
