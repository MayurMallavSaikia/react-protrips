import React from 'react';
import { Link } from 'react-router-dom';
import { Trip } from './Trip';

export const Trek = ({days}) => { 


let TrekDays = days.filter(function(val){ return (val.type==='Trek') });
 

    return <>
        <div className="trips-list">
            <h3>Trek Trips</h3>            
            <table class="table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Place</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    {
                         TrekDays.map((trip, i) => 
                         <Trip
                             key={i}
                             {...trip}
                         />
                     )
                    }
                </tbody>
            </table>
            <div className="filters">
                Filter by:
                <Link to="/react-protrips/list">
                    All
				</Link>
                &#9679;
                <Link to="/react-protrips/trek">
                    Treks
				</Link>
                &#9679;
                <Link to="/react-protrips/club">
                    Clubs
				</Link>
                &#9679;
                <Link to="/react-protrips/tropic">
                    Tropics
				</Link>
            </div>            
        </div>
    </>
}
