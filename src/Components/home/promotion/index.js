import React from 'react';
import PromotionAnimation from './animation';
import Enroll from './enroll';

const Promotion = () => {
    return (
        <div className="promotion_wrapper" style={{background:'#ffffff'}}>
            <div className="container">
                <PromotionAnimation/>
                <Enroll/>
            </div>
        </div>
    );
};

export default Promotion;