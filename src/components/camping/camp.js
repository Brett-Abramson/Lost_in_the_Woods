import "../../style/index.css"
import "../../style/home.css"

import AddCamp from "../camping/add"

import {useState} from "react"
import axios from "axios"

const Camp = (props) => {
    const [camps, setCamps] = useState([])
    const [showAddCamp, setshowAddCamp] = useState(false);

    const handleCreateCamp = (data) => {
        axios.post("http://localhost:3000/camping", data).then((response) => {
          console.log(response);
          let newCamps = [...camps, response.data]
          setCamps(newCamps)
        })
      }

      const toggleAddCamp = () => {
        setshowAddCamp(!showAddCamp);
      };



    return(
        <>
        {/* <div className="page-container"> */}
        <main>
            
                <hr id="hr-above-bar"/>
                <nav className="navbar-camp">
                <div className="nav-bar-photo-and-text" id="hiker-background">
                <img src="https://i.imgur.com/dwHSPgj.png" alt="hiking man" id="hiker"/>
                <p id="hiking-man-text">Camping</p>
                </div>
                <div className="nav-bar-photo-and-text" >
                <a onClick={toggleAddCamp}>
                <img src="https://i.imgur.com/jRAPlMA.png" alt="add" id="add-hike"/>
                <p>Add Site</p>
                {showAddCamp && (
                              <div className="modal">
                                <div onClick={toggleAddCamp} className="overlay"></div>
                                <div className="modal-content">
                              <AddCamp handleCreate={handleCreateCamp}/>
                              <button className="close-modal" onClick={toggleAddCamp}>X</button>
                              </div>
                              </div>
                              )}
                </a>
                </div>
                <div className="nav-bar-photo-and-text" >
                <img src="https://i.imgur.com/Ctj1SAH.png" alt="parking filter" id="electric"/>
                <p>Electric</p>
                </div >
                <div className="nav-bar-photo-and-text" >
                <img src="https://i.imgur.com/owyxVAj.png" alt="kid friendly" id="laundry"/>
                <p>Laundry</p>
                </div>
                <div className="nav-bar-photo-and-text">
                <img src="https://i.imgur.com/Ydl3t1q.png"  id="pets" alt="pet friendly"/>
                <p>Pet Friendly</p>
                </div>
    
                </nav>
                <hr id="hr-below-bar"/>
            
                <div className="card-container">
                    {props.camps.map((camp) => {
                        return (
                            <div className="card">
                                <div className="card-image">
                                <button className="delete-button" onClick={()=>{props.handleDelete(camp)}}>X</button><br/>
                                    <img src="{camp.name}" alt={"picture of " + camp.name} />
                                </div>
                                <div className="card-text">
                                    <h3 className="card-name">{camp.name}</h3>
                                    <p>{camp.location}</p>
                                    <p>{camp.campType}</p>
                                    <p>{camp.easeOfBooking}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </main>
        {/* </div> */}
        </>
    )
}

export default Camp