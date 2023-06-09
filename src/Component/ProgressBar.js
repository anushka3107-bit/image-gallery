import React, { useEffect } from 'react';
import useStorage from '../Hooks/useStorage';
import "./ProgressBar.css";
import { motion } from 'framer-motion';

const ProgressBar = ({file,setFile}) => {
  const {url,progress} = useStorage(file);
 
  useEffect(()=>{
    if(url){
      setFile(null);
    }
  },[url,setFile])

  return (
    <motion.div className='progress__bar'
    initial = {{width:0}}
    animate = {{width:progress + '%'}}
    ></motion.div>
  )
}

export default ProgressBar