import "../../style/index.css"

const Camp = (props) => {
    return(
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
                    {props.camps.map((camp) => {
                        return (
                            <div className="card">
                                <div className="card-image">
                                    <img src="" alt={"picture of " + camp.name} />
                                </div>
                                <div className="card-text">
                                    <h2>{camp.name}</h2>
                                    <p>{camp.location}</p>
                                    <p>{camp.campType}</p>
                                    <p>{camp.easeOfBooking}</p>
                                </div>



                            </div>
                        )
                    })}
                    
                    {/* Map over the array to produce the card display */}
                    {/* Right now its is prducing this for every item in the index.. that only needs to happen in the display */}
                </div>
            </main>

        </div>
            

        </>
    )
}

export default Camp