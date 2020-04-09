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
                <Typography className={"typo"} onClick={() => prod()}>
                    <span>Produtos</span>
                </Typography>
                <Typography className={"typo"} onClick={() => book()}>
                    <span>Agendar</span>
                </Typography>
                <Typography className={"typo"} onClick={() => donat()}>
                    <span>Doação</span>
                </Typography>
            </nav>
            {
                <DrawerContent color={'#2c2c2c'} title={title} content={content} 
                onToggleDrawer={toggleDrawer} />
            }
            <Grid container>
                { children }
            </Grid>
        </>    
    )
}

export default PLayout

const productOptions = () => ["Novo", "Editar", "Remover", "Lista"]
const bookOptions = () => ["Novo", "Desmarcar",]
const donationOptions = () => ["Novo", "Lista",]