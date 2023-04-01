// import ".../App.css";
import axios from "axios"
import {useState} from "react"

import AddHikeComment from "./add-comment"


const Hike = (props) => {
  const [hikeComment, setHikeComment] = useState([])

  const handleCreateHikeComment = (data) => {
    axios.put("http://localhost:3000/hiking/" + data._id, data)
    .then((response) => {
      console.log(response);
      let newHikeComment = hikeComment.map((hike) => {
        return hike._id !== data._id ? hike : data
      })
      setHikeComment(newHikeComment)
    })
  }

  return (
    // <>
    //   {props.hikes.name}
    // </>

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
          <div>
            <div className="edit-Hike">
            </div>
          </div>
          <AddHikeComment handleCreateHikeComment={handleCreateHikeComment} handleEditHike={props.handleEdit}  />
{/* {props.hikeComment((sub) =>
<> */}
          {/* <div className="comment-section"> */}
            {/* make this a column */}
            {/* need to add something that maps through the array of comments and prints them all out */}
            {/* <div className="comment-header"> */}
                {/* make this a row */}
              {/* <img src={sub.comments.name} alt="commenter"></img>
              <div className="name-and-info"> */}
                {/* make this a column */}
                {/* <h3>{sub.comments.name}</h3> */}
                {/* <div className="info"> */}
                    {/* make this a row */}
                  {/* <p>{sub.comments.duration}</p> */}
                  {/* <p>{sub.comments.weather}</p> */}
                {/* </div> */}
              {/* </div> */}
            {/* </div> */}
            {/* <div className="commenters-comment-photos-delete-and-edit"> */}
                {/* make this a column */}
                {/* <div className="commenters-comment"> */}
                    {/* <p>{sub.comments.commentSection}</p> */}
                {/* </div> */}
            {/* <div className="commenters-photos"> */}
                {/* write soemthing to loop through and show all of the photos */}
                {/* <img src={sub.comments.photo} alt="hike"></img> */}
            {/* </div> */}
            {/* <div className="commenters-delete-and-edit"> */}
                {/* make this a row */}
                {/* <img></img> */}
                {/* <img></img> */}
                {/* <p>get the rescrouses for the date tag</p> */}
            {/* </div> */}
            {/* </div> */}
          {/* </div> */}               
{/* </>
)} */}

        </div>
      </div>
    </div>
  );
};
export default Hike;
