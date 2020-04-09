import React from 'react'
import { FormControl, InputGroup, } from 'react-bootstrap'

function SearchBar({ onSubmitMethod, placeHolder }) {

    return(
        <InputGroup>
            <FormControl placeholder={placeHolder ||'Digite algo'} />
        </InputGroup>
    )
}

export default SearchBar