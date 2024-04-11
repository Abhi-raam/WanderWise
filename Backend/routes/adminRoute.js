const express = require("express");
const router = express.Router();
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


router.post("/create-news",upload.single("image"),(req,res) => {
  const newsImgName = req.file.filename
  AdminFunctions.createNews(req.body,newsImgName).then((response) => {
    //created data as response
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

router.put("/update-news/:id",upload.single("image"), (req, res) => {
  const newsImgName = req.file.filename
  const newsId = req.params.id;
  AdminFunctions.updateNews(newsId, req.body,newsImgName).then((response) => {
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

router.post("/create-traditional-news",upload.single("image"), (req, res) => {
  const traditionalImgName = req.file.filename
  AdminFunctions.createTraditionalNews(req.body,traditionalImgName).then((response)=>{
    res.status(200).json("Data added")
  })
});

router.get('/get-traditional-news',(req,res)=>{
  AdminFunctions.viewTraditionalNews().then((response)=>{
    res.status(200).json(response)
  })
})

router.get('/get-traditional-news/:id',(req,res)=>{
  const newsId = req.params.id
  AdminFunctions.getSingleTraditonalNews(newsId).then((response)=>{
    res.status(200).json(response)
  })
})

router.put('/update-traditional-news/:id',upload.single("image"),(req,res)=>{
  const newsImgName = req.file.filename
  const newsId = req.params.id;
  AdminFunctions.updateraditonalNews(newsId,req.body,newsImgName).then((response)=>{
    res.status(200).json(response)
  })
})

router.delete('/delete-traditional-news/:id',(req,res)=>{
  const newsId = req.params.id
  AdminFunctions.deleteTraditionalNews(newsId).then((response)=>{
    res.status(200).json("News Deleted")
  })

})


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

router.get('/get-destination/:id',(req,res)=>{
  const destinationId = req.params.id
  AdminFunctions.getSingleDestination(destinationId).then((response)=>{
    res.status(200).json(response)
  })
})

router.put('/update-destination/:id',upload.single("image"),(req,res)=>{
  const destinationImg = req.file.filename
  const destinationId = req.params.id
  AdminFunctions.updataDestination(destinationId,req.body,destinationImg).then((response)=>{
    res.status(200).json(response)
  })

})

router.get('/get',(req,res)=>{
  const searchQuery = req.query.searchTerm;
  AdminFunctions.getSearchData(searchQuery).then((response)=>{
    res.status(200).json(response)
  })
})






















module.exports = router;
