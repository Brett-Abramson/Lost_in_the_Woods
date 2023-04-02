import "../../style/index.css"

// import Hike from "./hiking/show"
// import EditHike from './edit';


const HikeIndex = (props) => {
    return (
        <>
        <main>
            <div className="page-container">
<hr id="hr-above-bar"/>
                <nav className="navbar-hike">
                    <a>hiking man</a>
                    <a>add</a>
                    <a>parking filter</a>
                    <a>pet friednly</a>
                    <a>kid friendly</a>
    
                </nav>
                <hr id="hr-below-bar"/>
                <div className="card-container">
                    {props.hikes.map((hike) => {
                        return (

                            <div className="card">
                                <div className="card-image">
                                <button className="delete-button" onClick={()=>{props.handleDelete(hike)}}>X</button>
                                    <img src="" alt={"picture of " + hike.name} />
                                </div>
                                <div className="card-text">
                                <h3 className="card-name">{hike.name}</h3>
                                    <p >best features here</p>
                                    <p>{hike.difficulty}</p>
                                    <p>{hike.distance} miles</p>
                                </div>

                            </div>
                        
                            
                        )
                    })}
                </div>

            </div>
            </main>
        
        </>
    )
}

export default HikeIndex