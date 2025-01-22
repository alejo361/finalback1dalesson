import express from 'express'    
import handlebars from 'express-handlebars'

const app = express()

app.engine('handlebars', handlebars.engine())
app.set('view engine', 'handlebars')

app.listen(8080 , ()=>{
    console.log('Servidor conectado en 8080')
})