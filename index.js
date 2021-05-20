const cron = require('node-cron');

cron.schedule('* * * * *', () => {
	console.log("This is logged every minute")
});