import React from 'react';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';

// Components
import { Nav } from './Nav';
import { TripsCount } from './trips/TripsCount';
import { AddTrip } from './trips/AddTrip';
import { TripsList } from './trips/TripsList';
import { Error404 } from './Error404';
import { Trek } from './trips/Trek';
import { Tropic } from './trips/Tropic';
import { Club } from './trips/Club';

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allTrips: [
                {
                    place: "Manali",
                    date: "2017-01-01",
                    type: "Trek"
                },
                {
                    place: "Mumbai",
                    date: "2017-04-05",
                    type: "Club"
                },
                {
                    place: "Marina",
                    date: "2017-02-09",
                    type: "Tropic"
                },
                {
                    place:"Coimbatore",
                    date:"2020-10-21",
                    type:"Trek"
                }
            ]
        }
        this.addTrip = this.addTrip.bind(this);
    }

    addTrip(newTrip) {
        this.setState((prevState) => {
            return {
                allTrips: [
                ...prevState.allTrips,
                newTrip
                ]
            }
        });
    }

    countDays(filter) {
        const { allTrips } = this.state;
        return allTrips.filter(trip => filter ? trip.type === filter : trip).length;
    }

    // Switch goes to first matching route
    render () {
        return (                                                                                    
            <div className="app">                
                <BrowserRouter>
                    <div className="route-container">
                        <Nav />
                        <Routes>
                            <Route path="react-protrips/"  element={<TripsCount total={this.countDays()} trek={this.countDays('Trek')} tropic={this.countDays('Tropic')} club={this.countDays('Club')}/>}  />
                            <Route path="react-protrips/list" element={ <TripsList days={this.state.allTrips} />}/>

                             <Route path="/react-protrips/trek" element={<Trek days={this.state.allTrips}/>}  />
                             <Route path="/react-protrips/tropic" element={<Tropic days={this.state.allTrips}/>}  />
                             <Route path="/react-protrips/club" element={<Club days={this.state.allTrips} />} />
    
                            <Route path="react-protrips/add" element={<AddTrip   newTrip={this.addTrip} />}  />
                            <Route path="*" element={<Error404/>} />
                        </Routes>
                    </div>                    
                </BrowserRouter>                
            </div>
        )
    }
}
