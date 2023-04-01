import { useState } from "react";
import axios from "axios"

const TestAddComment = (props) => {
    const [comment, setComment] = useState({})
    const [hikes, setHikes] = useState(props.hikes)

    const handleEditHike = (data) => {
        axios.put("http://localhost:3000/hiking/" + data._id, data)
        .then((response) => {
          console.log(response)
          let newHike = props.hikes.comment.map((hike) => {
            return hike._id !== data._id ? hike : data
          })
          setHikes(newHike)
        })
      }
    const handleSubmit = (event) => {
        event.preventDefault()
        props.hikes.comment.push({comment})
        handleEditHike(props.hikes)
        // console.log(props.hikes.comment)
    }
    const handleChange = (event) => {
        setComment(event.target.value)
        console.log(comment)
    }
    const testing = () =>
        console.log(props.hikes)
    return (
        <>
            <button onClick={testing}>Testing</button>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" onChange={handleChange}/>

                <button type="submit">Add Comment</button>
            </form>
        </>

    )
}



export default TestAddComment