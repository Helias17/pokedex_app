import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { MenuButton } from "./MenuButton";
import { iconHome, iconHomeHover } from "../../assets/images";

describe("Menu button", () => {
  test("renders button label", () => {
    render(
      <MenuButton
        label="Home"
        iconUrl={iconHome}
        iconHoverUrl={iconHomeHover}
        link="/"
        size={25}
      />,
      { wrapper: BrowserRouter }
    );

    expect(screen.getByText("Home")).toBeInTheDocument();
  });

  test("renders button icon", () => {
    render(
      <MenuButton
        label="Home"
        iconUrl={iconHome}
        iconHoverUrl={iconHomeHover}
        link="/"
        size={25}
      />,
      { wrapper: BrowserRouter }
    );

    const iconsArr = screen.getAllByRole("img");
    expect(iconsArr[0]).toHaveAttribute("src", iconHomeHover);
    expect(iconsArr[1]).toHaveAttribute("src", iconHome);
  });

  test("renders icon size (width, height)", () => {
    render(
      <MenuButton
        label="Home"
        iconUrl={iconHome}
        iconHoverUrl={iconHomeHover}
        link="/"
        size={25}
      />,
      { wrapper: BrowserRouter }
    );

    const iconsArr = screen.getAllByRole("img");
    expect(iconsArr[0]).toHaveAttribute("width", "25");
    expect(iconsArr[0]).toHaveAttribute("height", "25");
    expect(iconsArr[1]).toHaveAttribute("width", "25");
    expect(iconsArr[1]).toHaveAttribute("height", "25");
  });

  test("renders button link", () => {
    render(
      <MenuButton
        label="Home"
        iconUrl={iconHome}
        iconHoverUrl={iconHomeHover}
        link="/"
        size={25}
      />,
      { wrapper: BrowserRouter }
    );

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/");
  });
});
