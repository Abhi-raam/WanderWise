const Admin = require("../model/adminModel");
const News = require("../model/newsModel");

module.exports = {
  createNews: (newsData) => {
    const { newsHeading, description, time } = newsData;
    const newNews = {
      news_heading: newsHeading,
      news_description: description,
      time: time,
    };
    return new Promise((resolve, reject) => {
      News.create(newNews).then((data) => {
        resolve("News data added to db");
      });
    });
  },

  getNews: () => {
    return new Promise(async (resolve, reject) => {
      let news = await News.find({});
      resolve(news);
    });
  },

  getSingleNews: (id) => {
    return new Promise((resolve, reject) => {
      let news = News.findById({ _id: id });
      resolve(news);
    });
  },

  updateNews: (newsId, newsData) => {
    const { newsHeading, description, time } = newsData;
    const newNews = {
      news_heading: newsHeading,
      news_description: description,
      time: time,
    };
    return new Promise(async (resolve, reject) => {
      News.findByIdAndUpdate({ _id: newsId }, newNews).then((updatedNews) => {
        resolve(updatedNews);
      });
    });
  },
  
  deleteNews: (id) => {
    return new Promise(async (resolve, reject) => {
      News.findByIdAndDelete({ _id: id }).then((deletedUser) => {
        resolve(deletedUser);
      });
    });
  },
};
