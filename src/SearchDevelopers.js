import React from 'react';

const SearchDevelopers =({onSearchChange})=> {
  
        return (
            <div className="pa2">
                <input className="pa3 ma2 ba bw1 b--dark-red bg-light-green br3"
                    type="search"
                    placeholder="Search Developer"
                    onChange={onSearchChange}
                    
                />
            </div>
        )
    }
   

export default SearchDevelopers;