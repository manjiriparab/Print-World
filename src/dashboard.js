import React from 'react';
import Header from './header';

export const Dashboard = () => {

    return (
        <div>
            <Header/>
            <div className="print-types-tiles">
                <img src="../download.jpg" width="40%" alt="card" />
                <div>
                    <h1 className="business-card-title"> Business Card</h1>
                    <p className="business-card-desc">
                        Are you looking for professional and unique business card? If that so, you are on right place!<br/><br/>
                        It is said that the first impression counts the most. When you hand out a business card, it represents you and your business. Make a great first impression by availing the finest single sided business cards to represent your brand. 
                        PrintWorld’s wide range of elegant one sided business card templates offers great variety and convenience. Alternatively, you could design your own one sided visiting cards using the Online Visiting Card Maker. Personalize your business cards to reflect your personality and the competence of your business.
                    </p>
                    <div className="place-order-div">
                        <button className="place-order-btn" type="button">Place Order</button>
                    </div>
                </div>
            </div>
            <div className="print-types-tiles">
                <div>
                    <h1 className="business-card-title"> Offset Press </h1>
                    <p className="business-card-desc">
                        Get top quality printed products in affordable prices to make lasting impressions with Print World. Managed print and archival solutions helps optimize your business process and eliminates hidden costs.
                        <br/><br/>
                        Printing we offer :<br/>
                         - Dangler Printing<br/>
                         - Label Printing<br/>
                         - Unit Box Printing<br/>
                         - Offset Poster Printing<br/>
                         - Printed Calender<br/>
                    </p>
                    <div className="place-order-div">
                        <button className="place-order-btn" type="button">Place Order</button>
                    </div>
                </div>
                <img src="../offset-press.jpg" width="40%" alt="offset" />
            </div>
        </div>
    );
}