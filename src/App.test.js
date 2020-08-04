import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { MemoryRouter } from 'react-router-dom'
import { render, fireEvent, waitFor, getByRole } from '@testing-library/react'
import { getSearchedPodcasts, getPodcastDetails } from './ApiCalls.js'
import TestSearchAll from './testResponses/TestAPISearchVegan'
import TestSearchedPodcast from './testResponses/TestPodcastDetails.js'
jest.mock('./ApiCalls.js')
import MutationObserver from '@sheerun/mutationobserver-shim'
import PodcastCard from './PodcastCard/PodcastCard'
import { act } from 'react-dom/test-utils'
window.MutationObserver = MutationObserver

describe('App', () => {
  beforeEach(async () => {
    await getSearchedPodcasts.mockResolvedValueOnce(TestSearchAll)
    await getPodcastDetails.mockResolvedValueOnce(TestSearchedPodcast)
  })

  it('be able to search for podcasts and display results, add a favorite and return to the homepage', async () => {
    const { queryByText, getByText, getAllByText, getByTitle, getByPlaceholderText, debug, getAllByRole } = render(
      <MemoryRouter><App /></MemoryRouter>
    )
    
    const homePage = getByText('Listen To This!')
    const welcomeMessage = getByText('Search for a podcast above! Enter in a topic that interests you.')
    const button = getByText("Search");
    const searchInput = getByPlaceholderText('search for a podcast')

    fireEvent.change(searchInput, {target: {value: 'vegan'}});
    fireEvent.click(button);
    const message = await waitFor(() => getByText('Roots and All'))
    expect(message).toBeInTheDocument()
    const images = await waitFor(() => getAllByRole('img'))
    expect(images).toHaveLength(10)
    const pcButton = await waitFor(() => getAllByText('More information about this Podcast'))
    expect(pcButton).toHaveLength(10)
    const vegan = await waitFor(() => getByText('The Daily Gardener'))
    expect(vegan).toBeInTheDocument()
    const rootsButton = await waitFor(() => getByTitle('Roots and All'))
    fireEvent.click(rootsButton)
    expect(queryByText('The Daily Gardener')).not.toBeInTheDocument()
    const pcmessage = await waitFor(() => getByText('The Darkest Timeline with Ken Jeong & Joel McHale'))
    expect(pcmessage).toBeInTheDocument()
    const favbutton = await waitFor(() => getByText('Listen to this podcast later'))
    fireEvent.click(favbutton)
    const unfavbutton = await waitFor(() => getByText('remove Podcast from listen to later list'))
    fireEvent.click(homePage)
    const welcomeMessage1 = await waitFor(() => getByText('Search for a podcast above! Enter in a topic that interests you.'))
    expect(welcomeMessage1).toBeInTheDocument()
  })

  // it('should allow a user to view favorites', () => {

  // })

})
