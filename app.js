var cron = require('node-cron');
 
cron.schedule('0 0 */2 * * *', () => {
  var d = new Date();

  console.log(d.getUTCHours()+":"+d.getUTCMinutes()+":"+d.getUTCSeconds());
  console.log('THIS IS EXECUTED AFTER EVERY 2 HOURS');
  console.log('I am running !! Requesting to gnews api');
});