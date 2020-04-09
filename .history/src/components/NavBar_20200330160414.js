import React from 'react'
import Dropdown from './Dropdown'

function Navbar({ user }) {

  const renderUserOptions = () => (
    <>
      <Dropdown label={'LOJA'} content={getPrivateStoreOptions} />
      <Dropdown label={'PRODUTO'} content={getPrivateProductOptions(user.store ? true : false)} />
      <Dropdown label={'CONTA'} content={getPrivateAccountOptions} />
    </>
  )

  const renderPublicOptions = () => (
    <Dropdown label={'CONTA'} content={getPublicOptions} />
  )

  return(
    <>
      <nav className={"nav"}>
      {
          user ? renderUserOptions() : renderPublicOptions()
      }
      </nav>
    </>  
    )
}

export default Navbar

const getPublicOptions = [
  { name: 'Cadastrar', path: '/criar' },
  { name: 'Logar', path: '/login' },
]

const getPrivateStoreOptions = hasStore => [
  { name: hasStore ? 'Editar' : 'Cadastrar', path: '/loja' },
]

const getPrivateAccountOptions = [
  { name: 'Editar', path: '/editar' },
  { name: 'Sair', fnc: null }
]

const getPrivateProductOptions = [
  { name: 'Novo', path: '/prod/novo' },
  { name: 'Produtos', path: '/prods' },
]