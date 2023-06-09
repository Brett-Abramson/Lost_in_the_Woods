import './App.css';
import {useState, useEffect} from "react"
// import PORT from ".../project_3_backend/server.js"
import axios from "axios"
import Camp from "./components/camping/camp"
import HikeIndex from "./components/hiking/HikeIndex"
import HikeShowPage from "./components/hiking/HikeShowPage"
import Home from"./components/home"
import AddHike from "./components/hiking/add"
import AddCamp from "./components/camping/add"
import EditHike from './components/hiking/edit';

// import { Routes, Route} from 'react-router-dom'

const App = () => {
//===hide and show====
// const [show, setShow] = useState(false);
// const [see, setSee] = useState(false);
// const [seeHome, setSeeHome] = useState(true);

  //  === CAMPING ===
  const [camps, setCamps] = useState([])
  
  
  const getCamps = () => {
    axios.get("https://damp-wildwood-97531.herokuapp.com/camping")
    .then((response) => setCamps(response.data), 
    (err) => console.log(err))
    .catch((error) => console.log(error))
    }
  
  const handleCreateCamp = (data) => {
    axios.post("https://damp-wildwood-97531.herokuapp.com/camping", data).then((response) => {
      console.log(response);
      let newCamps = [...camps, response.data]
      setCamps(newCamps)
    })
  }
  const handleDeleteCamp = (deletedCamp) => {
    axios.delete("https://damp-wildwood-97531.herokuapp.com/camping/" + deletedCamp._id)
    .then((response) => {
      let newCamps = camps.filter((camp) => {
        return camp._id !== deletedCamp._id
      })
      setCamps(newCamps)
    })
  }
  const handleEditCamp = (data) => {
    axios.put("https://damp-wildwood-97531.herokuapp.com/camping/" + data._id, data)
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
    axios.get("https://damp-wildwood-97531.herokuapp.com/hiking")
    .then((response) => setHikes(response.data), 
    (err) => console.log(err))
    .catch((error) => console.log(error))
  }
  const handleCreateHike = (data) => {
    axios.post("https://damp-wildwood-97531.herokuapp.com/hiking", data).then((response) => {
      console.log(response);
      let newHikes = [...hikes, response.data]
      setHikes(newHikes)
    })
  }
  const handleDeleteHike = (deletedHike) => {
    axios.delete("https://damp-wildwood-97531.herokuapp.com/hiking/" + deletedHike._id)
    .then((response) => {
      let newHikes = hikes.filter((hike) => {
        return hike._id !== deletedHike._id
      })
      setHikes(newHikes)
    })
  }

  const handleShowHike = (showIndHike) => {
    console.log(showIndHike)
  // let hike =hikes.filter((showIndHike))
  return(<HikeShowPage hikes = {showIndHike}/>)
  }

  // const handleCreateHike = (data) => {
  //   axios.post("http://localhost:3000/hiking", data).then((response) => {
  //     console.log(response);
  //     let newHikes = [...hikes, response.data]
  //     setHikes(newHikes)
  //   })
  // }
  const handleEditHike = (data) => {
    axios.put("https://damp-wildwood-97531.herokuapp.com/hiking/" + data._id, data)
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


//====hidden=====
const [hidden1, setHidden1] = useState("visible");
const [hidden2, setHidden2] = useState("hidden");
const [hidden3, setHidden3] = useState("hidden");

const showCampPage = () => {
  setHidden1("hidden");
  setHidden2("visible");
  setHidden3("hidden");
};
const showHomePage = () => {
  setHidden1("visible");
  setHidden2("hidden");
  setHidden3("hidden");
};
const showHikePage = () => {
  setHidden1("hidden");
  setHidden2("hidden");
  setHidden3("visible");
};

  return (

    //
    
    
    <div>
            <div className="navbar">
                <div className="nav-title">
                    <p>Lost in the woods</p>
                </div>
                <div className="nav-links">
                <button className="buttons-style" onClick={showCampPage}>Camp</button>
      <button className="buttons-style" onClick={showHikePage}>Hike</button>
      <button className="buttons-style" onClick={showHomePage}>Home</button>
                </div>
            </div>
<div className={hidden1}>
 <Home />
 </div>
      <div className={hidden2}>
              <Camp  camps={camps} handleDelete={handleDeleteCamp} handleEditCamp={handleEditCamp} />
      </div>

      <div className={hidden3}>
              <HikeIndex hikes={hikes} handleDelete={handleDeleteHike} handleShow={handleShowHike} handleEditHike={handleEditHike}/>
         
      </div>
      {/* <AddHike handleCreate={handleCreateHike}/> */}

      {/* <AddCamp handleCreate={handleCreateCamp} /> */}

   
    </div>
  )
}


export default App;
