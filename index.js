const SlackBot = require('slackbots');
const axios = require('axios')
const dotenv = require('dotenv')

dotenv.config()

// Initiate Slackbot
const bot = new SlackBot({
    token: `${process.env.BOT_TOKEN}`,
    name: 'helpit-bot'
});

// Start Handler
bot.on('start', () => {
    const params = {
        icon_emoji: ':nerd_face:'
    }

    bot.postMessageToChannel('slack-bot', 'Help is on the way', params);
})

// Error Handler
bot.on('error', (err) => {
    console.log(err);
});

// Message Handler
bot.on('message', (data) => {
    
    // If data type is not message or subtype is a bot message, return;
    if(data.type !== 'message' || data.subtype == 'bot_message') {
        return;
    }
    handleMessage(data.text);
})

// Response Handler
function handleMessage(message) {
    if(message.includes('help')) {
        runHelp();
    } else {
        // Run something else
    }
}

// Show Help
function runHelp() {
    const params = {
        icon_emoji: ':question:'
    }

    bot.postMessageToChannel('slack-bot', 'This is an automated help message', params);
    
}