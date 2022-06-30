module.exports = {

	//	These values will be ignored if you have set the environment variables (must be in uppercase)
	
		prefix: "-", // required, command prefix
		botToken: "OTM3Mjg4NjQwOTY1NTI1NTk2.G_A_Sd.-YX2WLCRnQPGenEW01vTKMGDk8vc01gDs3a1_E", // required, https://discordjs.guide/preparations/setting-up-a-bot-application.html#your-token
		clientId: "937288640965525596", // optional, the bot's client ID, leave empty to disable slash commands
		geniusApiToken: "_9i278pcsJ3MrHkTOTWJXH3X9fQ9l7uUSG3NvZfMZ_FVqiqx3o0LDxUBpJ2qwXlLqfNpQp89Yg98sOpawLWAQg", // optional, but recommended for lyrics search - https://genius.com/api-clients

		// https://github.com/JoshCunningHum/Dodong-webplayer
		// still under development, so you should leave these empty
		webplayer: "", // optional
		cors: "*", // optional - stored in an array for multiple socket connections in the future. Set to "*" to accept all
};