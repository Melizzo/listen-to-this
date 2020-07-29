import React from "react";

const PodcastCard = (props) => {
  return (
    <section className="podcast-card">
      <h3 className="card-title">{props.title}</h3>
      <img 
        className="PC-img" 
        src={props.randomPodcast.title} 
        description="props.description" 
      />
      {/* Future link to details page of podcast */}
      {/* <Link to={`/podcast/${props.id}`}>
        <button className="pc-button" aria-label='details-button'>
          More information about this Podcast
        </button>
      </Link> */}
    </section>
  );
};

export default PodcastCard;
