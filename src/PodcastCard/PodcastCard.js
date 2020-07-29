import React from "react";

const Podcast = (props) => {
  return (
    <section className="podcast-card">
      <h3 className="card-title">{props.title}</h3>
      <img 
        className="PC-img" 
        src={props.img} 
        description="props.description" 
      />
    </section>
  );
};

export default PodcastCard;
