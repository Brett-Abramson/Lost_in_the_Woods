import { useState } from "react";

const AddHikeComment = (props) => {
  const [addComment, setAddComment] = useState(false);
  // const [weather, setWeather]=useState()
  const [hike, setHike] = useState({...props.hike})
  const [comments, setComment] = useState({
      photo: "",
      name: "",
      duration: "",
      weather: "",
      commentSection: ""
  });

  //this is for the modal
  const toggleAdd = () => {
    setAddComment(!addComment);
  };
  

  ///this is for the buttons
  // const handleCommentChange = (event) => {
  //   setComment({ 
  //     ...comments, 
  //     [event.target.name]: event.target.value });
  // };

  // const handlePhotoChange = (event) => {
  //   setComment({
  //     ...comments,
  //     comments: { ...props.hikes.comments, photo: event.target.value},
  //   });
  // };

  // const handleNameChange = (event) => {
  //   setComment({...comments, [event.target.name] : event.target.value})
  // }
  const handleChange = (event) => {
    setComment({...comments, [event.target.name] : event.target.value})
  }
  // const handleWeatherChange = (event) => {
  //   setComment({
  //     ...comments,
  //     comments: { ...props.hikes.comments, weather: event.target.value},
  //   });
  // };

  // const handleDurationChange = (event) => {
  //   setComment({
  //     ...comments,
  //     comments: { ...props.hikes.comments, name: event.target.value},
  //   });
  // };

  // const handleCommentSectionChange = (event) => {
  //   setComment({
  //     ...comments,
  //     comments: { ...props.hikes.comments, commentSection: event.target.value},
  //   });
  // };


  const handleCommentSubmit = (event) => {
    event.preventDefault();
    setHike(hike.comment.push(comments))
    props.handleEditHike(hike);
    console.log(comments)
    // console.log(event)
    
  };

  return (
    <>
      <button onClick={toggleAdd}>Add comment</button>
      {addComment && (
        <div className="modal">
          <div onClick={toggleAdd} className="overlay"></div>
          <div className="modal-content">
          <button className="close-modal" onClick={toggleAdd}>
              CLOSE
            </button>
            <h1>Add a comment</h1>
            <form onSubmit={handleCommentSubmit}>
              <label htmlFor="name">Name: </label>
              <input type="text" name="name" placeholder="Your name goes here" onChange={handleChange} />

              <label htmlFor="duration">Duration</label>
              <input type="" name="duration" placeholder="How long was your hike in minutes?" onChange={handleChange} />

              {/* <label htmlFor="weather">What was the weather like? </label>
                <input type="radio" name="weather" value="sunny" onChange={e=>setWeather(e.target.value)}/><p>Sunny</p>
                <input type="radio" name="weather" value="muddy" onChange={e=>setWeather(e.target.value)}/><p>Muddy</p>
                <input type="radio" name="weather" value="cloudy" onChange={e=>setWeather(e.target.value)}/><p>Cloudy</p>
                <input type="radio" name="weather" value="windy" onChange={e=>setWeather(e.target.value)}/><p>Windy</p>
                <input type="radio" name="weather" value="humid" onChange={e=>setWeather(e.target.value)}/><p>Humid</p>
                <input type="radio" name="weather" value="snowy" onChange={e=>setWeather(e.target.value)}/><p>Snowy</p> */}

              <label htmlFor="commentSection">Comments </label>
              <textarea rows="4" cols="50" name="commentSection" placeholder="What was the hike like? What should other hikers know about the trail?" onChange={handleChange}>
                </textarea>
{/* add radios with the booleans here */}

              <label htmlFor="photo">Photo: </label>
              <input type="text" name="photo" />
              {/* do I want to set up drag and drop here? */}

              <input type="submit" />
            </form>
          </div>
        </div>
      )}
    </>
  );
};



export default AddHikeComment;

