---
sidebar_position: 2
---

# Femdom
Bringing the D/s Dynamics to your discord server.

## Ownership
Dommes can own or disown subbies in the server, claiming them as their property.

### Own
The `/own` command allows a Domme to claim a sub as their property.

:::important Syntax
`/own` `!member`<br/><br/>
**Note**: Any parameter prefixed with **`!`** is **required**.
:::

### Disown
The `/disown` command allows a Domme to release a sub from their ownership.

:::important Syntax
`/disown` `!member`<br/><br/>
**Note**: Any parameter prefixed with **`!`** is **required**.
:::
## Restrictions
Dommes can add or remove restrictions on subs and train them to be obedient, or just enjoy their suffering.

### Badword
Dommes can control a sub's vocabulary and prevent them from using certain words.

#### Add
The `/badword add` command allows a Domme to add badwords so subs are forbidden from speaking those words again.

:::important Syntax
`/badword add` `!member` `!word`<br/><br/>
**Note**: Any parameter prefixed with **`!`** is **required**.
:::

- `!member`: the submissive you want to control.
- `!word`: the word you want to remove from the sub's vocabulary.

#### Remove
The `/badword remove` command allows a Domme to remove badwords from subs so they are free to speak those words again.

:::important Syntax
`/badword remove` `!member` `!word`<br/><br/>
**Note**: Any parameter prefixed with **`!`** is **required**.
:::

- `!member`: the submissive you want to control.
- `!word`: the word you want to add to the sub's vocabulary and allow them to use it.

#### Clear
The `/badword clear` command allows a Domme to clear out a sub's badword list, giving them back uncensored speech.

:::important Syntax
`/badword clear` `!member`<br/><br/>
**Note**: Any parameter prefixed with **`!`** is **required**.
:::

- `!member`: the submissive you want to control.

### Chastity
The `/chastity` command allows Dommes to hide all NSFW channels from subs and enjoy them begging to get access back.

:::important Syntax
`/chastity` `!member` `!access` `duration`<br/><br/>
**Note**: Any parameter prefixed with **`!`** is **required**.
:::

- `!member`: the submissive you want to control.
- `!access`: the options `chastity lock` or `unlock` to keep the subs chaste or free them.
- `duration`: the length of time after which the chastity will automatically unlock. No hassle required! *default duration is 10 minutes*

### Emoji
The `/emoji` command allows Dommes to remove a sub's emoji permission and prevent them from using emojis in chat.

:::important Syntax
`/emoji` `!member` `!access` `duration`<br/><br/>
**Note**: Any parameter prefixed with **`!`** is **required**.
:::

- `!member`: the submissive you want to control.
- `!access`: the options `allow` or `deny` to grant or forbid the sub's right to use emojis.
- `duration`: the length of time after which the sub will be allowed to use emojis again. *default duration is 10 minutes*

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
Using this command, Dommes can allow or deny media permission for subs. This means subs can't send any links, gifs, or upload files in the server.
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
`!channel` the channel you want the sub to be tied to.<br/>
`duration` after the given duration the sub will be allowed to message in other channels. <br/>*default duration is 10m*<br/>
`!extreme` setting this to **`True`** will remove view channel permissions from the sub for the rest of the channels, rendering them blind to all but the channel.

## Moderation
With great powers comes great responsibility.
### Reset
This command will remove all the restrictions from the server member.
:::important syntax
`/reset` `!member` `disown`<br/><br/>
:::
`!member` The member you want to remove all the restrictions from.<br/>
`disown` Setting this to **True** will also sets the member free from Ownership, in case the need arises for moderation to step in.

:::caution Permission Required
`Moderate Members Permission` is Required to use `/reset` command.
:::
### Safeword
Use the safeword command to let members know that you are not comfortable with what's going on, and acts as a full red light. **Use it wisely**.
:::important syntax
`/safeword`
:::
:::warning Using `/safeword` will not remove restrictions, it is just to let server members and admins know that you are not comfortable with the situation.
:::


