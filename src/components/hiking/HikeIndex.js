import "../../style/index.css"

import HikeShowPage from "./HikeShowPage"
import AddHike from "../hiking/add"
// import PORT from ".../project_3_backend/server.js"

import {useState} from "react"
import axios from "axios"

const HikeIndex = (props) => {  
    const [showHike, setShowHike] = useState(props.hikes.map(hike => false))    

    const [hikes, setHikes] = useState([])
    const [i, setI] = useState(null)
    const [showAddHike, setshowAddHike] = useState(false);

  

    const handleCreateHike = (data) => {
        axios.post("http://localhost:3000/hiking", data).then((response) => {
          console.log(response);
          let newHikes = [...hikes, response.data]
          setHikes(newHikes)
        })
      }
    // }

    const toggleAddHike = () => {
        setshowAddHike(!showAddHike);
      };


      //=======hidden======


    return (
        <>
        <main>
    
                <div className="">
                <hr id="hr-above-bar-hike"/>
                <nav className="navbar-hike">
                <div className="nav-bar-photo-and-text" id="hiker-background">
                <img src="https://i.imgur.com/dwHSPgj.png" alt="hiking man" id="hiker"/>
                <p id="hiking-man-text" >Hiking</p>
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

                                
                                <button onClick={()=> {
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
                                {showHike[index] ? "Hide" : "Show"}
                            </button>
                            
                            {/* only show the one we want to show */}
                            
                            {/* {showHike[index] && <HikeShowPage hike={hike} />} */}
                            
                                <div className="card-image">
                                <button className="delete-button" onClick={()=>{props.handleDelete(hike)}}>X</button>
                                    <img src="" alt={"picture of " + hike.name} />
                                </div>
                                <div className="card-text">
                                <a className="card-name" href="/hiking/{hike._id}">{hike.name}</a>
                                    <p >best features here</p>
                                    <p>{hike.difficulty}</p>
                                    <p>{hike.distance} miles</p>
                                </div>
 {/* <HikeShowPage hike={hike}/>  */}
                            </div>
                            
                        
                        
                        )
                        
                    })}
                </div>

            </div>
              {showHike[i] && <HikeShowPage hike={props.hikes[i]} />}
            </main>
        
        </>
    )
}

export default HikeIndex
