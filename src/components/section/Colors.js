import React from 'react';

const Colors = ({colors}) => {
    return ( 
        <div>
            {colors.map((color, index) => (
            <button key={index} style={{background: color}}>0</button>
                ))}
        </div> );
}
 
export default Colors;