// import ".../App.css";

const Hike = (props) => {
  return (
    <div className="show-page">
      <div className="header">
        <img src={props.hikes.image} alt="hikes" />
        <h1>{props.hikes.name}</h1>
        <h4>{props.hikes.location}</h4>
        <h4>{props.hikes.difficulty}</h4>
      </div>

      <div className="flex-container-row">
        <div className="right-side-page-info">
          <h3>Parking Details</h3>
          <p>{props.hikes.parking}</p>
          {/* need to get the other hikess to render here */}
        </div>

        <div className="left-side-page-info">
          <div className="basic-info">
            <p>Distance {props.hikes.distance}</p>
            <p>Elevation gain {props.hikes.elevationGain}</p>
            <p>Duration {props.hikes.duration}</p>
          </div>

          <div className="tags">
            <p>{props.hikes.tags}</p>
            {/* need to figure out how to get the indivual tags to render like buttons. something about mapping through and array until the end? */}
          </div>

          <div className="decription">
            <h3>Description</h3>
            <p>{props.hikes.description}</p>
          </div>

          <div className="map">{/* spot holder for the map integration */}</div>

          <div className="comment-section">
            {/* make this a column */}
            {/* need to add something that maps through the array of comments and prints them all out */}
            <div className="comment-header">
                {/* make this a row */}
              <img src={props.hikes.comments.name} alt="commenter"></img>
              <div className="name-and-info">
                {/* make this a column */}
                <h3>{props.hikes.comments.name}</h3>
                <div className="info">
                    {/* make this a row */}
                  <p>{props.hikes.comments.duration}</p>
                  <p>{props.hikes.comments.weather}</p>
                </div>
              </div>
            </div>
            <div className="commenters-comment-photos-delete-and-edit">
                {/* make this a column */}
                <div className="commenters-comment">
                    <p>{props.hikes.comments.commentSection}</p>
                </div>
            <div className="commenters-photos">
                {/* write soemthing to loop through and show all of the photos */}
                <img src={props.hikes.comments.photo} alt="hike"></img>
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
export default Hike;