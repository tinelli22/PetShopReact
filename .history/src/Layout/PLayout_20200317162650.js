import React,{ useState } from 'react'
import { Grid, Typography } from '@material-ui/core' 

function PLayout({ children }) {

    const [drawer, setDrawer] = useState(false)
    const [title, setTitle] = useState("")
    const [content, setContent] = useState([])

    const toggleDrawer = (text) => {
        setDrawer(!drawer)
        setTitle(text)
    }

    return(
        <>
            <nav className={"navPrivate"}>
                <Typography className={"typo"}>
                    <span>Produtos</span>
                </Typography>
                <Typography className={"typo"}>
                    <span>Agendar</span>
                </Typography>
                <Typography className={"typo"}>
                    <span>Doação</span>
                </Typography>
            </nav>
            {
                
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