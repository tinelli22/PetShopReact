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
  
  const onOpenSub = () => {
    const { style } = document.getElementById('subnav')
    style.display = style.display === 'none' ? 'block' : 'none'
  }

  const onContentPrivate = () => {
    return(
      <>
        <span id={'subitem'} onClick={_ => setContent(getPrivateScheduleOptions) && onOpenSub()}>Agendar</span>
        <span id={'subitem'} onClick={_ => setContent(getPrivatePetOptions) && onOpenSub()}>Pet</span>
        <span id={'subitem'} onClick={_ => setContent(getPrivateStoreOptions) && onOpenSub()}>Loja</span>
        <span id={'subitem'} onClick={_ => setContent(getPrivateProductOptions) && onOpenSub()}>Produto</span>
        <span id={'subitem'} onClick={_ => setContent(getPrivateAccountOptions) && onOpenSub()}>Conta</span>
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