import {useState} from "react"
import axios from "axios"

import Camp from "./camp"
import AddCamp from "./add"


const ShowCamp = (props) => {
//=== CAMPING ===
  const [camps, setCamps] = useState([])
  
  
  const getCamps = () => {
    axios.get("http://localhost:3000/camping")
    .then((response) => setCamps(response.data), 
    (err) => console.log(err))
    .catch((error) => console.log(error))
    }
  
    const handleCreateCamp = (data) => {
      axios.post("http://localhost:3000/camping", data).then((response) => {
        console.log(response);
        let newCamps = [...camps, response.data]
        setCamps(newCamps)
      })
    }
  const handleDeleteCamp = (deletedCamp) => {
    axios.delete("http://localhost:3000/camping/" + deletedCamp._id)
    .then((response) => {
      let newCamps = camps.filter((camp) => {
        return camp._id !== deletedCamp._id
      })
      setCamps(newCamps)
    })
  }
  const handleEditCamp = (data) => {
    axios.put("http://localhost:3000/camping/" + data._id, data)
    .then((response) => {
      console.log(response)
      let newCamp = camps.map((camp) => {
        return camp._id !== data._id ? camp : data
      })
      setCamps(newCamp)
    })
  }

  return(
    <>
     {<button onClick={getCamps}>Testing</button>}
     <Camp  />
     <AddCamp handleCreate={handleCreateCamp} />
    </>
  )
}

export default ShowCamp;