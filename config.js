module.exports = {
    // ...
    env: {
        token: "", // your bot token
        channel: "", // channel id from the channel the embed should get send to
        message: "", // message id from the message the system has send into the channel above
    },
    
    status: {
        type: "", // your status of the bot (WATCHING, LISTENING, PLAYING, STREAMING)
        activity: "", // your activity of the bot
    },

    roles: [
        role = {
            id: "", //id of the role
            emoji: "", // emoji for the role example: ⚫
        },
        
    ],
}