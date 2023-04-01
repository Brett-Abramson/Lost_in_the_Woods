import React from 'react';
import {useState, useEffect} from "react"

import axios from "axios"

import Hike from "./components/hiking/show"
import AddHike from "./components/hiking/add"


const ViewAllHiking = () => {

    const [hikes, setHikes] = useState([])

    const getHikes = () => {
        axios.get("http://localhost:3000")
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

      useEffect(() => {
        getHikes();
      }, [])
      
    return (
        <>
           <h1>view all hiking</h1>
           <AddHike handleCreate={handleCreateHike}/>
           {hikes.map((hikes) => {
        return (
          <>
          {console.log(hikes)}
            <Hike hikes={hikes} />
            {/* this ^ links to the show page */}
          </>
        )
      })}
        </>
    );

}

export default ViewAllHiking;