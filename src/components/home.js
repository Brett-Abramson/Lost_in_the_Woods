// import "../style/home.css"
// import Camp from "./camping/camp"
// // import './App.css';
// import {useState, useEffect} from "react"
// // import PORT from ".../project_3_backend/server.js"
// import axios from "axios"


// const Home = () => {
//     const [viewPage, setViewPage] = useState(false);

//     const toggleView = () => {
//         setViewPage(!viewPage)
//     }

//     const [camps, setCamps] = useState([])
  
  
//     const getCamps = () => {
//       axios.get("http://localhost:3000/camping")
//       .then((response) => setCamps(response.data), 
//       (err) => console.log(err))
//       .catch((error) => console.log(error))
//       }
    
//     const handleCreateCamp = (data) => {
//       axios.post("http://localhost:3000/camping", data).then((response) => {
//         console.log(response);
//         let newCamps = [...camps, response.data]
//         setCamps(newCamps)
//       })
//     }
//     const handleDeleteCamp = (deletedCamp) => {
//       axios.delete("http://localhost:3000/camping/" + deletedCamp._id)
//       .then((response) => {
//         let newCamps = camps.filter((camp) => {
//           return camp._id !== deletedCamp._id
//         })
//         setCamps(newCamps)
//       })
//     }
//     const handleEditCamp = (data) => {
//       axios.put("http://localhost:3000/camping/" + data._id, data)
//       .then((response) => {
//         console.log(response)
//         let newCamp = camps.map((camp) => {
//           return camp._id !== data._id ? camp : data
//         })
//         setCamps(newCamp)
//       })
//     }
  
//     /// === HIKING  ===
//     const [hikes, setHikes] = useState([])
  
//     const getHikes = () => {
//       axios.get("http://localhost:3000/hiking")
//       .then((response) => setHikes(response.data), 
//       (err) => console.log(err))
//       .catch((error) => console.log(error))
//     }
  
//     const handleCreateHike = (data) => {
//       axios.post("http://localhost:3000/hiking", data).then((response) => {
//         console.log(response);
//         let newHikes = [...hikes, response.data]
//         setHikes(newHikes)
//       })
//     }
//     const handleDeleteHike = (deletedHike) => {
//       axios.delete("http://localhost:3000/hiking/" + deletedHike._id)
//       .then((response) => {
//         let newHikes = hikes.filter((hike) => {
//           return hike._id !== deletedHike._id
//         })
//         setHikes(newHikes)
//       })
//     }
//     const handleEditHike = (data) => {
//       axios.put("http://localhost:3000/hiking/" + data._id, data)
//       .then((response) => {
//         console.log(response)
//         let newHike = hikes.map((hike) => {
//           return hike._id !== data._id ? hike : data
//         })
//         setHikes(newHike)
//       })
//     }
    
  
//     useEffect(() => {
//       getCamps();
//       getHikes();
//     }, [])


//     return(

//         <button onClick={getCamps}>Testing</button>
//         <Camp  />
//     {hikes.map((hikes) => {
//       return (
//         <>
//         {console.log(hikes)}
//           <Hike hikes={hikes} />
//         </>
//       )
//     })}
//         <div className="home-page">
//             <div className="navbar">
//                 <div className="nav-title">
//                     <h2>Lost in the woods</h2>
//                 </div>
//                 <div className="nav-links">
//                     <a href="#"><h3>Home</h3></a>
//                     <a href="#"><Camp/><h3>Hiking</h3></a>
//                     <a href="#"><h3>Camping</h3></a>
//                 </div>
//             </div>
//             <main>
//                 <div className="left-side">
//                     <div className="home-slogan">
//                         <h1>Let's go on an adventure</h1>
//                     </div>
//                     <div className="home-description">
//                         <p className="home-description-text">Use our community sourced hiking and camping guide to plan your next adventure.</p>
//                     </div>
//                     <div className="home-add-buttons">
//                         <button className="home-add-btns">Add Hike</button>
//                         <button className="home-add-btns">Add Camp</button>
//                     </div>
//                     <div className="home-section-descriptions">
//                         <h3>Find hikes for all skill levels</h3>
//                         <p>From walks along the river to backpacking trips</p>
//                         <br/>
//                         <h3>Camping styles for everyone</h3>
//                         <p>Glamping to cowboy camping, we've got you covered</p>
//                     </div>
//                 </div>
//                 <div className="right-side">
//                     <div className="home-image-container">
//                         <img src="" alt="people hiking on a nature trail"></img>
//                     </div>
//                 </div>
//             </main>
//             <Camp/>
//         </div>
            
//     )
// }

// export default Home;