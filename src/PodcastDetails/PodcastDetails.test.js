import React from 'react'
import PodcastDetails from './PodcastDetails'
import "@testing-library/jest-dom"
import {render, FireEvent } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { getPodcastDetails } from '../ApiCalls'
jest.mock("../ApiCalls.js")
    
describe("PodcastDetails", ()  => {
  beforeEach(() => {
    mock(getPodcastDetails(id) =>{
      
    }
      selectedPodcast : {
      id: "1"
      title: "New Title"
      image: "https://cdn-images-1.listennotes.com/podcasts/the-darkest-timeline-with-ken-jeong-joel-1aeSO9y7MNk-VALadJBvq98.300x300.jpg"
      description: "This is an awesome description"
      website: "http://darkesttimelinepodcast.libsyn.com/website?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website"
      episodes: [{ 
          title: "Episode 25 - ALISON BRIE LIVE!"
        }, 
        {
          title: "Episode 24 - Same-Sex Celebrity Crush - NATHAN FILLION"
        } 
      ]
    }
  })
  
  it("should display Podcast details on the page", () => {
    const { getByText } = render(
      <MemoryRouter>
        <PodcastDetails
          selectedPodcast={selectedPodcast}
        />
      </MemoryRouter>
    )

    const podcastTitle = getByText("New Title");
    // const description = getByText("This is an awesome description");
    // const episodeTitle = getByText("Episode 25 - ALISON BRIE LIVE!");

    expect(podcastTitle).toBeInTheDocument();
    // expect(description).toBeInTheDocument();
    // expect(episodeTitle).toBeInTheDocument();
    
  })
})