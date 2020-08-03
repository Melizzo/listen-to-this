import React from 'react'
import AllPodcastsPage from './AllPodcastsPage'
import "@testing-library/jest-dom"
import {render, waitFor, fireEvent, getByLabelText } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { getPodcastDetails } from '../ApiCalls'
jest.mock("../ApiCalls.js")

describe('AllPodcastsPage', () => {
  it('should display a message to search for podcasts', () => {
    const mockSearch = jest.fn()
    const { getByText } = render(
      <MemoryRouter>
        <AllPodcastsPage searchedResults={mockSearch}/>
      </MemoryRouter>
    )

    const message =getByText('Search for a podcast above! Enter in a topic that interests you.')
    expect(message).toBeInTheDocument()

  })
})