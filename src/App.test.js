import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { mock } from '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'
import { render, fireEvent, waitFor } from '@testing-library/react'
import { getSearchedPodcasts, getPodcastDetails } from './ApiCalls.js'
import TestSearchAll from './testResponses/TestAPISearchVegan'
import TestSearchedPodcast from './testResponses/TestPodcastDetails.js'
jest.mock('./ApiCalls.js')
import MutationObserver from '@sheerun/mutationobserver-shim'
window.MutationObserver = MutationObserver

describe('App', () => {
  beforeEach(() => {
    getSearchedPodcasts.mockImplementation(() =>
      Promise.resolve([
        {
          TestSearchAll
        }
      ])
    )
    
    getPodcastDetails.mockImplementation(() => 
      Promise.resolve([
        {
          TestSearchedPodcast
        }
      ])  
    )
  })

  it('be able to search for podcasts and display results', async () => {
    const { getByText } = render(
      <MemoryRouter><App /></MemoryRouter>
    )

    await waitFor(() => expect(getSearchedPodcasts).toHaveBeenCalled())
  })
})
