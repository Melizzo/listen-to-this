import React from "react";
import { Link } from 'react-router-dom'
import './PodcastCard.css'

const PodcastCard = (props) => {
  return (
    <section className="podcast-card">
      <h3 className="card-title">{props.podcastTitle}</h3>
      <img 
        alt="Podcast logo"
        className="PC-img" 
        src={props.image} 
        description={'image of podcast'} 
      />
      <p className="card-text">Episode title: {props.episodeTitle}</p>
      <p className="card-text">{props.description}</p>
      <Link to={`/podcast/${props.id}`}>
        <button className="pc-button" title={props.podcastTitle} aria-label='details-button' role
        ='button'> 
          More information about this Podcast
        </button>
      </Link>
    </section>
  );
};

export default PodcastCard;
