// RAFC

import React, {useState} from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ( {setCategories } ) => {


    const [inputValue , setInputValue] =  useState('');

    const handleInput =(e) => {

     // console.log(e.target.value)
       setInputValue(e.target.value)
      // console.log(e.target.value)
    }

   const handleSubmit = (e) => {
            e.preventDefault();
            
            setCategories( cats => [ inputValue ])

          //  console.log('Submit Hecho');
            setInputValue('');
    }

    const handleFocus = () => {
        setInputValue('');
    }


    return (
        <>
        <form onFocus={ handleFocus} onSubmit={handleSubmit}>
                {/* <h2>{ inputValue}</h2> */}
                <input 
                    type="text"
                    value={inputValue}
                    onChange={handleInput}
                    />
        </form>
        </>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired ,
    
}
