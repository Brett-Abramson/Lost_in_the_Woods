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
        props.handleCreate(hike)
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

                
        
        
        
            </form>
        </>





    )



}