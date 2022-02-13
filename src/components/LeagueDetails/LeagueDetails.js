import React, { useContext } from 'react';
import './LeagueDetails.css';
import { useParams } from 'react-router-dom';
import Image from '../../Leauge Logo/17090573.jpg';
import { ContextLeague } from '../../App';
import Image2 from '../../Photo/male.png';
import Image3 from '../../Icon/Facebook.png';
import Image4 from '../../Icon/Twitter.png';
import Image5 from '../../Icon/YouTube.png';
import Icon from '../../Icon/flag (1) 1.png';
import Icon2 from '../../Icon/found 1.png';
import Icon3 from '../../Icon/football (1) 1.png';
import Icon4 from '../../Icon/male-gender-sign 1.png';



const LeagueDetails = () => {

    window.scrollTo(0, 0);

    const [league] = useContext(ContextLeague);

    const { id } = useParams();

    const newLeague = league.find(lg => lg.idLeague === id)
    console.log(newLeague)

    const imgPath = `/${id}.png`;

    return (
        <div className="details-main-container">
            <div className="cover-image-container cover-details">
                <img src={Image} alt="" />
                <img style={{ width: '200px', height: '150px' }} className="cover-image-image" src={imgPath} alt="" />
            </div>
            <div className="details-team-card-container d-flex">
                <div className="details-container">
                    <div style={{display: 'flex'}}>
                        <h4>English Premiere League</h4>
                    </div>
                    <div style={{display: 'flex'}}>
                        <img style={{ width: '15px', height: '15px', textAlign: 'center', marginRight: '10px' }} src={Icon} alt="" /><h6>Country: England</h6>
                    </div>
                    <div style={{display: 'flex'}}>
                        <img style={{ width: '15px', height: '15px', textAlign: 'center', marginRight: '10px' }} src={Icon3} alt="" /><h6>Sport: Soccer</h6>
                    </div>
                    <div style={{display: 'flex'}}>
                        <img style={{ width: '15px', height: '15px', textAlign: 'center', marginRight: '10px' }} src={Icon2} alt="" /><h6>Established: 1972</h6>
                    </div>
                    <div style={{display: 'flex'}}>
                        <img style={{ width: '15px', height: '15px', textAlign: 'center', marginRight: '10px' }} src={Icon4} alt="" /><h6>Gender: Male</h6>
                    </div>
                </div>
                <div className='details-container-image'>
                    <img style={{ width: '200px', height: '150px', textAlign: 'center' }} src={Image2} alt="" />
                </div>
            </div>
            <div className="details-container-text">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore quod natus recusandae et, repudiandae perferendis harum expedita, debitis voluptate quos porro voluptatibus, commodi provident autem iure quibusdam impedit corrupti! Officiis fugit consectetur ea beatae rerum possimus sapiente, quia delectus, quasi, veritatis porro qui eligendi? Nostrum praesentium quod non, illum perspiciatis adipisci deleniti quasi iste corrupti atque molestiae, voluptatibus magnam voluptatum ea laudantium repudiandae aut vitae, animi error a in accusamus.</p>
                <br />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic est exercitationem voluptas modi eius animi quia natus ipsum! Quae, id et in veritatis nam enim voluptatum possimus cupiditate, voluptates illo non, quia maiores beatae dolorum quam sed! Magni voluptate ullam architecto debitis. Iure, fugit tempore dolorem autem qui a Dolor.</p>
            </div>
            <div className="details-container-icon">
                <a href="https://www.w3schools.com" target="_blank" rel="noreferrer"><img style={{ width: '55px', height: '50px', textAlign: 'center', marginRight: '10px' }} src={Image4} alt="" /></a>
                <a href="https://www.w3schools.com" target="_blank" rel="noreferrer"><img style={{ width: '55px', height: '50px', textAlign: 'center', marginRight: '10px' }} src={Image3} alt="" /></a>
                <a href="https://www.w3schools.com" target="_blank" rel="noreferrer"><img style={{ width: '55px', height: '50px', textAlign: 'center', marginRight: '10px' }} src={Image5} alt="" /></a>
            </div>
        </div>
    );
};

export default LeagueDetails;