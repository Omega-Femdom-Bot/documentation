---
sidebar_position: 3
---

# Prison
Members with *prison master* role, which was configured on the setup, can lock brats in the prison and force them to write lines.
:::note Roles Removed
Omega will remove all the roles from the brat and will lock brats in prison this is expected, roles will be given back after the punishment
:::
### Lock
Use this command to lock brats in prison. you can only lock 2 brats per day, if you want to lock more please support us on [Patreon](https://patreon.com/user?u=29087814).
:::important syntax
`/prison lock` `!member` `!difficulty` `!lines`<br/><br/>
**Note**: Any parameter prefixed with **`!`** is **required**, the others are optional. 
:::
`!member` the brat you want to lock in prison.<br/>
`!difficulty` choose the torture level in prison.<br/>
`!lines` choose what type of lines should brats write.

### Unlock
Using this command *prison master* can unlock brats from prison.
:::important syntax
`/prison unlock` `!member`<br/><br/>
**Note**: Any parameter prefixed with **`!`** is **required**, the others are optional. 
:::
`!member` the member you want to release from the prison.

:::caution Permission Required
`Manage Roles Permission` is Required to use `/unlock` command or the member should the person who locked the brat in the first place.
:::

### Escape
Using this command *prisoners* can escape from prison without writing lines. If the prisoner has keys to escape. if you want more keys please support us on [Patreon](https://patreon.com/user?u=29087814).
:::important syntax
`/prison escape`
::::
