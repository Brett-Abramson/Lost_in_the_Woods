import "../../style/index.css"

const HikeIndex = (props) => {
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
                    {props.hikes.map((hike) => {
                        return (
                            <div className="card">
                                <div className="card-image">
                                    <img src="" alt={"picture of " + hike.name} />
                                </div>
                                <div className="card-text">
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