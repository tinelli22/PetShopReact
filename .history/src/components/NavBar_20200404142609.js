import React,{ useEffect } from 'react'
import Dropdown from './Dropdown'
import { userAlreadyLoggedService } from '../services/accountService'
import SubNavBar from './SubNavBar'

function Navbar({ user, onLogSuccess, }) {

  userAlreadyLoggedService()
    .then(data => {
        onLogSuccess(data)
    })
    .catch(err => console.error(err))

  return(
    <>
      <nav className={"nav"}>
      {
        user ? renderUserOptions() : renderPublicOptions()
      }
      </nav>
      <SubNavBar />
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

const getPrivatePetOptions = [
  { name: 'Novo', path: '/pet/novo' },
  { name: 'Pets', path: '/pets' },
]

const getPrivateScheduleOptions = [
  { name: 'Agendar', path: '/agenda/novo' },
  { name: 'Agendados', path: '/agenda' },
]