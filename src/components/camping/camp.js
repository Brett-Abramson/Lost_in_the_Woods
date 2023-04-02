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
                                    <a href="/camping/.id">{camp.name}</a>
                                    <p>{camp.location}</p>
                                    <p>{camp.campType}</p>
                                    <p>{camp.easeOfBooking}</p>
                                </div>
                                <button onClick={()=>{props.handleDelete(camp)}}>Delete Camp</button>
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