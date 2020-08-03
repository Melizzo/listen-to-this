import React from 'react'
import PodcastDetails from './PodcastDetails'
import "@testing-library/jest-dom"
import {render, waitFor, fireEvent, getByLabelText } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { getPodcastDetails } from '../ApiCalls'
jest.mock("../ApiCalls.js")

describe('example', () => {
  it('should render the correct content', () => {})
})