module.exports = {
    // ...
    env: {
        token: "", // your bot token
        channel: "", // channel id from the channel the embed should get send to
        message: "" // message id from the message the system has send into the channel above
    },
    
    status: {
        type: "", // your status of the bot (WATCHING, LISTENING, PLAYING, STREAMING)
        activity: "", // your activity of the bot
    },

    buttons: [
        button = {
            emoji: "", // the emoji of the button (you can use custom emojis too) example: "👍"
            label: "", // the label of the button
            id: "", // the id of the button (you can use numbers or letters)
            role: "", // the id of the role which should get added to the user by clicking the button
            style: "", // the style of the button (PRIMARY, SECONDARY, SUCCESS, DANGER, LINK)
        },
    ],
};