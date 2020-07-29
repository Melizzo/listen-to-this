import React, { useState } from 'react'

const AllPodcastsPage = (props) => {
  const [givenPodcasts, setGivenPodcast] = useState

  const podcastCards = Object.values(givenPodcasts).map((podcast) => {
    return (
      <PodcastDetailsCard 
        // props.title
        // props.img
        // props.description
      />
    )
  })
  

  return (
    <section className="All-podcasts-container">
      {/* add in error via props */}
      {!props.error && podcastCards}
      {!props.error && !podcastCards && <h3 className="no-searched-podcasts">Search for a podcast above! Enter in a topic that interests you.</h3>}
    </section>
  )

}


export default AllPodcastsPage
