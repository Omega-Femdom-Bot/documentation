---
sidebar_position: 2
---

# Femdom
Bring the D/s Dynamics to discord server.
## Ownership
Dommes can own/disown subbies in the server and totally dominate them.
### Own
:::important syntax
`/own` `!member`<br/><br/>
**Note**: Any parameter prefixed with **`!`** is **required**, the others are optional. 
:::
### Disown
:::important syntax
`/disown` `!member`<br/><br/>
**Note**: Any parameter prefixed with **`!`** is **required**, the others are optional. 
:::
## Restrictions
Dommes can add/remove restrictions on the subs and train them to be obedient or just enjoy them suffering.
### Badword
Dommes can control sub's vocabulary and prevent them from using certain words.
#### Add
Add badwords so sub can't use those words again.
:::important syntax
`/badword add` `!member` `!word`<br/><br/>
**Note**: Any parameter prefixed with **`!`** is **required**, the others are optional. 
:::
`!member` the submissive you want to control.<br/>
`!word` the word you want to remove from sub's vocabulary.
#### Remove
Remove badwords from subs so they can use those words again.
:::important syntax
`/badword remove` `!member` `!word`<br/><br/>
**Note**: Any parameter prefixed with **`!`** is **required**, the others are optional. 
:::
`!member` the submissive you want to control.<br/>
`!word` the word you want to add to sub's vocabulary and allow them to use it.
#### Clear
Remove all badwords from subs and allow them to use all the words.
:::important syntax
`/badword clear` `!member`<br/><br/>
**Note**: Any parameter prefixed with **`!`** is **required**, the others are optional. 
:::
`!member` the submissive you want to control.<br/>
### Chastity
Using this Command dommes can hide all the NSFW channels from the subs and enjoy them beg to get the access back.
:::important syntax
`/chastity` `!member` `!access` `duration`<br/><br/>
**Note**: Any parameter prefixed with **`!`** is **required**, the others are optional. 
:::
`!member` the submissive you want to control.<br/>
`!access` chastity lock/unlock are two options you can choose.<br/>
`duration` after the given duration the sub the chastity will unlock automatically. you don't want to worry about it. <br/>*default duration is 10m*
### Emoji
Using this command Dommes can remove sub's emoji permission and prevent them from using emojis in the chat.
:::important syntax
`/emoji` `!member` `!access` `duration`<br/><br/>
**Note**: Any parameter prefixed with **`!`** is **required**, the others are optional. 
:::
`!member` the submissive you want to control.<br/>
`!access` allow/deny emoji are two options you can choose.<br/>
`duration` after the given duration the sub will allowed to use emoji again. <br/>*default duration is 10m*
### Gag
Using this command dommes can gag sub's mouth and convert their chat into gagged messages.
:::important syntax
`/gag` `!member` `!gag_option` `duration`<br/><br/>
**Note**: Any parameter prefixed with **`!`** is **required**, the others are optional. 
:::
`!member` the submissive you want to control.<br/>
`!gag_option` **[Kitty, Puppy, Cow, Piggy, Custom, Ungag]** are options you can choose.<br/>
`duration` after the given duration the gag will be removed from the sub. <br/>*default duration is 10m*
### Media
Using this command Dommes can allow/deny media permission for subs. That means subs can't sent any links, gifs and upload files in the server.
:::important syntax
`/media` `!member` `!access` `duration`<br/><br/>
**Note**: Any parameter prefixed with **`!`** is **required**, the others are optional. 
:::
`!member` the submissive you want to control.<br/>
`!access` allow/deny media are two options you can choose.<br/>
`duration` after the given duration the sub will allowed to use media again. <br/>*default duration is 10m*
### Tie
Using this command dommes can tie subs to a channel. Subs that got tied can only message in a specified channel.
:::important syntax
`/tie` `!member` `!channel` `duration` `extream`<br/><br/>
**Note**: Any parameter prefixed with **`!`** is **required**, the others are optional. 
:::
`!member` the submissive you want to control.<br/>
`!channel` the channel you want sub to be tied to.<br/>
`duration` after the given duration the sub will allowed to use media again. <br/>*default duration is 10m*<br/>
`!extream` setting this to **True** will remove view channel permissions from the sub for the rest of the channels.

## Moderation
With great powers comes great responsibility.
### Reset
this command will remove all the restrictions from the server member.
:::important syntax
`/reset` `!member` `disown`<br/><br/>
:::
`!member` the member you want to remove all the restrictions from.<br/>
`disown` setting this to **True** will also sets the member free from Ownership.

:::caution Permission Required
`Moderate Members Permission` is Required to use `/reset` command.
:::
### Safeword
use the safeword command to let members know that you are not comfortable with whats going on. **use wisely**.
:::important syntax
`/safeword`
:::
:::warning using `/safeword` will not remove restrictions it is just to let server member and admins know that you are not comfortable with the situation.
:::

