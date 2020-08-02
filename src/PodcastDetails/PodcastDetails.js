import React, { useState, useEffect } from "react";
import { getPodcastDetails } from "../ApiCalls";
import "./PodcastDetails.css";

const PodcastDetails = ({
  id,
  favoritePodcasts,
  setFavoritePodcasts,
  toggleFavoritePodcast,
  isFavorite,
  setIsFavorite
}) => {
  const [selectedPodcast, getSelectedPodcast] = useState("");
  // const [isFavorite, setIsFavorite] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await getPodcastDetails(id);
      getSelectedPodcast(response);
    }
    fetchData();
  }, [id]);

  let podcastEpisodes;
  if (selectedPodcast) {
    podcastEpisodes = selectedPodcast.episodes.map((item, i) => {
      return <li key={i}>{item.title}</li>;
    });
  }

  let podcast;
  let newArray;
  const clickHandler = async () => {
    if (toggleFavoritePodcast(selectedPodcast.id)) {
      newArray = favoritePodcasts.filter(p => p.podcast.id !== selectedPodcast.id);
      await setFavoritePodcasts([...newArray]);
      console.log('PodcastDetails favoritePodcasts:', favoritePodcasts);
      setIsFavorite(false);
    } else {
      podcast = {
        title_original: selectedPodcast.episodes[0].title,
        thumbnail: selectedPodcast.image,
        description_highlighted: selectedPodcast.description,
        podcast: {
          id: selectedPodcast.id,
          title_original: selectedPodcast.title,
        },
      };
      setIsFavorite(true);
      await setFavoritePodcasts([...favoritePodcasts, podcast]);
    }

  };

  return (
    <section className="podcast-details-wrapper">
      <section className="podcast-details-card">
        <h3 className="pc-title">{selectedPodcast.title}</h3>
        <img
          className="PC-img"
          src={selectedPodcast.image}
          description={"image of podcast"}
        />
        <p className="pc-p">{selectedPodcast.description}</p>
        <a
          className="pc-at"
          href={selectedPodcast.website}
          target="_blank"
          rel="noopener noreferrer"
        >
          Podcast website
        </a>
        <section className="button-container">
          {isFavorite == '' || false ? (
            <button role="button" onClick={() => clickHandler()}>
              Listen to this podcast later
            </button>
          ) : (
            <button role="button" onClick={() => clickHandler()}>
              remove Podcast from listen to later list
            </button>
          )}
        </section>
        <p></p>
        <section className="episode-container">
          <ul>{podcastEpisodes}</ul>
        </section>
      </section>
    </section>
  );
};

export default PodcastDetails;
