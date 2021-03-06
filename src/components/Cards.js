import React from "react";
import "../App.css";


const styles = {
  
  cardStyle: {
    width: "18rem",
    border: "primary"
    
  },
};

export default function Cards(props) {
  return (
    <div className="row gap-3 col align-self-center">
      {props.projects.map((item) => (
        <div className="card mx-1 ps-0 pe-0" style={styles.cardStyle} key={item.id}>
          <img className="card-img-top" src={item.image} alt="Card" />
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{item.subtitle}</h6>
            <p className="card-text">{item.description}</p>
          </div>
          <div className="card-footer">
            <a href={item.deployedLink} className="card-link">
              Deployed
            </a>
            <a href={item.repoLink} className="card-link">
              GitHub Repo
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
