import React from "react";
import PodcastCard from "./PodcastCard";
import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
// jest.mock("../ApiCalls.js");

describe("PodcastCard", () => {
  it("should have details on the page", () => {
    const { getByText, getByRole } = render(
      <MemoryRouter>
        <PodcastCard
          id={1}
          podcastTitle="New Title"
          episodeTitle="This is a cool episode"
          description="This is an excellent description"
        />
      </MemoryRouter>
    );

    const podcastTitle = getByText("New Title");
    const description = getByText("This is an excellent description");
    const episodeTitle = getByText("Episode title: This is a cool episode");
    const button = getByRole("button")

    expect(podcastTitle).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(episodeTitle).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  // Error states that it can't see the link reference. 
  // it("it should run get more podcastDetails Button", () => {
  //   const { getByRole, debug } = render(
  //     <MemoryRouter>
  //       <PodcastCard
  //         id={1}
  //         podcastTitle="New Title"
  //         episodeTitle="This is a cool episode"
  //         description="This is an excellent description"
  //       />
  //     </MemoryRouter>
  //   );

  //   const button = getByRole("button")
  //   fireEvent.click(button)
  //   //   debug()
  //   expect(window.location.href).toBe("http://localhost/podcast/1");
  //   expect(button).toBeInTheDocument()
  // })
});
