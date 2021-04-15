import React from 'react';
import { Carousel } from 'react-bootstrap';
import apple from '../../../images/brand_logo/apple.png'
import nokia from '../../../images/brand_logo/nokia.png'
import samsung from '../../../images/brand_logo/samsung.png'
import htc from '../../../images/brand_logo/htc.png'
import dell from '../../../images/brand_logo/dell.png'
import lenovo from '../../../images/brand_logo/lenovo.png'
import huawei from '../../../images/brand_logo/huawei.png'
import sony from '../../../images/brand_logo/sony.png'
import toshiba from '../../../images/brand_logo/toshiba.png'
import windows from '../../../images/brand_logo/windows.png'
import intel from '../../../images/brand_logo/intel.png'
import asus from '../../../images/brand_logo/asus.png'

const HeaderCarousel = () => {

    return (
        <Carousel className="mt-2 mb-5">
            <Carousel.Item interval={1000}>
                <div className="d-flex justify-content-around">
                    <img
                        className="d-inline-block" style={{ height: '60px' }}
                        // src="holder.js/800x400?text=First slide&bg=373940"
                        src={apple}
                        alt="First slide"
                    />
                    <img
                        className="d-inline-block" style={{ height: '60px' }}
                        // src="holder.js/800x400?text=First slide&bg=373940"
                        src={nokia}
                        alt="First slide"
                    />
                    <img
                        className="d-inline-block" style={{ height: '60px' }}
                        // src="holder.js/800x400?text=First slide&bg=373940"
                        src={samsung}
                        alt="First slide"
                    />
                    <img
                        className="d-inline-block" style={{ height: '60px' }}
                        // src="holder.js/800x400?text=First slide&bg=373940"
                        src={htc}
                        alt="First slide"
                    />
                </div>

            </Carousel.Item>
            <Carousel.Item interval={1000}>
            <div className="d-flex justify-content-around">
                    <img
                        className="d-inline-block" style={{ height: '60px' }}
                        // src="holder.js/800x400?text=First slide&bg=373940"
                        src={dell}
                        alt="First slide"
                    />
                    <img
                        className="d-inline-block" style={{ height: '60px' }}
                        // src="holder.js/800x400?text=First slide&bg=373940"
                        src={lenovo}
                        alt="First slide"
                    />
                    <img
                        className="d-inline-block" style={{ height: '60px' }}
                        // src="holder.js/800x400?text=First slide&bg=373940"
                        src={huawei}
                        alt="First slide"
                    />
                    <img
                        className="d-inline-block" style={{ height: '60px' }}
                        // src="holder.js/800x400?text=First slide&bg=373940"
                        src={sony}
                        alt="First slide"
                    />
                </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className="d-flex justify-content-around">
                    <img
                        className="d-inline-block" style={{ height: '60px' }}
                        // src="holder.js/800x400?text=First slide&bg=373940"
                        src={toshiba}
                        alt="First slide"
                    />
                    <img
                        className="d-inline-block" style={{ height: '60px' }}
                        // src="holder.js/800x400?text=First slide&bg=373940"
                        src={windows}
                        alt="First slide"
                    />
                    <img
                        className="d-inline-block" style={{ height: '60px' }}
                        // src="holder.js/800x400?text=First slide&bg=373940"
                        src={intel}
                        alt="First slide"
                    />
                    <img
                        className="d-inline-block" style={{ height: '60px' }}
                        // src="holder.js/800x400?text=First slide&bg=373940"
                        src={asus}
                        alt="First slide"
                    />
                </div>
            </Carousel.Item>
        </Carousel>
    );
};

export default HeaderCarousel;