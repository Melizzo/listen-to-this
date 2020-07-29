import React from "react";
import { Link } from "react-router-dom";
import "./RandomPodcast.css";

const RandomPodcast = (props) => {
  return (
    <section className="random-podcast-section">
      <p className="RP-title">Give a listen to this Random Podcast</p>
      {/* future error handling
    {props.error && <div className='error-msg'>404: No Podcast found</div>}
    */}
      {!props.error && (
        <section className="random-podcast">
          <h3>{props.strDrink}</h3>
          <h3 className="card-title">{props.title}</h3>
          <img
            className="PC-img"
            src={props.title}
            description="props.description"
          />
          {/* <Link to={`/podcast/${props.id}`}>
        <button className="pc-button" aria-label='details-button'>
          More information about this Podcast
        </button>
      </Link> */}
        </section>
      )}
    </section>
  );
};

export default RandomPodcast;
