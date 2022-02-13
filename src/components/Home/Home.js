import React, { useContext } from 'react';
import './Home.css';
import Image from '../../Leauge Logo/17090573.jpg';
import LeagueCard from '../LeagueCard/LeagueCard';
import { useNavigate } from 'react-router';
import { ContextLeague } from '../../App';

const Home = () => {

    const [league, setLeague] = useContext(ContextLeague);

    const navigate = useNavigate();


    const handleDetails = (id) => {
        // const selectedLeague = league.find(lg => lg.idLeague === id)
        navigate(`/league/${id}`);
    }

    return (
        <div className="main-container"> 
            <div className="cover-image-container">
                <img src={Image} alt="" />
                <h1 className="cover-image-text">Sports Madness</h1>
            </div>
            <div className="team-card-container">
                {
                    league.map(lg => <LeagueCard key={lg.key} handleDetails={handleDetails} league={lg}></LeagueCard>)
                }
            </div>
        </div>
    );
};

export default Home;