import "../../style/index.css"
import Hike from "./show"
import {useState} from "react"

const HikeIndex = (props) => {
    
    //we create an array of false variables the length of the hike array
    const [showHike, setShowHike] = useState(props.hikes.map(hike => false))
    return (
        <>
            <div className="page-container">
                <div className="header">
                    <div className="header-left-side">
                        <h3>Lost in the woods</h3>
                    </div>
                    <div className="header-right-side">
                        <button>Find Your Next Adventure</button>
                    </div>
                </div>
                <div className="filterbar">
                    <div className="filterbar-left-side">
                        ICONS
                    </div>
                    <div className="filterbar-right-side">
                        Add New Hike
                    </div>
                </div>
                <main>
                <div className="card-container">
                    {/* index instead of :id... tells us which hike object */}
                    {props.hikes.map((hike, index) => {
                        return (
                            <div className="card">
                                <button onClick={()=> {
                                    // not entirely sure how this one works, a combination of the handle functions spreading arrays and the toggles. the array we are copying is of boolean values set to false. we then grab the one we want and flip its value allowing us to show one state at a time. The fact that they are both map function of the same array allows the index to be the same.
                                    // this is saying set your show variable  to be true or false
                                    // copying the array of boolean variables
                                    const newShowHike = [...showHike]
                                    // get to only the boolean variable we want
                                    newShowHike[index] = !newShowHike[index]
                                    // change the state of the individual boolean
                                    setShowHike(newShowHike)
                                    // setShowHike(!showHike[index])
                                }}>
                                    {/* only change the button of the one we want to change */}
                                    {showHike[index] ? "Hide" : "Show"}
                                </button>
                                {/* only show the one we want to show */}
                                {showHike[index] && <Hike hikes={hike} />}
                                <div className="card-image">
                                    <img src="" alt={"picture of " + hike.name} />
                                </div>
                                <div className="card-text">
                                <img src={hike.photo} alt={"picture of " + hike.name} />
                                    <h2>{hike.name}</h2>
                                    <p>best features here</p>
                                    <p>{hike.difficulty}</p>
                                    <p>{hike.distance} miles</p>
                                </div>
                                <button onClick={()=>{props.handleDelete(hike)}}>Delete Hike</button>
                            </div>
                        )
                    })}
                </div>
            </main>

            </div>
        
        
        </>
    )
}

export default HikeIndex
