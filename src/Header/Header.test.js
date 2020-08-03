import React from "react";
import Header from "./Header";
import "@testing-library/jest-dom";
import { render, fireEvent, getAllByPlaceholderText } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { getSearchedPodcasts } from "../ApiCalls";
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
    const button = getByText("Search");
    const favPodcastButton = getByText("View Saved Podcasts");

    expect(title).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(favPodcastButton).toBeInTheDocument();
  });

  it('should allow a user to input a search keyword', () => {
    const { getByPlaceholderText } = render(
      <MemoryRouter>
        <Header  />
      </MemoryRouter>
    )

    const searchInput = getByPlaceholderText('search for a podcast')
    fireEvent.change(searchInput, {target: {value: 'cats'}});
    expect(searchInput).toHaveValue('cats')
  })

  // it("should click submit button", () => {
  //   const mockFind = jest.fn();
  //   const { getByText } = render(
  //     <MemoryRouter>
  //       <Header findResults={mockFind} />
  //     </MemoryRouter>
  //   );
  //   const button = getByText("Search");

  //   fireEvent.click(button);

  //   expect(mockFind).toBeCalled();
  // });

  // it("should click favorite podcast button", () => {
  //   const mockFind = jest.fn();
  //   const { getByText, getByLabelText } = render(
  //     <MemoryRouter>
  //       <Header findResults={mockFind} />
  //     </MemoryRouter>
  //   );
  //   const button = getByText("Search");

  //   fireEvent.click(button);

  //   expect(mockFind).toBeCalled();
  // });

});
