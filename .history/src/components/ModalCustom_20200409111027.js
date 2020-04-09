import React from 'react'
import { Modal, Button } from 'react-bootstrap'


function ModalCustom({ title, body, show, onToggle, id }) {

    return(
        <Modal show={show || false} onHide={_ => onToggle()}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>{body}</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={_ => onToggle()}>Cancelar</Button>
                <Button variant="primary">OK</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalCustom