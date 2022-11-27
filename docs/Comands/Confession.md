---
sidebar_position: 6
---

# Confession
Confess your deepest secrets to the server.
### Confess
Using this command members can confess in the server anonymously.
:::important syntax
`/confess` `!secret`,<br/><br/>
**Note**: Any parameter prefixed with **`!`** is **required**, the others are optional. 
:::
`!secret` the secret you want to share anonymously.
### Edit
Yes, you can edit your confessions. You don't want to worry about typos in your message being left for all to read.
:::important syntax
`/confession edit` `!message id` `!secret`<br/><br/>
**Note**: Any parameter prefixed with **`!`** is **required**, the others are optional. 
:::
`message id` the message id of the confession you want to edit<br/>
`!secret` the new edited version of the secret you want to replace.
### Delete
Yes, you can delete your confessions. If you are worried you may have shared too much, simply delete your confession and none will know.
:::important syntax
`/confession delete` `!message id`<br/><br/>
**Note**: Any parameter prefixed with **`!`** is **required**, the others are optional. 
:::
`message id` the message id of the confession you want to delete<br/>

### Block
Yes, moderators can block the author from posting further confessions.
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
Yes, moderators can **ban** the author from the server. Are you sick of it when some strange member posts stranger, uncomfortable things in confessions and their anonymity is keeping them safe? Not anymore!
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
You can only edit/delete/ban/block if the messages within the past week.<br/>
Omega's Confession clears it data every week to preserver anonymity.
:::