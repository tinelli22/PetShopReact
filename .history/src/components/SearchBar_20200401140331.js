import React from 'react'
import { FormControl, InputGroup, Button } from 'react-bootstrap'

function SearchBar({ }) {

    return(
        <InputGroup>
            <FormControl placeholder={'Digite algo'} />
            <InputGroup.Append>
                <Button>Buscar</Button>
            </InputGroup.Append>
        </InputGroup>
    )
}

export default SearchBar