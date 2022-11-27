---
sidebar_position: 2
---

# Femdom
Bringing the D/s Dynamics to your discord server.
## Ownership
Dommes can own/disown subbies in the server, claiming them as their property.
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
Dommes can add/remove restrictions on the subs and train them to be obedient, or just enjoy their suffering.
### Badword
Dommes can control a sub's vocabulary and prevent them from using certain words.
#### Add
Add badwords so sub are forbidden from speaking those words again.
:::important syntax
`/badword add` `!member` `!word`<br/><br/>
**Note**: Any parameter prefixed with **`!`** is **required**, the others are optional. 
:::
`!member` the submissive you want to control.<br/>
`!word` the word you want to remove from sub's vocabulary.
#### Remove
Remove badwords from subs so they are free to speak those words again.
:::important syntax
`/badword remove` `!member` `!word`<br/><br/>
**Note**: Any parameter prefixed with **`!`** is **required**, the others are optional. 
:::
`!member` the submissive you want to control.<br/>
`!word` the word you want to add to sub's vocabulary and allow them to use it.
#### Clear
Clear out a sub's badword list , giving them back uncensored speech.
:::important syntax
`/badword clear` `!member`<br/><br/>
**Note**: Any parameter prefixed with **`!`** is **required**, the others are optional. 
:::
`!member` the submissive you want to control.<br/>
### Chastity
Using this Command, Dommes can hide all the NSFW channels from the subs and enjoy them beg to get the access back.
:::important syntax
`/chastity` `!member` `!access` `duration`<br/><br/>
**Note**: Any parameter prefixed with **`!`** is **required**, the others are optional. 
:::
`!member` The submissive you want to control.<br/>
`!access` chastity lock/unlock to keep the subs chaste, or free them.<br/>
`duration` after the given duration the sub the chastity will unlock automatically. No hassle required! <br/>*default duration is 10m*
### Emoji
Using this command, Dommes can remove sub's emoji permission and prevent them from using emojis in the chat.
:::important syntax
`/emoji` `!member` `!access` `duration`<br/><br/>
**Note**: Any parameter prefixed with **`!`** is **required**, the others are optional. 
:::
`!member` the submissive you want to control.<br/>
`!access` allow/deny to forbid or grant back their right to use emojis.<br/>
`duration` after the given duration the sub will allowed to use emojis again. <br/>*default duration is 10m*
### Gag
Using this command, Dommes can gag sub's mouth and convert their chat into gagged messages.
:::important syntax
`/gag` `!member` `!gag_option` `duration`<br/><br/>
**Note**: Any parameter prefixed with **`!`** is **required**, the others are optional. 
:::
`!member` the submissive you want to control.<br/>
`!gag_option` **[Kitty, Puppy, Cow, Piggy, Custom, Ungag]** are options you can choose.<br/>
`duration` after the given duration the gag will be removed from the sub. <br/>*default duration is 10m*
### Media
Using this command, Dommes can allow/deny media permission for subs. That means subs can't sent any links, gifs and upload files in the server.
:::important syntax
`/media` `!member` `!access` `duration`<br/><br/>
**Note**: Any parameter prefixed with **`!`** is **required**, the others are optional. 
:::
`!member` the submissive you want to control.<br/>
`!access` allow/deny media are two options you can choose.<br/>
`duration` after the given duration the sub will be allowed to use media again. <br/>*default duration is 10m*
### Tie
Using this command, Dommes can tie subs to a channel. Subs that have been tied can only write messages in said channel.
:::important syntax
`/tie` `!member` `!channel` `duration` `extreme`<br/><br/>
**Note**: Any parameter prefixed with **`!`** is **required**, the others are optional. 
:::
`!member` the submissive you want to control.<br/>
`!channel` the channel you want sub to be tied to.<br/>
`duration` after the given duration the sub will allowed to message in other channels. <br/>*default duration is 10m*<br/>
`!extreme` setting this to **`True`** will remove view channel permissions from the sub for the rest of the channels, rendering them blind to all but the channel they are tied to.

## Moderation
With great powers comes great responsibility.
### Reset
this command will remove all the restrictions from the server member.
:::important syntax
`/reset` `!member` `disown`<br/><br/>
:::
`!member` The member you want to remove all the restrictions from.<br/>
`disown` Setting this to **True** will also sets the member free from Ownership, in case the need arises for moderation to step in.

:::caution Permission Required
`Moderate Members Permission` is Required to use `/reset` command.
:::
### Safeword
Use the safeword command to let members know that you are not comfortable with what's going on, and acts as a full red light. **Do use it wisely**.
:::important syntax
`/safeword`
:::
:::warning using `/safeword` will not remove restrictions it is just to let server member and admins know that you are not comfortable with the situation.
:::

