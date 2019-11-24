import React from 'react';

const SearchDevelopers =({onSearchChange})=> {
  
        return (
            <div className="pa2">
                <input className="pa2 ba bw4 b--purple bg-light-green br2"
                    type="search"
                    placeholder="Search Developer"
                    onChange={onSearchChange}
                    
                />
            </div>
        )
    }
   

export default SearchDevelopers;