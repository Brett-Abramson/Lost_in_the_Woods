import {useState} from "react"

const EditHike = (props) => {

    const[hike,setHike] = useState({...props.hike})

    const handleChange = (event) => {
        setHike({...hike, [event.target.name] : event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleEdit(hike)
    }

    return (
        <>
            <details>
                <summary>Edit Hike</summary>
                <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" value={hike.name} onChange={handleChange} />
                <br />

                <label htmlFor="photo">Add a photo of the trail </label>
                <input type="text" name="photo" id="photo" value={hike.photo} onChange={handleChange} />
                <br/>

                <label htmlFor="location">Location </label>
                <input type="text" name="location" id="location" value={hike.location} onChange={handleChange} />
                <br />

                <label htmlFor="mapIntegration">Google Maps Link </label>
                <input type="text" name="mapIntegration" id="mapIntegration" value={hike.mapIntegration} onChange={handleChange} />
                 <br />

                 <label htmlFor="distance">Distance</label>
                <input type="number" name="distance" id="distance" value={hike.distance} onChange={handleChange} />
                <br />

                <label htmlFor="elevationGain">Elevation</label>
                <input type="number" name="elevationGain" id="elevationGain" value={hike.elevationGain} onChange={handleChange} />
                <br />

                <label htmlFor="duration">Duration</label>
                <input type="number" name="duration" id="duration" value={hike.duration} onChange={handleChange} />
                <br />
                    <button type="submit">Edit Hike</button>
                </form>
            </details>
        </>


    )
}

export default EditHike