const express = require('express')
const app = express()
const port = 5000
const cors =require('cors')
const categoris = require('./data/categories.json')
const news = require('./data/news.json')

app.use(cors());

app.get('/', (req , res)=>{
    res.send('the news auth is running')
})

app.get('/news', (req , res)=>{
    res.send(news)
})

app.get('/news/:id', (req , res)=>{
    const id = req.params.id
    console.log(id)
    const seleceted =news.find(n=> n._id === id)
    res.send(seleceted)
})

app.get('/categoris',(req , res)=>{
    res.send(categoris)

})

app.get('/categoris/:id', (req , res)=>{
    const id = parseInt(req.params.id)
    if(id == 0){
        res.send(news)
    }else{
        const  categorisNews =news.filter(n=> parseInt(n.category_id) === id)
        res.send(categorisNews)
    }
    
})




app.listen(port , ()=>{
    console.log(`Example app listening on port ${port}`)
})
