import React from 'react'
import PodcastDetails from './PodcastDetails'
import "@testing-library/jest-dom"
import {render, waitFor, FireEvent } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
jest.mock("../ApiCalls.js")

describe("PodcastCard", ()  => {
  
  it("should have details on the page", => {
    const { getByText } = render(
      <MemoryRouter>
        <PodcastCard 
          id={1}
          title="New Title"
          description="This is an excellent description"
          

        
        />
      </MemoryRouter>
    )

    
  })
})