import React from 'react';
import './LeagueCard.css';
import {Card, Button} from 'react-bootstrap';
import '../../Leauge Logo/4328.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';
// import logo from '../../../public/4328.png';


const LeagueCard = (props) => {

    window.scrollTo(0, 0);

   

    const { strLeague, strSport, idLeague } = props.league;

    // console.log(props.league);
    const imgPath = `/${idLeague}.png`;

    return (
        <React.Fragment>
            <Card className="league-card" style={{ width: '20rem', height: '21rem' }}>
                <Card.Img style={{ width: '120px', height: '100px', marginTop: '25px' }} variant="top" src={imgPath} />
                <Card.Body style={{ display: 'grid', placeItems: 'center'}} >
                    <Card.Title style={{frontWeight : '1000', display: 'grid', placeItems: 'center'}}>{strLeague}</Card.Title>
                    <Card.Text style={{frontWeight : '1000', display: 'grid', placeItems: 'center'}}>
                        Sport Type: {strSport}
                    </Card.Text>
                    <Button onClick={() => props.handleDetails(idLeague)} style={{ marginTop: '5px'}}  variant="primary">Explore<FontAwesomeIcon style={{ marginLeft: '5px'}} className='product-details-icon' icon={faRightLong} /></Button>
                </Card.Body>
            </Card>
        </React.Fragment>
    );
};

export default LeagueCard;