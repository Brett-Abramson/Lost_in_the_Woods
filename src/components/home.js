import "../style/home.css"
import AddHike from "./hiking/add"
import AddCamp from "./camping/add"

import {useState} from "react"
import axios from "axios"


const Home = () => {
    const [hikes, setHikes] = useState([])
    const [camps, setCamps] = useState([])

    const [showAddHike, setshowAddHike] = useState(false);
    const [showAddCamp, setshowAddCamp] = useState(false);



    const handleCreateHike = (data) => {
        axios.post("http://localhost:3000/hiking", data).then((response) => {
          console.log(response);
          let newHikes = [...hikes, response.data]
          setHikes(newHikes)
        })
      }

      const handleCreateCamp = (data) => {
        axios.post("http://localhost:3000/camping", data).then((response) => {
          console.log(response);
          let newCamps = [...camps, response.data]
          setCamps(newCamps)
        })
      }

      const toggleAddHike = () => {
        setshowAddHike(!showAddHike);
      };

      const toggleAddCamp = () => {
        setshowAddCamp(!showAddCamp);
      };
    return(
        <div className="home-page">
            <main className="home-page">
                <div className="left-side">
                    <div className="home-slogan">
                        <h1>Let's go on an adventure</h1>
                    </div>
                    <div className="home-description">
                        <p className="home-description-text">Use our community sourced hiking and camping guide to plan your next adventure.</p>
                    </div>
                    <div className="home-add-buttons">

                        {/*  */}
                        <button onClick={toggleAddHike}className="home-add-btns">Add Hike</button>
                            {showAddHike && (
                              <div className="modal">
                                <div onClick={toggleAddHike} className="overlay"></div>
                                <div className="modal-content">
                              <AddHike handleCreate={handleCreateHike}/>
                              <button className="close-modal" onClick={toggleAddHike}>X</button>
                              </div>
                              </div>
                              )}



                              {/*  */}
                        <button onClick={toggleAddCamp} className="home-add-btns">Add Camp</button>

                              {showAddCamp && (
                              <div className="modal">
                                <div onClick={toggleAddCamp} className="overlay"></div>
                                <div className="modal-content">
                              <AddCamp handleCreate={handleCreateCamp}/>
                              <button className="close-modal" onClick={toggleAddCamp}>X</button>
                              </div>
                              </div>
                              )}

                    </div>
                    <div className="home-section-descriptions">
                        <h3>Find hikes for all skill levels</h3>
                        <p>From walks along the river to backpacking trips</p>
                        <br/>
                        <h3>Camping styles for everyone</h3>
                        <p>Glamping to cowboy camping, we've got you covered</p>
                    </div>
                </div>
                <div className="right-side">
                    <div className="home-image-container">
                        <img src="landing"/>

                        <img src="https://i.imgur.com/UFbMBDM.png" alt="people hiking on a nature trail"/>
                    </div>
                </div>
            </main>


        </div>
    )
}

export default Home;