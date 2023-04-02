import "../../style/index.css"

const Camp = (props) => {
    return(
        <>
        <div className="page-container">
        <hr id="hr-above-bar"/>
                <nav className="navbar-hike">
                    <img src="https://i.imgur.com/1WAoQcg.png" alt="tent"/>
                    <img src={process.env.PUBLIC_URL + './photos/add.png'} alt="add a campsite"></img>
                    <a>add</a>
                    <a>electirc</a>
                    <a>laundry</a>
                    <a>pet friendly</a>
    
                </nav>
                <hr id="hr-below-bar"/>
            <main>
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
        </div>
        </>
    )
}

export default Camp