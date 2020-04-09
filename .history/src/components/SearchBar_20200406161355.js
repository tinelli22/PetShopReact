import React from 'react'
import { FormControl, InputGroup, Button } from 'react-bootstrap'

function SearchBar({ }) {

    return(
        <InputGroup>
            <FormControl placeholder={'Digite algo'} />
        </InputGroup>
    )
}

export default SearchBar