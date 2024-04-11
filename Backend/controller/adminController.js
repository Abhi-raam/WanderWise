const Admin = require("../model/adminModel");
const News = require("../model/newsModel");
const Advertisement = require("../model/advModel");
const Banner = require("../model/bannerModel");
const Destination = require("../model/destinationModel");
const fs = require("fs");
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

  // advertimenet function
  uploadImg: (link, imageName, time) => {
    return new Promise((resolve, reject) => {
      Advertisement.create({ url: link, file_name: imageName, time }).then(
        (data) => {
          resolve(data);
        }
      );
    });
  },
  viewImg: () => {
    return new Promise((resolve, reject) => {
      Advertisement.find({}).then((data) => {
        resolve(data);
      });
    });
  },
  deleteAdv: (advId) => {
    return new Promise((resolve, reject) => {
      Advertisement.findByIdAndDelete({ _id: advId }).then((deletedData) => {
        fs.unlinkSync(`./uploads/${deletedData.file_name}`);
        resolve("Advertisement deleted");
      });
    });
  },

  // home banner functions
  uploadBannerImg: (imageName, time) => {
    return new Promise((resolve, reject) => {
      Banner.create({ file_name: imageName, time }).then((data) => {
        resolve(data);
      });
    });
  },
  viewBannerImg: () => {
    return new Promise((resolve, reject) => {
      Banner.find({}).then((data) => {
        resolve(data);
      });
    });
  },
  deleteBanner: (bannerId) => {
    return new Promise((resolve, reject) => {
      Banner.findByIdAndDelete({ _id: bannerId }).then((deletedData) => {
        fs.unlinkSync(`./uploads/${deletedData.file_name}`);
        resolve("Banner deleted");
      });
    });
  },

  // destination functions
  createDestination: (data, imageName) => {
    return new Promise((resolve, reject) => {
      Destination.create({
        name: data.destinationName,
        file_name: imageName,
        details: data.description,
        location: data.location,
        time: data.time,
      }).then((data) => {
        resolve("Destination Added");
      });
    });
  },
  viewDestination: () => {
    return new Promise((resolve, reject) => {
      Destination.find({}).then((data) => {
        resolve(data);
      });
    });
  },
  deleteDestination: (destinationId) => {
    console.log(destinationId);
    return new Promise((resolve, reject) => {
      Destination.findByIdAndDelete({ _id: destinationId }).then(
        (deletedDestinstion) => {
          fs.unlinkSync(`./uploads/${deletedDestinstion.file_name}`);
          resolve("Destination Deleted");
        }
      );
    });
  },

  getSearchData: (searchQuery) => {
    return new Promise(async (resolve, reject) => {
      const result = await Destination.find({
        "$or":[
          {
            name:{$regex:searchQuery, $options: 'i'}
          },
          {
            details:{$regex:searchQuery, $options: 'i'}
          },
          {
            location:{$regex:searchQuery, $options: 'i'}
          },
        ]
      })
      resolve(result)
    });
  },
};
