import "../style/home.css"


const Home = () => {


    return(
        <div className="home-page">
            {/* <div className="navbar">
                <div className="nav-title">
                    <h2>Lost in the woods</h2>
                </div>
                <div className="nav-links">
                    <a href="#"><h3>Home</h3></a>
                    <a href="#"><h3>Hiking</h3></a>
                    <a href="#"><h3>Camping</h3></a>
                </div>
            </div> */}
            <main>
                <div className="left-side">
                    <div className="home-slogan">
                        <h1>Let's go on an adventure</h1>
                    </div>
                    <div className="home-description">
                        <p className="home-description-text">Use our community sourced hiking and camping guide to plan your next adventure.</p>
                    </div>
                    <div className="home-add-buttons">
                        <button className="home-add-btns">Add Hike</button>
                        <button className="home-add-btns">Add Camp</button>
                    </div>
                    <div className="home-section-descriptions">
                        <h3>Find hikes for all skill levels</h3>
                        <p>From walks along the river to backpacking trips</p>
                        <br/>
                        <h3>Camping styles for everyone</h3>
                        <p>Glamping to cowboy camping, we've got you covered</p>
                    </div>
                </div>
                <div className="right-side">
                    <div className="home-image-container">
                        <img src="hikin" alt="people hiking on a nature trail"></img>
                    </div>
                </div>
            </main>


        </div>
    )
}

export default Home;