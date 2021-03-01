var cron = require('node-cron');
 
cron.schedule('0 0 */2 * * *', () => {
  var d = new Date();

  console.log(d.getUTCHours()+":"+d.getUTCMinutes()+":"+d.getUTCSeconds());

  console.log('I am running !! Requesting to gnews api test cron');
});