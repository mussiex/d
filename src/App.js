import Heading from './Heading'
import Middle from './Middle'
import Foot from './Foot'
import './App.scss';
import data from'./data'
import React, { useState} from 'react';
import { BasicTable } from './BasicTable';


function App() {
  const  [profile,setProfile]= useState(data)
  return (
   <div>
     <Heading companyinfo={profile[0]}/>
     <Middle/>
     <BasicTable/>
     <Foot/>
   </div>
  );
}

export default App;
