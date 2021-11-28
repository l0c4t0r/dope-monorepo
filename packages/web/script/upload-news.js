//Temporary upload script, paste a file from this folder below

import * as dotenv from 'dotenv';
dotenv.config({ path: __dirname + '/../../../.env' });
//import NewsMarkdown from './2021-11-24-08-00_test-file.md';

import S3 from 'aws-sdk/clients/s3';
import * as fs from 'fs';
import * as util from 'util';

const readFile = util.promisify(fs.readFile);

const S3_ID = process.env.S3_ID;
const S3_SECRET = process.env.S3_SECRET;
const S3_BUCKET = 'dope-wars-gg';

// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html
const s3client = new S3({
  apiVersion: '2006-03-01',
  accessKeyId: S3_ID,
  secretAccessKey: S3_SECRET,
});

const uploadToS3 = async (data) => {
  const params = {
    Body: data,
    Bucket: S3_BUCKET,
    Key: 'cms/2021-11-24-08-00_test-file2.md' //for getObject
  };
  await s3client.putObject(params).promise();
  return 'upload successful';
}

const main = async () => {
  try {
    const data = await readFile('./script/2021-11-24-08-00_test-file2.md');
    console.log(data);
    const process = await uploadToS3(data);
    console.log(process);
  } catch (e) {
    console.log(e);
  }
};

main();