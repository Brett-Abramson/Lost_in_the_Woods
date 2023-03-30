import './App.css';
import {useState, useEffect} from "react"
// import PORT from ".../project_3_backend/server.js"
import axios from "axios"

const App = () => {
  const [camps, setCamps] = useState([])
  
  
  const getCamps = () => {
    // axios.get(PORT + "/camping")
    axios.get("http://localhost:3000/camping").then((response) => {
      setCamps(response.data)
      })
    }
  
  const handleCreateCamp = (data) => {
    axios.post("http://localhost:3000/camping", data).then((response) => {
      console.log(response);
      let newCamps = [...camps, response.data]
      setCamps(newCamps)
    })
  }
  
  

  useEffect(() => {
    getCamps()
  }, [])
  
  return (
    <>
      <h1>Lost in the Woods</h1>
      <button onClick={getCamps}>Testing</button>
      {camps.map((camp) => {
        return (
          <li>Camp Name: {camp.name}</li>
        )
      })}
    </>
  )
}


export default App;
