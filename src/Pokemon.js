import React from 'react';

import { Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Pokemon ({data}) {
    return (
        <div className="wrapper"> {data.map((poki) => 
            {return(<div>{poki}</div>)})}
        </div>

        
       
    )

}
