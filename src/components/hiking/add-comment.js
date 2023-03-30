import { useState } from "react";
import "./Modal.css";

const Add = (props) => {
  const [addComment, setAddComment] = useState(false);

  const [comment, setComment] = useState({

  });

  const toggleAdd = () => {
    setAddComment(!addComment);
  };
  const handleChange = (event) => {
    setComment({ ...comment, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleCreate(cat);
  };

  return (
    <>
      <button onClick={toggleAdd}>add comment</button>
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
              <input type="" name="weather" onChange={handleChange} />


              <label htmlFor="commentSection">Comments </label>
              <input type="" name="commentSection" onChange={handleChange} />
{/* add radios with the booleans here */}

              <label htmlFor="photo">Photo: </label>
              <input type="text" name="photo" onChange={handleChange} />

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

export default Add;
