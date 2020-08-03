import React from 'react'
import ReactDOM from 'react-dom'
import { MemoryRouter } from 'react-router-dom'
import { render, fireEvent, waitFor } from '@testing-library/react'
import { getSearchedPodcasts, getPodcastDetails } from './ApiCalls.js'
import TestSearchAll from './testResponses/TestAPISearchVegan'
import TestSearchedPodcast from './testResponses/TestPodcastDetails.js'
jest.mock('./ApiCalls.js')

describe('App', () => {
  beforeEach(() => {
    mocked(getSearchedPodcasts).mockImplementation(() =>
      Promise.resolve([
        {
          TestSearchAll
        }
      ])
    )
    
    mocked(testPodcastDetails).mockImplementation(() => 
      Promise.resolve([
        {
          TestSearchedPodcast
        }
      ])  
    )
  })

  it('should render the correct content', () => {})
})
