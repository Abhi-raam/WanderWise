const express = require("express")
const router = express.Router()
const adminModel =require('../model/adminModel')
const AdminFunctions = require('../controller/adminController')

router.post('/create-news',(req,res)=>{
    AdminFunctions.createNews(req.body).then((response)=>{  //created data as response
        console.log(response);
        res.status(200).json(response)
    })
})

router.get('/get-news',(req,res)=>{
    AdminFunctions.getNews().then((news)=>{  //the whole news as response
        res.status(200).json(news)
    })
})

router.get('/get-news-data/:id',(req,res)=>{
    const newsId = req.params.id
    AdminFunctions.getSingleNews(newsId).then((response)=>{  //news data as response
        res.status(200).json(response)
    })
})

router.put('/update-news/:id',(req,res)=>{
    const newsId = req.params.id
    AdminFunctions.updateNews(newsId,req.body).then((response)=>{  //edited data as response
        res.status(200).json(response)
    })
})

router.delete('/delete-news/:id',(req,res)=>{
    const newsId = req.params.id
    AdminFunctions.deleteNews(newsId).then((deletedNews)=>{  //deleted data as response
        res.status(200).json(deletedNews)
    })
})








module.exports = router