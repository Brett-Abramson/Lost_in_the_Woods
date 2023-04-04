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

              <label htmlFor="commentSection">Comments </label>
              <input type="" name="commentSection" placeholder="What was the hike like? What should other hikers know about the trail?" onChange={handleChange} />
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

export default Add;
