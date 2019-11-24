import React from 'react';

const Scroll = (props) => {

    return (
        <div style={{overflowY:'scroll',top:'0',zIndex:'100', border:'5px solid red'}}>
            {props.children}
        </div>
        );
}

export default Scroll;