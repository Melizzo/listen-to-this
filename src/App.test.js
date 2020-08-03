import React from 'react'
import ReactDOM from 'react-dom'
import { MemoryRouter } from 'react-router-dom'
import { render, fireEvent, waitFor } from '@testing-library/react'
export const getSearchedPodcasts = (searchValue) => {
import { getSearchedPodcasts, getPodcastDetails } from './ApiCalls.js'
jest.mock('./ApiCalls.js')

describe('App, () => {
  beforeEach(() => {
    mocked()
  })
  it('should render the correct content', () => {})
})
