import { Carousel } from 'antd';
import rubbish from '../images/rubbish.jpg';
import family from '../images/family.png';
import triage from '../images/triage.jpg';
import bag from '../images/bag.png';
import { Link } from 'react-router-dom';

const contentStyle = {
    height: '400px',
    width: '100%',
    objectFit: 'fill',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    filter: 'brightness(0.4)',
};
function SliderCarousel() {
    return (
        <div style={{position:'relative'}}>
            <Carousel autoplay fade>
                <div>
                    <img src={rubbish} alt='rubbish' style={contentStyle} />
                </div>
                <div>
                    <img src={family} alt='family' style={contentStyle} />
                </div>
                <div>
                    <img src={triage} alt='triage' style={contentStyle} />
                </div>
                <div>
                    <img src={bag} alt='bag' style={contentStyle} />
                </div>
            </Carousel>
            <div id="overlay" style={{position: 'absolute', top: 20, textAlign: 'center', zIndex: 1}}>
                <Link to={[]}>home</Link>
            </div>
        </div>
    )
};
export default SliderCarousel;