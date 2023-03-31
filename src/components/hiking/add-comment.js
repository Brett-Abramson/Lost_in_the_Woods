import { useState } from "react";

const AddHikeComment = (props) => {
  const [addComment, setAddComment] = useState(false);
const [weather, setWeather]=useState()

  const [comment, setComment] = useState({

  });

  //this is for the modal
  const toggleAdd = () => {
    setAddComment(!addComment);
  };


  ///this is for the buttons
  const handleChange = (event) => {
    setComment({ ...comment, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleCreateHikeComment(comment);
  };

  return (
    <>
      <button onClick={toggleAdd}>Add comment</button>
      {addComment && (
        <div className="modal">
          <div onClick={toggleAdd} className="overlay"></div>
          <div className="modal-content">
            <h1>Add a comment</h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name: </label>
              <input type="text" name="name" placeholder="Your name goes here" onChange={handleChange} />

              <label htmlFor="duration">Duration</label>
              <input type="" name="duration" placeholder="How long was your hike in minutes?" onChange={handleChange} />

              <label htmlFor="weather">What was the weather like? </label>
                <input type="radio" name="weather" value="sunny" onChange={e=>setWeather(e.target.value)}></input>
                <input type="radio" name="weather" value="muddy" onChange={e=>setWeather(e.target.value)}></input>
                <input type="radio" name="weather" value="cloudy" onChange={e=>setWeather(e.target.value)}></input>
                <input type="radio" name="weather" value="windy" onChange={e=>setWeather(e.target.value)}></input>
                <input type="radio" name="weather" value="humid" onChange={e=>setWeather(e.target.value)}></input>
                <input type="radio" name="weather" value="snowy" onChange={e=>setWeather(e.target.value)}></input>

              <label htmlFor="commentSection">Comments </label>
              <textarea rows="4" cols="50" name="commentSection" placeholder="What was the hike like? What should other hikers know about the trail?" onChange={handleChange}>
                </textarea>
{/* add radios with the booleans here */}

              <label htmlFor="photo">Photo: </label>
              <input type="text" name="photo" onChange={handleChange} />
              {/* do I want to set up drag and drop here? */}

              <input type="submit" />
            </form>
            <button className="close-modal" onClick={toggleAdd}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AddHikeComment;
