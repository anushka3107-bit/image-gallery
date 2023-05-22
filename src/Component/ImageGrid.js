import React from 'react';
import './ImageGrid.css';
import useFirestore from "../Hooks/useFirestore";
import {motion} from 'framer-motion';

const ImageGrid = ({setSelectedImg}) => {

    const {docs} = useFirestore('images');
    console.log(docs);

  return (
    <div className='image__grid'>
       {docs && docs.map(doc => (
        <motion.div className="image__wrap" key={doc.id}
        layout 
        whileHover={{opacity :  1}}
        onClick={() => setSelectedImg(doc.url)}
        >
             <motion.img src={doc.url} alt= "pics"

                initial = {{opacity:0}}
                animate= {{opacity:1}}
                transition ={{delay
                :1 }}
             />
        </motion.div>
       ))}
    </div>
  )
}

export default ImageGrid