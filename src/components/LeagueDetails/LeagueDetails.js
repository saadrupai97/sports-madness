import React, { useContext } from 'react';
import './LeagueDetails.css';
import { useParams } from 'react-router-dom';
import Image from '../../Leauge Logo/17090573.jpg';
import { ContextLeague } from '../../App';



const LeagueDetails = () => {

    const [league, setLeague] = useContext(ContextLeague);

    const {id} = useParams();

    const newLeague = league.find(lg => league.idLeague === id )
    console.log(league)
    
    const imgPath = `/${id}.png`;
    
    return (
        <div className="main-container"> 
            <div className="cover-image-container cover-details">
                <img src={Image} alt="" />
                <img style={{ width: '200px', height: '150px'}} className="cover-image-image" src={imgPath} alt="" />
            </div>
            <div className="team-card-container">
                <div className='details-container'>
                    <div>
                        {/* <h1>{newLeague.idLeague}</h1> */}
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeagueDetails;