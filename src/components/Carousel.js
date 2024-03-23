import { Carousel } from 'antd';
import rubbish from '../images/rubbish.jpg';
import family from '../images/family.png';
import triage from '../images/triage.jpg';
import bag from '../images/bag.png';

const contentStyle = {
    height: '400px',
    width: '100%',
    objectFit: 'fill',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};
function SliderCarousel() {
    return (
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
    )
};
export default SliderCarousel;