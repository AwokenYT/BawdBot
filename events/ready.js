const Event = require("../structures/event.js");

module.exports = new Event("ready", client => {
	console.log("--------- Bawdbot is ready! ---------");
	client.user.setActivity(`kailey`, { type: 'PLAYING' });
});