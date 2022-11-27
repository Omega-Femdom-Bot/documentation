---
sidebar_position: 6
---

# Confession
Confess your deepest secrets in the server.
### Confess
Using this command members can confess in the server anonymously.
:::important syntax
`/confess` `!secret`,<br/><br/>
**Note**: Any parameter prefixed with **`!`** is **required**, the others are optional. 
:::
`!secret` the secret you want to share anonymously.
### Edit
yes you can edit your confessions. you don't want to worry about typo in your message.
:::important syntax
`/confession edit` `!message id` `!secret`<br/><br/>
**Note**: Any parameter prefixed with **`!`** is **required**, the others are optional. 
:::
`message id` the message id of the confession you want to edit<br/>
`!secret` the new edited version of the secret you want to replace.
### Delete
yes you can delete your confessions. you don't want to worry about you shared to much you can delete your confessions. 
:::important syntax
`/confession delete` `!message id`<br/><br/>
**Note**: Any parameter prefixed with **`!`** is **required**, the others are optional. 
:::
`message id` the message id of the confession you want to delete<br/>

### Block
Yes moderators, can Block the author from posting further confessions.
:::important syntax
`/confession block` `!message id`<br/><br/>
**Note**: Any parameter prefixed with **`!`** is **required**, the others are optional. 
:::
`!message id` the message id to block the author of the confession.
### Unblock
Yes moderators, can unblock the author and allow to post further confessions.
:::important syntax
`/confession unblock` `!message id`<br/><br/>
**Note**: Any parameter prefixed with **`!`** is **required**, the others are optional. 
:::
`!message id` the message id to unblock the author of the confession or it can also be member id.
### Ban
Yes moderators, can **Ban** the author from the server. are you sick of it when some wired member post wired stuff in confessions and you want to ban them but can't not anymore.
:::important syntax
`/confession ban` `!message id`<br/><br/>
**Note**: Any parameter prefixed with **`!`** is **required**, the others are optional. 
:::
`!message id` the message id to ban the author of the confession.
:::caution Permission Required
`Manage Message Permission` is Required to use `/confession block` or `/confession unblock`.<br/>
`Ban Permission` is Required to use `/confession ban`
:::
:::warning Anonymity
You can only edit/delete/ban/block if the message is with in a week.<br/>
bot clears it data every week to preserver anonymity.
:::