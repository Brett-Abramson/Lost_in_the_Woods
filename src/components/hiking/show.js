import ".../App.css";
import { useState } from "react";
import axios from "axios";

const Hiking = (props) => {
  return (
    <div className="show-page">
      <div className="header">
        <img src={props.hike.image} alt="hike" />
        <h1>{props.hiking.name}</h1>
        <h4>{props.hiking.location}</h4>
        <h4>{props.hiking.difficulty}</h4>
      </div>

      <div className="flex-container-row">
        <div className="right-side-page-info">
          <h3>Parking Details</h3>
          <p>{props.hiking.parking}</p>
          {/* need to get the other hikes to render here */}
        </div>

        <div className="left-side-page-info">
          <div className="basic-info">
            <p>Distance {props.hiking.distance}</p>
            <p>Elevation gain {props.hiking.elevationGain}</p>
            <p>Duration {props.hiking.duration}</p>
          </div>

          <div className="tags">
            <p>{props.hiking.tags}</p>
            {/* need to figure out how to get the indivual tags to render like buttons. something about mapping through and array until the end? */}
          </div>

          <div className="decription">
            <h3>Description</h3>
            <p>{props.hiking.description}</p>
          </div>

          <div className="map">{/* spot holder for the map integration */}</div>

          <div className="comment-section">
            {/* make this a column */}
            {/* need to add something that maps through the array of comments and prints them all out */}
            <div className="comment-header">
                {/* make this a row */}
              <img src={props.hiking.comments.name} alt="commenter"></img>
              <div className="name-and-info">
                {/* make this a column */}
                <h3>{props.hiking.comments.name}</h3>
                <div className="info">
                    {/* make this a row */}
                  <p>{props.hiking.comments.duration}</p>
                  <p>{props.hiking.comments.weather}</p>
                </div>
              </div>
            </div>
            <div className="commenters-comment-photos-delete-and-edit">
                {/* make this a column */}
                <div className="commenters-comment">
                    <p>{props.hiking.comments.commentSection}</p>
                </div>
            <div className="commenters-photos">
                {/* write soemthing to loop through and show all of the photos */}
                <img src={props.hiking.comments.photo} alt="hike"></img>
            </div>
            <div className="commenters-delete-and-edit">
                {/* make this a row */}
                <img></img>
                <img></img>
                {/* <p>get the rescrouses for the date tag</p> */}
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hiking;
