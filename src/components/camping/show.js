import ".../App.css"
import {useState} from "react"
import axios from "axios"

const Camps = () => {
    const [camps, setCamps] = useState([])

    const getCamps = () =>  {
        axios.get("")
    }

    return (
    <>
        <h1>Campgrounds</h1>
    </>

    )
}
