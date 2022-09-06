import React from "react";
import preloader from "../../assets/images/loader.svg"
import s from './Preloader.module.css'

let Preloader = (props) => {
    return (
        <div className={s.preloader}>
            <img alt='Loader' src={preloader}/>
        </div>
    )
}

export default Preloader