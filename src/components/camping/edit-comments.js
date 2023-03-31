import {useState} from 'react'

const Edit = (props) => {

    const [comment, setComment] = useState({...props.comment})
    const [editComment, setEditComment] = useState(false);
  
    const handleChange = (event) => {
      setComment({...comment, [event.target.name]: event.target.value})
     }
     const handleSubmit = (event) => {
        event.preventDefault()
        props.handleEdit(comment)
     }
  
     const toggleAdd = () => {
      setEditComment(!editComment)
     }

  return(
    <>
    <button onClick={toggleAdd}>Edit comment</button>
    {addComment && (
      <div className="modal">
        <div onClick={toggleAdd} className="overlay"></div>
        <div className="modal-content">
          <h1>Add a comment</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" placeholder={props.hikes.comments.name} onChange={handleChange} />

            <label htmlFor="commentSection">Comments </label>
            <input type="" name="commentSection" placeholder={props.hikes.comments.commentSection} onChange={handleChange} />
{/* add radios with the booleans here */}

            <label htmlFor="photo">Photo: </label>
            <input type="text" name="photo" placeholder={props.hikes.comments.photo}onChange={handleChange} />

            <input type="submit" />
          </form>
          <button className="close-modal" onClick={toggleAdd}>
            CLOSE
          </button>
        </div>
      </div>
    )}
  </>
  )
}
export default Edit