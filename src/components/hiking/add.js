import {useState} from "react"

const AddHike = (props) => {
    const [hike,setHike] = useState ({
        photo: "",
        name: "",
        distance: "",
        duration: "",
        location: "",
        difficulty: "",
        elevationGain: "",
        routeType: "",
        mapIntigration: "",
        // tags: [{
        //     quick: false,
        //     easy: false,
        //     challenging: false,
        //     petFriednly: false,
        //     offLeash: false,
        //     kidFriendly: false,
        //     handicap: false,
        //     wheelchair: false,
        //     easeHead: false,
        //     bathrooms: false,
        //     water: false,
        //     freeParking: false,
        // }],
        description:"",
        parkingDetails: "",
        comments: [{
            photo: "",
            name: "",
            duration: "",
            weather: "",
            commentSection: "",
        }]
    })

    const handleChange = (event) => {
        setHike ({...hike, [event.target.name] : event.target.value})
    }
    const handleCheckedChange = (event) => {
        // need to use a toggle like "setHike(!hike)" on checkbox values when checked ? if we use boolean values for the checkbox's then we will need a bunch of different tags that toggle based on the checkbox being checked or not (true or false). If we assign a string value to the checkbox then if it is true it will submit its text to a single tag function that will then create a tag with the value of the checked(true) tag

    }
    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleCreateHike(hike)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" placeholder="What is the name of the trail" onChange={handleChange} />
                <br />

                <label htmlFor="photo">Add a photo of the trail </label>
                <input type="text" name="photo" id="photo" placeholder="Add a photo of the trail" onChange={handleChange} />
                <br/>

                <label htmlFor="location">Location </label>
                <input type="text" name="location" id="location" placeholder="What is the address of the trail?" onChange={handleChange} />
                <br />

                <label htmlFor="mapIntegration">Google Maps Link </label>
                <input type="text" name="mapIntegration" id="mapIntegration" placeholder="Add the link for directions to the trail" onChange={handleChange} />
                 <br />

                 <label htmlFor="distance">Distance</label>
                <input type="number" name="distance" id="distance" placeholder="How long is the trail in miles?" onChange={handleChange} />
                <br />

                <label htmlFor="elevationGain">Elevation</label>
                <input type="number" name="elevationGain" id="elevationGain" placeholder="How much total elevation did you gain?" onChange={handleChange} />
                <br />

                <label htmlFor="duration">Duration</label>
                <input type="number" name="duration" id="duration" placeholder="How long did it take you to finish the trail?" onChange={handleChange} />
                <br />

                <fieldset>
                    <legend>How difficult was the hike?</legend> 

                    <label htmlFor="easy">Easy</label>
                    <input type="radio" name="difficulty" id="easy" value="easy" />
                    <br />

                    <label htmlFor="medium">Medium</label>
                    <input type="radio" name="difficulty" id="medium" value="medium" /> 
                    <br />

                    <label htmlFor="hard">Hard</label>
                    <input type="radio" name="difficulty" id="hard" value="hard" /> 
                    <br />
                </fieldset>

                <fieldset>
                    <legend>What kind of hike was it?</legend> 

                    <label htmlFor="thru-hike">Easy</label>
                    <input type="radio" name="routeType" id="thru-hike" value="thru-hike" />
                    <br />

                    <label htmlFor="out-n-back">Out & Back</label>
                    <input type="radio" name="routeType" id="out-n-back" value="out-n-back" /> 
                    <br />

                    <label htmlFor="loop">Loop</label>
                    <input type="radio" name="routeType" id="loop" value="loop" /> 
                    <br />
                </fieldset>

                
                <div className="tag-container">
                    <legend>Was it..</legend>
                    <div>
                        <input type="checkbox" id="quick" name="quick" value=""  onChange={handleChange} />
                        <label htmlFor="quick">Quick</label>
                    </div>
                    <div>
                        <input type="checkbox" id="easy" name="easy" value=""  onChange={handleChange} />
                        <label htmlFor="easy">Easy</label>
                    </div>
                    <div>
                        <input type="checkbox" id="challenging" name="challenging" value=""  onChange={handleChange} />
                        <label htmlFor="challenging">Challenging</label>
                    </div>
                    <div>
                        <input type="checkbox" id="petFriendly" name="petFriendly" value=""  onChange={handleChange} />
                        <label htmlFor="petFriendly">Pet Friendly</label>
                    </div>
                    <div>
                        <input type="checkbox" id="offLeash" name="offLeash" value=""  onChange={handleChange} />
                        <label htmlFor="offLeash">Off Leash Friendly</label>
                    </div>
                    <div>
                        <input type="checkbox" id="kidFriendly" name="kidFriendly" value=""  onChange={handleChange} />
                        <label htmlFor="kidFriendly">Kid Friendly</label>
                    </div>
                    <div>
                        <input type="checkbox" id="handicap" name="handicap" value=""  onChange={handleChange} />
                        <label htmlFor="handicap">Handicap accessible</label>
                    </div>
                    <div>
                        <input type="checkbox" id="wheelchair" name="wheelchair" value=""  onChange={handleChange} />
                        <label htmlFor="wheelchair">Wheelchair Friendly</label>
                    </div>
                    <div>
                        <input type="checkbox" id="easeHead" name="easeHead" value=""  onChange={handleChange} />
                        <label htmlFor="easeHead">Easy access to trailhead</label>
                    </div>
                    <div>
                        <input type="checkbox" id="bathrooms" name="bathrooms" value=""  onChange={handleChange} />
                        <label htmlFor="bathrooms">Bathrooms</label>
                    </div>
                    <div>
                        <input type="checkbox" id="water" name="water" value=""  onChange={handleChange} />
                        <label htmlFor="water">Potable Water</label>
                    </div>
                    <div>
                        <input type="checkbox" id="Free Parking" name="Free Parking" value=""  onChange={handleChange} />
                        <label htmlFor="Free Parking">Free Parking</label>
                    </div>
                </div>
                <button type="submit">Add Hike</button>
            </form>
        </>

    )
}

export default AddHike