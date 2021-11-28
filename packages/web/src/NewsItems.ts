import fetch from 'isomorphic-fetch';

export const getNewsItem = async () => {
  const response = await fetch('https://dope-wars-gg.s3-us-west-1.amazonaws.com/cms/2021-11-24-08-00_test-file.md', {
  method: 'GET',
});
  return response.text()
};

export const getNewsItems = async () => {
  const response = await fetch('https://dope-wars-gg.s3-us-west-1.amazonaws.com/?prefix=cms', {
  method: 'GET',
});
  return response.text()
};


//Scrap using the sdk, error message: 'Missing credentials in config, if using AWS_CONFIG_FILE, set AWS_SDK_LOAD_CONFIG=1'

// import S3 from 'aws-sdk/clients/s3';
// const S3_ID = process.env.S3_ID;
// const S3_SECRET = process.env.S3_SECRET;
// const S3_BUCKET = 'dope-wars-gg';

// //https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html
// const s3client = new S3({
//   apiVersion: '2006-03-01',
//   accessKeyId: S3_ID,
//   secretAccessKey: S3_SECRET,
// });

//   export const getNewsItems = async () => {
//     try {
//       const params = {
//         Bucket: S3_BUCKET,
//         Prefix: 'cms/',
//         //Delimiter: 'cms/'
//         //Key: 'cms/' //for getObject
//       };


//       const news = await s3client.getObject({ Bucket: S3_BUCKET, Key: 'cms/2021-11-24-08-00_test-file.md' }).promise();
//       return news
//       // const newsItems = await s3client.listObjects(params).promise();
//       // return newsItems ? newsItems.toString() : '';
//     } catch (e) {

//       return `${e}`
//     }
//   };