import React,{ useState } from 'react'
import { Grid, Typography } from '@material-ui/core' 
import DrawerContent from '../components/DrawerContent'

function PLayout({ children }) {

    const [drawer, setDrawer] = useState(false)
    const [title, setTitle] = useState("")
    const [content, setContent] = useState([])

    const toggleDrawer = (text) => {
        setDrawer(!drawer)
        setTitle(text)
    }

    const prod = (text) => {
        setContent(productOptions())
        toggleDrawer(text)
    }

    const book = (text) => {
        setContent(bookOptions())
        toggleDrawer(text)
    }

    const donat = (text) => {
        setContent(donationOptions())
        toggleDrawer(text)
    }

    return(
        <>
            <nav className={"navPrivate"}>
                <Typography className={"typo"} onClick={() => prod("Produtos")}>
                    <span>Produtos</span>
                </Typography>
                <Typography className={"typo"} onClick={() => book("Agendar")}>
                    <span>Agendar</span>
                </Typography>
                <Typography className={"typo"} onClick={() => donat("Doação")}>
                    <span>Doação</span>
                </Typography>
            </nav>
            {
                <DrawerContent color={'#2c2c2c'} title={title} content={content} 
                onToggleDrawer={toggleDrawer} open={drawer} />
            }
            <Grid container>
                { children }
            </Grid>
        </>    
    )
}

export default PLayout

const productOptions = () => [
    { name: "Novo", path: '/prod/novo'}, 
    { name: "Editar", path: '/prod/edit'}, 
    { name: "Remover", path: '/prod/del'}, 
    { name: "Lista", path: '/prod/list'}
]

const bookOptions = () => [{ name: "Novo", path: 'novo'}, { name: "Desmarcar", path: 'desm' }]
const donationOptions = () => [{ name: "Novo", path: 'novo'}, { name: "Lista", path: 'list'}]