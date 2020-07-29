import React, { useState } from 'react'
import PodCastCard from '../PodcastCard/PodcastCard'


const AllPodcastsPage = (props) => {
  const [givenPodcasts, setGivenPodcast] = useState([])

  // useEffect(() => {setGivenPodcast(props.givenPodcasts)})

  const podcastCards = Object.values(givenPodcasts).map((podcast) => { 
    return (
      <PodCastCard 
        // props.title
        // props.img
        // props.description
      />
    )
  })
  

  return (
    <section className="All-podcasts-container">
      {/* add in error via props 
      	{props.error && 
				<div className='error-msg'>404: No Podcasts found</div>
			}
      */}
      {/* add in error via props */}
      {!props.error && podcastCards}
      {!props.error && !podcastCards && <h3 className="no-searched-podcasts">Search for a podcast above! Enter in a topic that interests you.</h3>}
    </section>
  )
}


export default AllPodcastsPage
