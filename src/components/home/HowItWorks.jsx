import React from 'react';

import choose from '../../assets/images/icons/choose.png';
import deliver from '../../assets/images/icons/deliver.png';
import pay from '../../assets/images/icons/pay.png';
import enjoy from '../../assets/images/icons/enjoy.png';

const HowItWorks = () => {
    return (
        <section id="how-it-works">
            <div className="container">
                <h2>How It Works</h2>
                <div id="how-it-work-list">
                    <div>
                        <img src={choose} alt="Choose" />
                        <h3>1. Choose</h3>
                        <p>Select from a large variety of food declicacies</p>
                    </div>
                    <div>
                        <img className="deliver" src={deliver}  alt="deliver" />
                        <h3>2. We Deliver</h3>
                        <p>We will deliver your food in a few minutes</p>
                    </div>
                    <div>
                        <img src={pay} alt="Pay" />
                        <h3>3. Pay</h3>
                        <p>Pay for your orderd food on delivery</p>
                    </div>
                    <div>
                        <img src={enjoy} alt="enjoy" />
                        <h3>4. Enjoy</h3>
                        <p>Enjoy your food</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks;
