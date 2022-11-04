import React from 'react';
import { useAppSelector } from '../redux/hooks';

export default function Footer(props: { setDisplay: React.Dispatch<React.SetStateAction<string>>}){
const setDisplay = props.setDisplay;
const user = useAppSelector((state) => state.user.value)

  return (
    <div id='footer'>
        <a href='#' 
          onClick={()=>{
            if(user) setDisplay('Dashboard')}
          }>DashBoard</a>
        <a href='#' 
          onClick={()=>{
            if(user) setDisplay('List')}
        }>List</a>
        <a href='#' 
          onClick={()=>{
            if(user) setDisplay('Profile')}
        }>Profile</a>
    </div>
  );
}
