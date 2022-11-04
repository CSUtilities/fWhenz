import React from 'react';

export default function Dashboard(){ 
  return (
    <div className='dashboard'>
      <h3>fWhenz</h3>
      <h4>Find your friends!</h4>
      <span>
      <label>Enter City</label>
      <input type='text'></input>
      </span>
      <span>
      <label>Enter State (ie. CA)</label>
      <input type='text'></input>
      </span>
      <button>Search</button>
    </div>
  )
}