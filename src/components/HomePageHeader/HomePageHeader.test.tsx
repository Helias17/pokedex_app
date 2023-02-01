import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { HomePageHeader } from "../HomePageHeader";

describe("Homepage header", () => {
  test("Homepage header to match snapshop", () => {
    const { asFragment } = render(<HomePageHeader />);

    expect(asFragment()).toMatchSnapshot();
  });
});
