import profilePic from './assets/profile.jpg'
function Card(){
    return(
        <div className="card">
            <img className='img' src={profilePic} alt="profile picture" />
            <h2>KUSH</h2>
            <p>for all ugandan movies</p>

        </div>

    );


}

export default Card