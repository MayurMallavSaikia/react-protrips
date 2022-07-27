import React from 'react';
import { Link } from 'react-router-dom';
import { Trip } from './Trip';

export const TripsList = ({days}) => { 

    return <>
        <div className="trips-list">
            <h3>All Trips</h3>            
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
                        days.map((trip, i) => 
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
                <Link to="/list">
                    All
				</Link>
                &#9679;
                <Link to="/trek">
                    Treks
				</Link>
                &#9679;
                <Link to="/club">
                    Clubs
				</Link>
                &#9679;
                <Link to="/tropic">
                    Tropics
				</Link>
            </div>            
        </div>
    </>
}