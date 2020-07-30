import React, { useState, useEffect } from "react";
import { getPodcastDetails } from "../ApiCalls";


const PodcastDetails = ({ id }) => {
  const [selectedPodcast, getSelectedPodcast] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await getPodcastDetails(id);
      console.log('response', response);
      getSelectedPodcast(response);
    }
    fetchData();
  }, [id]);

  const podcastEpisodes = () => {}
  //

  return (
    <section className="podcast-details-wrapper">
      <section className="podcast-details-card">
        <h3>{selectedPodcast.title}</h3>
        <img 
        className="PC-img" 
        src={props.image} 
        description={'image of podcast'} 
      />

        <section className="pc-episodes">
          <p>></p>
        </section>
      </section>
    </section>
  );
};

export default PodcastDetails;
