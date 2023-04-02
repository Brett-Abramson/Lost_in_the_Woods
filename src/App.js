import './App.css';
import {useState, useEffect} from "react"
// import PORT from ".../project_3_backend/server.js"
import axios from "axios"
import Camp from "./components/camping/camp"
import HikeIndex from "./components/hiking/hike"
import Hike from "./components/hiking/show"
import Home from"./components/home"
import AddHike from "./components/hiking/add"
import AddCamp from "./components/camping/add"
import EditHike from './components/hiking/edit';

const App = () => {
//===hide and show====
// const [show, setShow] = useState(false);
// const [see, setSee] = useState(false);
// const [seeHome, setSeeHome] = useState(true);

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
      setHikes(newHikes)
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

  // const showHike = () => {
  //   show ? setShow(false) : setShow(true);
  // }

  // const showCamp = () => {
  //   see ? setSee(false) : setSee(true);
  // }

  // const showHome = () => {
  //   seeHome ? setSee(true) : setSeeHome(false);

  // }
  

  useEffect(() => {
    getCamps();
    getHikes();
  }, [])
  
const testing = () =>{
  getHikes()


}

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
      {/* <button class="buttons-style" onClick={showHike}>See Hikes</button>
      <button class="buttons-style" onClick={showCamp}>See Camps</button> */}
      {/* <button class="buttons-style" onClick={showCampPage}>Camp</button>
      <button class="buttons-style" onClick={showHikePage}>Hike</button>
      <button class="buttons-style" onClick={showHomePage}>Home</button> */}

<div className={hidden1}>
 <Home />
 </div>
      <div className={hidden2}>
              <Camp  camps={camps} handleDelete={handleDeleteCamp}/>
      </div>

      <div className={hidden3}>
              <HikeIndex hikes={hikes} handleDelete={handleDeleteHike} />
          {hikes.map((hikes) => {
        return (
          <>
            <Hike hikes={hikes}  />
            <EditHike hike={hikes} handleEdit={handleEditHike} />
          </>
        )
      })}
      </div>
      {/* <AddHike handleCreate={handleCreateHike}/> */}

      {/* <AddCamp handleCreate={handleCreateCamp} /> */}

   
    </div>
  )
}


export default App;
