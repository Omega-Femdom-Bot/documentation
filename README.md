documenttion# Omega Documentation

Welcome to Omega Docs, home to everything you want to know about Omega. You will be able to find out almost everything about Omega here.
***
### What is Omega
**Omega is BDSM Discord bot** that helps Dommes to own subs and control their interactions in Discord. Omega got many fun activities and bot commands to keep you busy and to explore your kinky Discord life. Omega's primary purpose is to be an easy-to-use bot that you can have fun with!

### What can this bot do?
- Omega can keep track of your Subs/Domme, like who owns who, who is in charge of whom.
- Omega can assist you in role-play actions like *hug, kiss, cuddle...*  and even NSFW once like *fuck, spank, choke...*
- With the help of Omega Dommes can add restrictions to subs like gagging, disabling emojis, and more.
- Omega makes it easy for Dommes to punish the brats and force them to write lines.
- Omega also got Economy and Games, members can sell, buy, collect the usual. the special is you can also collect server sticker and emojis (only if enabled) and others can't access it.
- and more utility functions.
***
## Getting Started

###### Legend
`<required arg> [optional arg]`
***
### Setup
Invite the bot to the server. [invite right now](https://discord.com/api/oauth2/authorize?client_id=1025629384629043262&permissions=8&scope=bot%20applications.commands) 
There are 3 modules **`femdom, confession, prison`**. we have to config them separately for good reasons. 
 
 - *estimated time 1-2 mins* 
 - *Administrative permission is required.*

##### `/config femdom`

 This module enables the D/s dynamics in the server. You know, the basic BDSM stuff.

Usage
> `/config femdom <@domme> <@subby> <#gag log> [@owned] [@switch] [enable=True]` 
 
 *Arguments*
>  - `domme` : *`<@domme role>`*, members with this role will be considered as Dominant.
>  - `subby` : *`<@subby role>`*, members with this role will be considered as Submissive.
>  - `gag_logs` : *`<#gag log channel>`*, Bot will log gagged messages for Dommes to see.
>  - `owned` : `[@owned role]` bot will give this role for owned subs and will be taked away if domme disowns them later.
>  - `switch` : *`[@switch role]`* member with this role...... you get the point. 
>  - `enable` : by default its `True` make it `False` if you want to disable this module in the server.


##### `/config confession`
 Enable this module if you want members to confess, in server.

Usage
> `/config confession <#confession channel> [enable=True]`

*Arguments*
> - `confession channel` : channel where confessions will be posted
> - `enable` : by default its `True` make it `False` if you want to disable this module in the server.

##### `/config prison`
 Enable this module to punish sub by forcing them to write lines

Usage
> `/config prison <#prison> <@prisoner> <@prison master> [enable=True]`

*Arguments*
> - `prison` : channel to lock brats in and punish them.
> - `prisoner` : prisoner role, this role will be given to brats while the are in prison.
> - `prison master`: only members with this role can lock and punish brats.

***
### BDSM Commands
##### `/own`
 Use own command to own subs in the server, it will ask  for sub's consent if they accept congratulation, you got a new submissive in server. if they deny better keep looking for a better.

Usage
> `/own <@member>`

*Arguments*
> - `member` : `<@member>` mention the sub you want to own.
***
##### `/disown`
 Use disown command to disown your subs and set them free.

Usage
> `/disown <@member>`

*Arguments*
> - `member` : `<@member>` mention your sub that you want to disown.
***
##### `/gag`
 Use gag command and pass the arguments to gag a subs of your choice. Just like gags in real life subs will find it difficult to speak in server.
 
Usage
> `/gag <@member> <gag type> [time]`

*Arguments*
> - `member` : *`<@member>`* mention the sub you want to gag.
> - `gag_type` : choose a gag option from the list.
> >*`Puppy gag, Kitty gag, Piggy gag, Custom gag, Ungag`*
> - `time` : after the specified time duration sub will be ungagged. If you want to ungag before the time runs out, use the command `/gag`  and choose `Ungag`  as `gag type`


***
##### `/tie`
 Use this command to tie subs to a channel, so that every message from the subs will be deleted if they did't message in the channel they tied to.

Usage
> `/tie <@member> <#channel> [time] [extreme]`

*Arguments*
> - `member` : `<@member>` mention the sub you want to tie.
> - `channel` : `<#channel>` mention the channel you want sub to be tied to.
> - `time` : `<time>` after the specified time duration sub will be untied from the channel. If you want to untie before the time runs out, use the command `/untie`
> - `extreme` : `True or False` if True then the submissive will not have view permission in any other chanels

***
##### `/untie`
Use this command to untie subs and set them free.

Usage
> `/untie <@member>`

*Arguments*
> - `member` : `<@member>` mention the sub you want to untie and set them free.
***
##### `/emoji`
Using emoji command Dommes can allow/deny emoji permission for subs.

Usage
> `/emoji <@member> <access> [time]`

*Arguments*
> - `member` : `<@member>` mention the sub whose emoji you want to control.
> - `access` : choose a option from the list.
>> `Allow Emoji` , `Deny Emoji`
> - `time` : after the specified time duration sub will get access to emojis
***
##### `/media`
Using media command Dommes can allow/deny media permission for subs. That means subs can't sent any links, gifs and upload files in the server.

Usage
> `/media <@member> <access> [time]`

*Arguments*
> - `member` : `<@member>` mention the sub whose media permission you want to control.
> - `access` : choose a option from the list.
>> `Allow Media` , `Deny Media`
> - `time` : after the specified time duration sub will get access to Media.
***
##### `/chastity`
Using chastity command Dommes can allow/deny nsfw channel permission for subs. That means subs can't view nsfw channels in the server.

Usage
> `/chastity <@member> <access> [time]`

*Arguments*
> - `member` : `<@member>` mention the sub whose chastity permission you want to control.
> - `access` : choose a option from the list.
>> `Allow chastity` , `Deny chastity`
> - `time` : after the specified time duration sub will get access to Media.
***
##### `/badword`
###### Add
Using add command Dommes can add restriction on subs vocabulary.

Usage
> `/badword add <@member> <word>`

*Arguments*
- `member` : `<@member>` mention the sub whose vocabulary you want to control.
- `word` : the "word" you want to add as bad word.
<details>
<summary> Note </summary> 
⚠️ You can only add 35 words ⚠️<br>
</details>

###### Remove
Using remove command Dommes can remove restricted word from subs vocabulary.

Usage
> `/badword remove <@member> <word>`

*Arguments*
- `member` : `<@member>` mention the sub whose vocabulary you want to control.
- `word` : the "word" you want to remove from restricted word of sub, so that subs get to use them again.

###### Clear
Using Clear command Dommes can remove all restricted words from subs vocabulary.

Usage
> `/badword clear <@member>`

*Arguments*
- `member` : `<@member>` mention the sub whose vocabulary you want to control.
***
##### `/status`
Using status command you can check server profile of a member get information about them.

Usage
> `/status [@member]`

*Arguments*
>- `member` : `[@member]` mention the member whose server profile you want to see.
***

##### `/prison lock`
Using this command members can lock brats in prison and punish them.

Usage
> `/prison lock <@member> <difficulty> <lines>`

*Arguments*
> - member : mention a member who you want to punish.
> - difficuly : specify the the difficulty level.
> - lines : choose what type of line to write.

##### `/prison unlock`
Using this command you can unlock brats from prison.

Usage
> `/prison unlock <@member>`

*Arguments*
> - member : mention a member who you want to unlock from prison.

##### `/prison escape`
Using this command you can get free from prison.

Usage
> `/prison escape`
***
### Confession
##### `/confess`
##### `/confession edit`
##### `/confession block`
##### `/confession delete`
##### `/confession ban`
##### `/confession unblock`
### Economy
##### `/daily`
##### `/hourly`
##### `/give`
##### `/rob`
##### `/deposit`
##### `/withdraw`
##### `/balance`
##### `/leaderboard`
##### `/shop add_item`
##### `/shop delete_item`
##### `/shop edit_item`
##### `/shop inventory`
##### `/shop sell`
##### `/shop gift`
##### `/shop view`
### Games
##### `/blackjack`
##### `/roulette`
##### `/connectfour`
### Role Play
all the commands stating with owo
### Admin
##### `/reset`







