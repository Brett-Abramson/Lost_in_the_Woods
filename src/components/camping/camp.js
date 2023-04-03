import "../../style/index.css"
import "../../style/home.css"


const Camp = (props) => {
    return(
        <>
        {/* <div className="page-container"> */}
        <main>
            
                <hr id="hr-above-bar"/>
                <nav className="navbar-camp">
                <div className="nav-bar-photo-and-text" id="hiker-background">
                <img src="https://i.imgur.com/dwHSPgj.png" alt="hiking man" id="hiker"/>
                <p id="hiking-man-text">Hiking</p>
                </div>
                <div className="nav-bar-photo-and-text" >
                <img src="https://i.imgur.com/jRAPlMA.png" alt="add" id="add-hike"/>
                <p>Add hike</p>
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