const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_SECRET_KEY,
  secure: true,
});

const uploader = (image, path) => new Promise((resolve, reject) => {
  cloudinary.uploader.upload(image,
    {
      folder: `my-ecom-app/${path}`,
    }, (error, result) => {
    if(error) {
      console.log("error", error)
      return reject(error);
    }

    return resolve({
      secure_url: result?.secure_url,
      public_id: result?.public_id
    })
  })
})


const uploadImages = async (images, path) => new Promise((resolve, reject) => {
  const upload = images.map((image) => uploader(image, path))
  Promise.all(upload)
    .then(val => resolve(val))
    .catch(error => reject(error))
})

module.exports = {
  uploadImages,
  uploader
}