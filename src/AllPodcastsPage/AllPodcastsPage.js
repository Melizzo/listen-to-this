import React, { useState, useEffect } from 'react'
import PodcastCard from '../PodcastCard/PodcastCard'
import './AllPodcastsPage.css'


const AllPodcastsPage = ({searchedResults, error}) => {
  const [givenPodcasts, setGivenPodcasts] = useState([])

  useEffect(() => {setGivenPodcasts(searchedResults)}, [])

  let podcastCards
 if (givenPodcasts) {
    podcastCards = searchedResults.map((podcast) => { 
    return (
      <PodcastCard 
        id={podcast.id}
        key={podcast.id}
        podcastTitle={podcast.podcast.title_original}
        episodeTitle={podcast.title_original}
        image={podcast.thumbnail}
        description={podcast.description_highlighted}
      />
    )
  })
}

  return (
    <section className="all-podcasts-container">
      {/* add in error via props 
      	{props.error && 
				<div className='error-msg'>404: No Podcasts found</div>
			}
      */}
      {/* add in error via props */}
      {!error && podcastCards}
      {!error && !podcastCards && <h3 className="no-searched-podcasts">Search for a podcast above! Enter in a topic that interests you.</h3>}
    </section>
  )
}


export default AllPodcastsPage
