---
sidebar_position: 3
---

# Prison
Members with *prison master* role, which was configured on the setup, can lock brats in the prison and force them to write lines.
:::note Roles Removed
Omega will remove all the roles from the brat and will lock brats in prison. Once their punishment is served, their roles will be given back.
:::
### Lock
Use this command to lock brats in prison. You may only lock 2 brats per day, if you wish to lock more daily please support us on [Patreon](https://www.patreon.com/OmegaDiscordBot).
:::important syntax
`/prison lock` `!member` `!difficulty` `!lines`<br/><br/>
**Note**: Any parameter prefixed with **`!`** is **required**, the others are optional. 
:::
`!member` the brat you want to lock in prison.<br/>
`!difficulty` Choose the torture level in prison.<br/>
`!lines` Choose what type of lines should brats write.

### Unlock
Using this command *prison master* can unlock and release brats from prison.
:::important syntax
`/prison unlock` `!member`<br/><br/>
**Note**: Any parameter prefixed with **`!`** is **required**, the others are optional. 
:::
`!member` The member you want to release from the prison.

:::caution Permission Required
`Manage Roles Permission` is Required to use `/unlock` command or the member should the person who locked the brat in the first place.
:::

### Escape
Using this command *prisoners* can escape from prison without writing lines. Only if the prisoner has keys to escape. if you wish for more keys please support us on [Patreon](https://www.patreon.com/OmegaDiscordBot).
:::important syntax
`/prison escape`
::::
