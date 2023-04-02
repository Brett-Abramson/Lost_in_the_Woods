import "../../style/index.css"

// import Hike from "./hiking/show"
// import EditHike from './edit';


const HikeIndex = (props) => {
    return (
        <>
            <div className="page-container">
                <div className="card-container">
                    {props.hikes.map((hike) => {
                        return (
                            <div className="card">
                                <div className="card-image">
                                    <img src="" alt={"picture of " + hike.name} />
                                </div>
                                <div className="card-text">
                                    <a>{hike.name}</a>
                                    <p >best features here</p>
                                    <p>{hike.difficulty}</p>
                                    <p>{hike.distance} miles</p>
                                </div>
                                <button onClick={()=>{props.handleDelete(hike)}}>Delete Hike</button>
                            </div>
                            
                        )
                    })}
                </div>

            </div>
        
        
        </>
    )
}

export default HikeIndex