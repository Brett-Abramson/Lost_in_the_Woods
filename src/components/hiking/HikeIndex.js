import "../../style/index.css"
import HikeShowPage from "./HikeShowPage"
import AddHike from "../hiking/add"
import {useState} from "react"
import axios from "axios"
// import EditHike from './components/hiking/edit';
// import Hike from "./hiking/show"
// import EditHike from './edit';
const HikeIndex = (props) => {
    const [showHike, setShowHike] = useState(props.hikes.map(hike => false))
    const [hikes, setHikes] = useState([...props.hikes])
    const [i, setI] = useState(null) 
    const [showAddHike, setshowAddHike] = useState(false);

    const handleCreateHike = (data) => {
        axios.post("https://damp-wildwood-97531.herokuapp.com/hiking", data).then((response) => {
          console.log(response);
          let newHikes = [...hikes, response.data]
          setHikes(newHikes)
        })
      }

    const toggleAddHike = () => {
        setshowAddHike(!showAddHike);
      };
    return (
        <>
        <main>
            <div className="no-this-is-a-column">
                <div className="">
                <hr id="hr-above-bar-hike"/>
                <nav className="navbar-hike">
                <div className="nav-bar-photo-and-text" id="hiker-background">
                <img src="https://i.imgur.com/dwHSPgj.png" alt="hiking man" id="hiker"/>
                <p id="hiking-man-text">Hiking</p>
                </div>
                <div className="nav-bar-photo-and-text" >
                <a onClick={toggleAddHike}>
                {showAddHike && (
                              <div className="modal">
                                <div onClick={toggleAddHike} className="overlay"></div>
                                <div className="modal-content">
                              <AddHike handleCreate={handleCreateHike}/>
                              <button className="close-modal" onClick={toggleAddHike}>X</button>
                              </div>
                              </div>
                              )}
                <img src="https://i.imgur.com/jRAPlMA.png" alt="add" id="add-hike"/>
                <p>Add hike</p>
                </a>
                </div>
                <div className="nav-bar-photo-and-text" >
                <img src="https://i.imgur.com/NNaDgju.png" alt="parking filter" id="parking"/>
                <p>Parking</p>
                </div >
                <div className="nav-bar-photo-and-text" >
                <img src="https://i.imgur.com/g9mXD0D.png" alt="kid friendly" id="kids"/>
                <p>Kid Friendly</p>
                </div>
                <div className="nav-bar-photo-and-text">
                <img src="https://i.imgur.com/Ydl3t1q.png"  id="pets" alt="pet friendly"/>
                <p>Pet Friendly</p>
                </div>
                </nav>
                <hr id="hr-below-bar-hike"/>
                <div className="card-container">
                    {props.hikes.map((hike, index) => {
                        return (
                            <div className="card">
                            {/* only show the one we want to show */}
                            {/* {showHike[index] && <HikeShowPage hike={hike} />} */}
                            <button className="delete-button" onClick={()=>{props.handleDelete(hike)}}>X</button>

                                <div className="card-image" >
                                <img id="index-photo" src={hike.photo} alt={"picture of " + hike.name} />

                                </div>
                                <div className="card-text">
                                <p className="card-name" >{hike.name}</p>
                                    <p className="card-details">{hike.difficulty} difficulty</p>
                                    <p className="card-details">{hike.distance} miles</p>
                                </div>
                            {/* <HikeShowPage hike={hike}/> */}
                            <button className="see-show-button" onClick={()=> {
                                    // this is saying set your show variable  to be true or false
                                    // copying the array of boolean variables
                                    const newShowHike = [...showHike]
                                    // get to only the boolean variable we want
                                    newShowHike[index] = !newShowHike[index]
                                    // change the state of the individual boolean
                                    setShowHike(newShowHike)
                                    setI(index)
                                }}>
                                {/* only change the button of the one we want to change */}
                                {showHike[index] ? "Hide Details" : "Show"}
                            </button>
                            </div>
                        )
                    })}
                </div>
            </div>
                      {showHike[i] && <HikeShowPage hike={props.hikes[i]} handleEditHike={props.handleEditHike} />}
                      </div>
            </main>
        </>
    )
}
export default HikeIndex