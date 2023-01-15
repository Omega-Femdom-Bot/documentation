---
sidebar_position: 6
---

# Confession
Confess your deepest secrets to the server in a safe and anonymous way.

### Confess
With this command, members can share their secrets anonymously with the server.

:::important syntax
`/confess` `!secret`<br/><br/>
**Note**: Any parameter prefixed with **`!`** is **required**. 
:::
`!secret` the secret you want to share anonymously.

### Edit
Should you wish to edit your confession, you can do so with this command. 

:::important syntax
`/confession edit` `!message_id` `!secret`<br/><br/>
**Note**: Any parameter prefixed with **`!`** is **required**. 
:::
`message_id` the ID of the confession message you want to edit.<br/>
`!secret` the new, edited version of the secret you want to replace.

### Delete
If at any time you feel that you may have shared too much, you can delete your confession with this command. 

:::important syntax
`/confession delete` `!message_id`<br/><br/>
**Note**: Any parameter prefixed with **`!`** is **required**. 
:::
`message_id` the ID of the confession message you want to delete.

### Block
Yes, moderators can block the author from posting further confessions.

:::important syntax
`/confession block` `!message id`

**Note**: Any parameter prefixed with **`!`** is **required**, the others are optional. 
:::

`!message id` the message id to block the author of the confession.

### Unblock
Yes, moderators can unblock the author and allow them to post further confessions.

:::important syntax
`/confession unblock` `!message id`

**Note**: Any parameter prefixed with **`!`** is **required**, the others are optional. 
:::

`!message id` the message id to unblock the author of the confession or it can also be the member's id.

### Ban
Yes, moderators can **ban** the author from the server. Are you tired of strange members posting uncomfortable things in confessions and their anonymity keeping them safe? Not anymore!

:::important syntax
`/confession ban` `!message id`

**Note**: Any parameter prefixed with **`!`** is **required**, the others are optional. 
:::

`!message id` the message id to ban the author of the confession.

:::caution Permission Required
`Manage Message Permission` is required to use `/confession block` or `/confession unblock`.
`Ban Permission` is required to use `/confession ban`.
:::

:::warning Anonymity
You can only edit/delete/ban/block messages within the past week.
Omega's Confession clears its data every week to preserve anonymity.
:::
