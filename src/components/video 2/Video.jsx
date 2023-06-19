import React from 'react'
import video from "../../images/ashleyallysephotos.mov";
import styles from './Video.module.css';

const Video1 = () => {
    return (
        <div className='div'>
        <video className={styles.video} src={video} autoPlay muted loop/>
      </div>
    )
};

export default Video1;