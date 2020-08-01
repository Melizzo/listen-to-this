import React, { useState, useEffect } from "react";
import { getPodcastDetails } from "../ApiCalls"
import './PodcastDetails.css'

const PodcastDetails = ({ id }) => {
  const [selectedPodcast, getSelectedPodcast] = useState('');


  useEffect(() => {
    async function fetchData() {
      const response = await getPodcastDetails(id);
      getSelectedPodcast(response);
    }
    fetchData();
  }, [id]);

  let podcastEpisodes 
  if(selectedPodcast) {
     podcastEpisodes = selectedPodcast.episodes.map((item, i)=>{
       return <li key={i}>{item.title}</li>
     })
    console.log(podcastEpisodes);
  }

  return (
    <section className="podcast-details-wrapper">
      <section className="podcast-details-card">
        <h3 className="pc-title" >{selectedPodcast.title}</h3>
        <img
          className="PC-img"
          src={selectedPodcast.image}
          description={"image of podcast"}
        />
        <p className="pc-p">{selectedPodcast.description}</p>
        <a className="pc-at" href={selectedPodcast.website}target='_blank' rel="noopener noreferrer">Podcast website</a>
        <p></p>
          <section className="episode-container">
              <ul>
                {podcastEpisodes}
              </ul> 
          </section>
      </section>
    </section>
  );
};

export default PodcastDetails;
