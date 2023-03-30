import './App.css';
import {useState, useEffect} from "react"
// import PORT from ".../project_3_backend/server.js"
import axios from "axios"
import Camp from "./components/camping/camp"
import Home from"./components/home"

const App = () => {
  //  === CAMPING ===
  const [camps, setCamps] = useState([])
  
  
  const getCamps = () => {
    axios.get("http://localhost:3000/camping")
    .then((response) => setCamps(response.data), (err) => console.oog(err))
    .catch((error) => console.log(error))
    }
  
  const handleCreateCamp = (data) => {
    axios.post("http://localhost:3000/camping", data).then((response) => {
      console.log(response);
      let newCamps = [...camps, response.data]
      setCamps(newCamps)
    })
  }
  

  /// === HIKING  ===
  const [hikes, setHikes] = useState([])

  const getHikes = () => {
    // axios.get(PORT + "/camping")
    axios.get("http://localhost:3000/hiking")
    .then((response) => {
      setCamps(response.data)
      })
    }
  
  const handleCreateHike = (data) => {
    axios.post("http://localhost:3000/hiking", data).then((response) => {
      console.log(response);
      let newHikes = [...hikes, response.data]
      setCamps(newHikes)
    })
  }
  const handleDeleteHike = (deletedHike) => {
    axios.delete("http://localhost:3000/hiking/" + deletedHike._id)
    .then((response) => {
      let newHikes = hikes.filter((hike) => {
        return hike._id !== deletedHike._id
      })
      setHikes(newHikes)
    })
  }
  const handleEditHike = (data) => {
    axios.put("http://localhost:3000/hiking/" + data._id, data)
    .then((response) => {
      console.log(response)
      let newHike = hikes.map((hike) => {
        return hike._id !== data._id ? hike : data
      })
      setHikes(newHike)
    })
  }
  

  useEffect(() => {
    getCamps()
  }, [])
  
  return (
    <>
      <Home />
      <button onClick={getCamps}>Testing</button>
      {camps.map((camp) => {
        return (
          <Camp camp={camp} />
        )
      })}
    </>
  )
}


export default App;
