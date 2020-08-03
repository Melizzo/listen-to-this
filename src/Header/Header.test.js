import React from 'react'
import Header from './Header'
import PodcastDetails from './PodcastDetails'
import "@testing-library/jest-dom"
import {render, waitFor, fireEvent, getByLabelText, getByAltText } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { getPodcastDetails } from '../ApiCalls'
jest.mock("../ApiCalls.js")

describe('Header', () => {
  it('should render the correct content', () => {
    const  { getByText } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )
      const title = getByText('Listen To This!')
      expect(title).toBeInTheDocument()
  })
})