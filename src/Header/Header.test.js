import React from "react";
import Header from "./Header";
import "@testing-library/jest-dom";
import {
  render,
  waitFor,
  fireEvent,
  getByLabelText,
  getByAltText,
} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { getPodcastDetails } from "../ApiCalls";
jest.mock("../ApiCalls.js");

describe("Header", () => {
  it("should render the correct content", () => {
    const { getByText, getByLabelText } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const title = getByText("Listen To This!");
    const input = getByLabelText("search");
    const button = getByText('Search');
    const favPodcastButton = getByText('View Saved Podcasts')

    expect(title).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(favPodcastButton).toBeInTheDocument();
  });

  
});
