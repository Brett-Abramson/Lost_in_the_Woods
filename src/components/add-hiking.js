import { useState } from "react";
import "./Modal.css";

const Add = (props) => {
  <form>
    <label htmlFor="photo">Add a photo of the trail </label>
    <input type="text" name="photo" placeholder="Add a photo of the trail" onChange={handleChange} />
    <br/>
    <label htmlFor="location">Location </label>
    <input type="text" name="location" placeholder="What is the address of the trail?" onChange={handleChange} />
    <br />
    <label htmlFor="mapIntigration">Google Maps Link </label>
    <input type="text" name="mapIntigration" placeholder="Add the link for directions to the trail" onChange={handleChange} />
    <br />
    <label htmlFor="elevationGain">Elevation</label>
    <input type="number" name="elevationGain" placeholder="How much total elevation did you gain?" onChange={handleChange} />
    <br />
    <label htmlFor="duration">Duration</label>
    <input type="text" name="duration" placeholder="How long did it take you to finish the trail?" onChange={handleChange} />


    <input type="submit" />
  </form>;
};

export default Add;
