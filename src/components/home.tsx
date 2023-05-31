import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
const startpage_img = require("../../src/images/startpage-img.png");

const Home = () => {
    return (
        <div className='align' >

            <div>
                <div style={{textAlign:'center'}} >
                    <h3>Rick&Morty project by Tahereh</h3>
                    <h1>Front-end Developer</h1>
                    <h3>React - Typescript - ReduxToolkit</h3>
                    <Link to="/characters">
                        see characters
                    </Link>
                </div>
                <img style={{ height: '500px' }} src={startpage_img} alt="" />
            </div>
        </div>)
}

export default Home