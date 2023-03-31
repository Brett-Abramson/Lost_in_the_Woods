import {useState} from "react"

const AddCamp = (props) => {
    const [camp,setCamp] = useState ({
        name: "",
        location: "",
        campType: "",
        photo: "",
        easeOfBooking: "",
        tags: {
            water: false,
            electric: false,
            pool: false,
            generalStore: false,
            laundry: false,
            wifi: false,
            potableWater: false,
            trash: false,
            recycling: false,
            dumpStation: false,
            bathroom: false,
            shower: false,
            grill: false,
            fireRing: false
        },
        description:"",
        campsiteSize: "",
        easeOfBooking: "",
        storesNearby: "",
        parking: "",
        description: "",
        comments: {
            photo: "",
            name: "",
            duration: "",
            weather: "",
            commentSection: "",
        }
    })

    const handleChange = (event) => {
        setCamp ({...camp, [event.target.name] : event.target.value})
    }
    const handleSubmit= (event) => {
        event.preventDefault()
        props.handleCreate(camp)
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" placeholder="What is the name of the campground" onChange={handleChange} />
                <br />

                <label htmlFor="photo">Add a photo</label>
                <input type="text" name="photo" id="photo" placeholder="Add a photo of the campground" onChange={handleChange} />
                <br/>

                <label htmlFor="location">Location</label>
                <input type="text" name="location" id="location" placeholder="What is the address of the campground?" onChange={handleChange} />
                <br />

                <label htmlFor="campsiteSize">campsiteSize</label>
                <input type="text" name="campsiteSize" id="campsiteSize" placeholder="How many people can the campsite accommodate?" onChange={handleChange} />
                <br />

                <fieldset>
                    <legend>Type of Booking</legend> 

                    <label htmlFor="online">Online</label>
                    <input type="radio" name="difficulty" id="online" value="online" />
                    <br />

                    <label htmlFor="phone-call">Phone Call</label>
                    <input type="radio" name="difficulty" id="phone-call" value="phone-call" /> 
                    <br />

                    <label htmlFor="first-come">First Come First Served</label>
                    <input type="radio" name="difficulty" id="first-come" value="first-come" /> 
                    <br />

                    <label htmlFor="reservation-only">Reservation Only</label>
                    <input type="radio" name="difficulty" id="reservation-only" value="reservation-only" /> 
                    <br />
                </fieldset>

                <fieldset>
                    <legend>Type of Camping</legend> 

                    <label htmlFor="tent">Tent</label>
                    <input type="radio" name="difficulty" id="tent" value="tent" />
                    <br />

                    <label htmlFor="rv">RV</label>
                    <input type="radio" name="difficulty" id="rv" value="rv" /> 
                    <br />

                    <label htmlFor="camper">Camper</label>
                    <input type="radio" name="difficulty" id="camper" value="camper" /> 
                    <br />

                    <label htmlFor="primitive">Primitive</label>
                    <input type="radio" name="difficulty" id="primitive" value="primitive" /> 
                    <br />
                </fieldset>

                <legend>Amenities...</legend>
                
                <div className="tag-container">
                    <div>
                        <input type="checkbox" id="bathroom" name="bathroom" value=""  onChange={handleChange} />
                        <label htmlFor="bathroom">Bathrooms</label>
                    </div>
                    <div>
                        <input type="checkbox" id="shower" name="shower" value="shower"  onChange={handleChange} />
                        <label htmlFor="shower">Shower</label>
                    </div>
                    <div>
                        <input type="checkbox" id="campfire" name="campfire" value="campfire"  onChange={handleChange} />
                        <label htmlFor="campfire">Campfire</label>
                    </div>
                    <div>
                        <input type="checkbox" id="wifi" name="wifi" value="wifi"  onChange={handleChange} />
                        <label htmlFor="wifi">Wifi</label>
                    </div>
                    <div>
                        <input type="checkbox" id="water" name="water" value="water"  onChange={handleChange} />
                        <label htmlFor="water">Water hook up</label>
                    </div>
                    <div>
                        <input type="checkbox" id="electric" name="kidFriendly" value="electric"  onChange={handleChange} />
                        <label htmlFor="kidFriendly">Electric hook up</label>
                    </div>
                    <div>
                        <input type="checkbox" id="dumpStation" name="dumpStation" value="dumpstation"  onChange={handleChange} />
                        <label htmlFor="dumpStation">Dump Station</label>
                    </div>
                    <div>
                        <input type="checkbox" id="potableWater" name="potableWater" value="potableWater"  onChange={handleChange} />
                        <label htmlFor="potableWater">Potable Water Friendly</label>
                    </div>
                    <div>
                        <input type="checkbox" id="laundry" name="laundry" value="laundry"  onChange={handleChange} />
                        <label htmlFor="laundry">Laundry</label>
                    </div>
                    <div>
                        <input type="checkbox" id="trash" name="trash" value="trash"  onChange={handleChange} />
                        <label htmlFor="trash">Trash</label>
                    </div>
                    <div>
                        <input type="checkbox" id="recycling" name="recycling" value="recycling"  onChange={handleChange} />
                        <label htmlFor="recycling">Recycling</label>
                    </div>
                    <div>
                        <input type="checkbox" id="firewood" name="firewood" value="firewood"  onChange={handleChange} />
                        <label htmlFor="firewood">Firewood</label>
                    </div>
                </div>
                <div className="comments">
                        <label htmlFor="commentSection">Description</label>
                        <textarea id="commentSection" name="commentSection" onChange={handleChange} placeholder="Tell us about the campground. What did you like about it? What hsould others know?" />
                    </div>
                
                    <button type="submit">Add Campsite</button>
            </form>
        </>





    )



}

export default AddCamp