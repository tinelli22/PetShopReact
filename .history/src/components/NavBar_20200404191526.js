import React,{ useEffect, useState } from 'react'
import Dropdown from './Dropdown'
import { userAlreadyLoggedService } from '../services/accountService'
import SubNavBar from './SubNavBar'

function Navbar({ user, onLogSuccess, }) {

  const [content, setContent] = useState([])

  userAlreadyLoggedService()
    .then(data => {
        onLogSuccess(data)
    })
    .catch(err => console.error(err))

  const onContentPrivate = () => {
    return(
      <>
        <span onClick={_ => setContent(getPrivateScheduleOptions)}>Agendar</span>
        <span onClick={_ => setContent(getPrivatePetOptions)}>Pet</span>
        <span onClick={_ => setContent(getPrivateStoreOptions)}>Loja</span>
        <span onClick={_ => setContent(getPrivateProductOptions)}>Produto</span>
        <span onClick={_ => setContent(getPrivateAccountOptions)}>Conta</span>
      </>
    )
  }

  const onContentPublic = () => (
    <>
      <span onClick={_ => setContent(getPublicOptions)}>Conta</span>
    </>
  )

  return(
    <>
      <nav className={"nav"}>
      {
        user ? onContentPrivate() : onContentPublic()
      }
      </nav>
      <SubNavBar content={content} />
    </>  
    )
}

export default Navbar

const getPublicOptions = [
  { name: 'Cadastrar', path: '/criar' },
  { name: 'Logar', path: '/login' },
]

const getPrivateAccountOptions = [
  { name: 'Editar', path: '/editar' },
  { name: 'Sair', fnc: null }
]

const getPrivateProductOptions = [
  { name: 'Novo', path: '/prod/novo' },
  { name: 'Produtos', path: '/prods' },
]

const getPrivateStoreOptions = [
  { name: 'Novo', path: '/loja' },
]

const getPrivatePetOptions = [
  { name: 'Novo', path: '/pet/novo' },
  { name: 'Pets', path: '/pets' },
]

const getPrivateScheduleOptions = [
  { name: 'Agendar', path: '/agenda/novo' },
  { name: 'Agendados', path: '/agenda' },
]