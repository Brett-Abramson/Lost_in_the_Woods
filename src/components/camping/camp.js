import "../../style/index.css"

const Camp = (props) => {
    return(
        <>
        <div className="page-container">

            <main>
                <div className="card-container">
                    {props.camps.map((camp) => {
                        return (
                            <div className="card">
                                <div className="card-image">
                                    <img src="{camp.name}" alt={"picture of " + camp.name} />
                                </div>
                                <div className="card-text">
                                    <h3 className="card-name">{camp.name}</h3>
                                    <p>{camp.location}</p>
                                    <p>{camp.campType}</p>
                                    <p>{camp.easeOfBooking}</p>
                                </div>
                                <button className="delete-button" onClick={()=>{props.handleDelete(camp)}}>X</button>
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