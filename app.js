var cron = require('node-cron');
var dotenv = require('dotenv');
dotenv.config();


cron.schedule('*/10 0 0 * * *', () => {
  var d = new Date();
  console.log(d.getUTCHours()+":"+d.getUTCMinutes()+":"+d.getUTCSeconds());
  console.log(process.env.TESTVAR);
  console.log('I am running !! Requesting to gnews api');
});