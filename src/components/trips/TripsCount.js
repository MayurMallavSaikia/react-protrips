import React from 'react';

import {CgTerrain } from "react-icons/cg";
import {IoSunnyOutline } from "react-icons/io5";
import { FaBeer } from 'react-icons/fa';


// Get percent completed
const getProgress = (total, goal) => {
    return Math.floor((total/goal)*100) + '%';
}

// Object of width of progress bar
const getProgressBarWidth = (width) => {
    return {width};
}



   function TripsCount({total, tropic, trek, club, goal=15}){

    return <>
    <div className="trips-count">
    <div className="content">
        <div className="total"><h1>{total}</h1>trips</div>
        <div className="tropic"><h3>{tropic}</h3><IoSunnyOutline /></div>
        <div className="trek"><h3>{trek}</h3><CgTerrain /></div>
        <div className="club"><h3>{club}</h3><FaBeer /></div>
        <div className="goal"><div className="progress" style={getProgressBarWidth(getProgress(total,goal))}></div> {getProgress(total, goal)}</div>
    </div>
</div>
</>
   }



 export {TripsCount}
