const express = require("express");
const router = express.Router();
const adminModel = require("../model/adminModel");
const AdminFunctions = require("../controller/adminController");
const fs =require('fs')
const multer = require("multer");
// const upload = multer({dest:'uploads/'})

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});
const upload = multer({ storage: storage });


router.post("/create-news", (req, res) => {
  AdminFunctions.createNews(req.body).then((response) => {
    //created data as response
    console.log(response);
    res.status(200).json(response);
  });
});

router.get("/get-news", (req, res) => {
  AdminFunctions.getNews().then((news) => {
    //the whole news as response
    res.status(200).json(news);
  });
});

router.get("/get-news-data/:id", (req, res) => {
  const newsId = req.params.id;
  AdminFunctions.getSingleNews(newsId).then((response) => {
    //news data as response
    res.status(200).json(response);
  });
});

router.put("/update-news/:id", (req, res) => {
  const newsId = req.params.id;
  AdminFunctions.updateNews(newsId, req.body).then((response) => {
    //edited data as response
    res.status(200).json(response);
  });
});

router.delete("/delete-news/:id", (req, res) => {
  const newsId = req.params.id;
  AdminFunctions.deleteNews(newsId).then((deletedNews) => {
    //deleted data as response
    res.status(200).json(deletedNews);
  });
});

router.post("/upload-advertisement", upload.single("image"), (req, res) => {
  const imageName = req.file.filename
  AdminFunctions.uploadImg(req.body.link,imageName,req.body.time).then((response)=>{
    res.status(200).json()
  })
});

router.get('/get-advertisement',(req,res)=>{
    AdminFunctions.viewImg().then((response)=>{
        res.status(200).json(response)
    })
})

router.delete('/delete-adadvertisement/:id',(req,res)=>{
    const advId = req.params.id;
    AdminFunctions.deleteAdv(advId).then((msg)=>{
        res.status(200).json(msg)
    })
})

router.post('/upload-banner',upload.single("image"),(req,res)=>{
  // console.log(req.body);
  const bannerName = req.file.filename
  AdminFunctions.uploadBannerImg(bannerName,req.body.time).then((response)=>{
    res.status(200).json()
  })
})

router.get('/get-banner',(req,res)=>{
  AdminFunctions.viewBannerImg().then((response)=>{
    res.status(200).json(response)
  })
})
router.delete('/delete-banner/:id',(req,res)=>{
  const bannerId = req.params.id
  AdminFunctions.deleteBanner(bannerId).then((msg)=>{
    res.status(200).json(msg)
  })
})

router.post('/create-destination',upload.single("image"),(req,res)=>{
  const destinationImg = req.file.filename
  AdminFunctions.createDestination(req.body,destinationImg).then((response)=>{
    res.status(200).json(response)
  })
})

router.get('/get-destination',(req,res)=>{
  AdminFunctions.viewDestination().then((response)=>{
    res.status(200).json(response)
  })
})

router.delete('/delete-destination/:id',(req,res)=>{
  const destinationId = req.params.id
  AdminFunctions.deleteDestination(destinationId).then((msg)=>{
    res.status(200).json(msg)
  })
})

router.get('/get',(req,res)=>{
  const searchQuery = req.query.searchTerm;
  AdminFunctions.getSearchData(searchQuery).then((response)=>{
    res.status(200).json(response)
  })
})






















module.exports = router;
