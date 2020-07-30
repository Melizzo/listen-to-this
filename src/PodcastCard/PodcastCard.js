import React from "react";

const PodcastCard = (props) => {
  console.log(props)
  return (
    <section className="podcast-card">
      <h3 className="card-title">{props.podcastTitle}</h3>
      <img 
        className="PC-img" 
        src={props.image} 
        description={'image of podcast'} 
      />
      <p className="card-text">'Episode title:'{props.episodeTitle}</p>
      <p className="card-text">{props.description}</p>
      {/* Future link to details page of podcast */}
      {/* <Link to={`/podcast/${props.id}`}> */}
        <button className="pc-button" aria-label='details-button'>
          More information about this Podcast
        </button>
      {/* </Link> */}
    </section>
  );
};

export default PodcastCard;
