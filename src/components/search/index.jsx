import React, { useState } from "react";
import './styles.css'


const Search=(props)=>{
    const {getdatafromsearchcomponent}=props



    const [inputvalue,setinputvalue]=useState('')
    const handleinputvalue=(e)=>{
        const {value}=e.target;
        setinputvalue(value)

    }


    
    const handlesubmit=(e)=>{
        e.preventDefault()
        getdatafromsearchcomponent(inputvalue)

    }

    return(
        <div onSubmit={handlesubmit} className="search">
            <form className="Search">
                <input name="search" onChange={handleinputvalue} value={inputvalue} placeholder="search anime" id="search"/>
                <button type="submit"><i class="fa-solid fa-magnifying-glass"></i> search</button>
            </form>



        </div>
    )
}

export default Search;