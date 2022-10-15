### Reaction Roles Bot

This is a bot that allows you to create reaction roles. You can add as many roles as you want and you can also add as many emojis as you want. You can also add a description to the reaction role.

## Developers
<table>
   <tr>
      <td align="center"><a href="https://github.com/JanjyTapYT">
        <img src="https://github.com/JanjyTapYT.png?size=100" width="100px;" alt=""/>
        <br />
        <sub><b>JanjyTapYT</b></sub></a><br />
     </td>
      <td align="center"><a href="https://github.com/Stoneclane-Development">
        <img src="https://github.com/Stoneclane-Development.png?size=100" width="100px;" alt=""/>
        <br />
        <sub><b>Stoneclane Development</b></sub></a><br />
     </td>
   </tr>
</table>


## How to use
1. Create a new application on the [Discord Developer Portal](https://discord.com/developers/applications)
2. Create a new bot and copy paste the token in the "token" field in the config.js file
3. Invite the bot to your server
4. Create a new channel and copy paste the channel id in the "channel" field in the config.js file
5. Create a new button and copy paste the button id in the "button" field in the config.js file
6. Copy paste the emojis in the "emoji" fields in the config.js file
7. Run the bot with `node index.js` or `npm run start` or in development mode with `npm run dev`
8. Copy the message id and paste it in the "message" field in the config.js file
9. Restart the bot
10. Enjoy!

## How to add a new reaction button
1. Copy paste the following code in the buttons field in the config.js file
```js
button = {
            emoji: "", // the emoji of the button (you can use custom emojis too) example: "👍"
            label: "", // the label of the button
            id: "", // the id of the button (you can use numbers or letters)
            role: "", // the id of the role which should get added to the user by clicking the button
            style: "", // the style of the button (PRIMARY, SECONDARY, SUCCESS, DANGER, LINK)
        },
```
2. Place into the "id"  field the role id and place into the "emoji" field the id of the emoji or an emoji
3. Add a comma at the end of the previous reaction button
4. Save the file
5. Restart the bot

## How to remove a reaction button
1. Remove the reaction button code in the config.js file
2. Remove the comma at the end of the previous reaction button
3. Save the file
4. Restart the bot

## How to change the bot status
1. Change the "status" field in the config.js file
2. Save the file
3. Restart the bot


### Terms of Use
By using this bot, you agree to the following terms of use:

```md
- You are not allowed to sell this bot or any part of it
- You are not allowed to claim this bot as your own
- You are allowed to modify the code of this bot as long as you don't sell it or claim it as your own
- You have the permission to share in writing, but you have to mention us, our server, in the article.
- You can't speak in a "we did it" way.
```



### More Information

## Support
If you need help, you can join our [Discord Server](https://discord.gg/M7kaJDZtyY)

## Contributing
If you want to contribute to this project, you can create a pull request or join our [Discord Server](https://discord.gg/M7kaJDZtyY)

## Credits
- [JanjyTapYT](https://github.com/JanjyTapYT) - Developer
- [Stoneclane Development](https://github.com/Stoneclane-Development) - Development Team by JanjyTapYT

## License
This bot is licensed under the [MIT License](https://github.com/Stoneclane-Development/Reaction-Roles-Bot/blob/main/LICENSE)
