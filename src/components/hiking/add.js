import {useState} from "react"
import "../../style/index.css"


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
        // comments: [{
        //     photo: "",
        //     name: "",
        //     duration: "",
        //     weather: "",
        //     commentSection: "",
        // }]
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
        <div className="add-item">
            <h1>Add a New Hike</h1>
            <form onSubmit={handleSubmit}>

                <label className="add-name" htmlFor="name">Name</label><br/>
                <input type="text" name="name" id="name" placeholder="What is the name of the trail" onChange={handleChange} />
                <br />

                <label htmlFor="photo">Add a photo of the trail </label><br/>
                <input type="text" name="photo" id="photo" placeholder="Add a photo of the trail" onChange={handleChange} />
                <br/>

                <label htmlFor="location">Location </label><br/>
                <input type="text" name="location" id="location" placeholder="What is the address of the trail?" onChange={handleChange} />
                <br />

                <label htmlFor="mapIntegration">Google Maps Link </label><br/>
                <input type="text" name="mapIntegration" id="mapIntegration" placeholder="Add the link for directions to the trail" onChange={handleChange} />
                 <br />

                 <label htmlFor="distance">Distance</label><br/>
                <input className="input-field" type="number" name="distance" id="distance" placeholder="How long is the trail in miles?" onChange={handleChange} />
                <br />

                <label htmlFor="elevationGain">Elevation</label><br/>
                <input className="input-field"  type="number" name="elevationGain" id="elevationGain" placeholder="How much total elevation did you gain?" onChange={handleChange} />
                <br />

                <label htmlFor="duration">Duration</label><br/>
                <input className="input-field"  type="number" name="duration" id="duration" placeholder="How long did it take you to finish the trail?" onChange={handleChange} />
                <br />

                <fieldset onChange={handleChange}>
                    <legend>How difficult was the hike?</legend> 
                    <div className="radio-options">
                    <label htmlFor="easy">Easy</label>
                    <input type="radio" name="difficulty" id="easy" value="easy" />
         

                    <label htmlFor="medium">Medium</label>
                    <input type="radio" name="difficulty" id="medium" value="medium" /> 
            

                    <label htmlFor="hard">Hard</label>
                    <input type="radio" name="difficulty" id="hard" value="hard" /> 
                    </div>
                </fieldset>

                <fieldset onChange={handleChange}>
                    <legend>What kind of hike was it?</legend> 
                    <div className="radio-options">
                    <label htmlFor="thru-hike">Easy</label>
                    <input type="radio" name="routeType" id="thru-hike" value="thru-hike" />
        

                    <label htmlFor="out-n-back">Out & Back</label>
                    <input type="radio" name="routeType" id="out-n-back" value="out-n-back" /> 
        

                    <label htmlFor="loop">Loop</label>
                    <input type="radio" name="routeType" id="loop" value="loop" /> 
                    </div>
                </fieldset>

                
                <div className="tag-container">
                    <legend>Was it..</legend>
                    <div className="tag-container-options">
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
                </div>

                <label htmlFor="description">Description</label><br/>
                <textarea className="add-description" type="text" name="description" id="decsription" rows="4" cols="50" placeholder="Tell us about the hike. What is the terrain like? What did you like about it? What should others know?" onChange={handleChange} />
                <br />
                <div onClick={props.toggleAddCamp}>
                    <button className="submit-button" type="submit">Add Hike</button>
                </div>
            </form>
            
            </div>
        </>

    )
}

export default AddHike