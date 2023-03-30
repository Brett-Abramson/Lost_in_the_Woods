import {useState} from 'react'

const Edit = (props) => {

  const [cat, setCat] = useState({...props.cat})
  const [editCat, setEditCat] = useState(false);

  const handleChange = (event) => {
    setCat({...cat, [event.target.name]: event.target.value})
   }
   const handleSubmit = (event) => {
      event.preventDefault()
      props.handleEdit(cat)
   }

   const toggleAdd = () => {
    setEditCat(!editCat)
}

  return(
    <>
    <button onClick={toggleAdd}>add comment</button>
    {addComment && (
      <div className="modal">
        <div onClick={toggleAdd} className="overlay"></div>
        <div className="modal-content">
          <h1>Add a comment</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" placeholder={props.hikes.comments.name} onChange={handleChange} />

            <label htmlFor="duration">Duration</label>
            <input type="" name="duration" placeholder={props.hikes.comments.duration} onChange={handleChange} />

            <label htmlFor="weather">What was the weather like? </label>
            <input type="" name="weather" onChange={handleChange} />


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
