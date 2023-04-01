import React from 'react';

const AddNewHike = () => {

    const [hikes, setHikes] = useState([])

    const getHikes = () => {
      axios.get("http://localhost:3000")
      .then((response) => setHikes(response.data), 
      (err) => console.log(err))
      .catch((error) => console.log(error))
    }

    const handleCreateHike = (data) => {
        axios.post("http://localhost:3000", data).then((response) => {
          console.log(response);
          let newHikes = [...hikes, response.data]
          setHikes(newHikes)
        })
      }
      const handleDeleteHike = (deletedHike) => {
        axios.delete("http://localhost:3000" + deletedHike._id)
        .then((response) => {
          let newHikes = hikes.filter((hike) => {
            return hike._id !== deletedHike._id
          })
          setHikes(newHikes)
        })
      }
      const handleEditHike = (data) => {
        axios.put("http://localhost:3000/hiking/" + data._id, data)
        .then((response) => {
          console.log(response)
          let newHike = hikes.map((hike) => {
            return hike._id !== data._id ? hike : data
          })
          setHikes(newHike)
        })
      }
  
      
    return (
        <>
           <h1>add new camp</h1>
        </>
    );

}

export default AddNewHike;