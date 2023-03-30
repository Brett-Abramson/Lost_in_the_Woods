import './App.css';
import {useState, useEffect} from "react"
// import PORT from ".../project_3_backend/server.js"
import axios from "axios"
import Camp from "./components/camping/camp"
import Hike from "./components/hiking/show"
import Home from"./components/home"

const App = () => {
  //  === CAMPING ===
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
      setHikes(newCamps)
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

  /// === HIKING  ===
  const [hikes, setHikes] = useState([])

  const getHikes = () => {
    axios.get("http://localhost:3000/hiking")
    .then((response) => setHikes(response.data), 
    (err) => console.log(err))
    .catch((error) => console.log(error))
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
    getCamps();
    getHikes();
  }, [])
  
const testing = () =>{
  getHikes()


}

  return (
    <>
      <>
        <Home />
      </>
      {<button onClick={getCamps}>Testing</button>
      {camps.map((camp) => {
        return (
          <>
          <Camp camp={camp} />
          </>
        )
      })}
      {hikes.map((hikes) => {
        return (
          <>
            <Hike hikes={hikes} />
          </>
        )
      })}}
    </>
  )
}


export default App;
