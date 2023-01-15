---
sidebar_position: 2
---

# Setup
To begin using Omega, first [invite](https://discord.com/api/oauth2/authorize?client_id=1025629384629043262&permissions=8&scope=bot%20applications.commands) the bot to your server with admin permissions. Once the bot is added, elevate Omega's role to the top of the role list. (The higher the role is on the list, the better it will function).

The next step is to configure 3 modules separately. This process should take about 1-2 minutes.

## Configuration

### Femdom
This command will enable or disable the Femdom Module in your server and configure the roles.

:::important Syntax
`/config femdom` `!domme` `!subby` `!gag_log` `owned` `switch` `enable`	<br/><br/>
**Note**: Any parameter prefixed with **`!`** is **required**, the others are optional.
:::

- `!domme`, `!subby`, `switch`: Members with these roles will be considered as dominant, submissive, and switch, respectively.
- `!gag_log`: This is the channel where Omega will post sub's gagged messages.
- `owned`: This is the role given to subs if they are owned by a domme. The role will be removed if they are disowned.
- `enable`: Setting this to `True` or `False` will enable or disable the Femdom Module in the server. **Default is `True`**.

### Confession
This command enables or disables the Confession Module in your server, allowing server members to confess secrets anonymously.

:::important Syntax
`/config confession` `!channel` `enable`	<br/><br/>
**Note**: Any parameter prefixed with **`!`** is **required**, the others are optional.
:::

- `!channel`: This is the channel where confessions will be posted for all to read.
- `enable`: Setting this to `True` or `False` will enable or disable the Module in the server. *Default is `True`*

### Prison
This command enables or disables the Prison Module in your server, allowing elite members to punish and force brats to write lines for their freedom.

:::important Syntax
`/config prison` `!prison` `!prisoner` `!prison_master` `enable`	<br/><br/>
**Note**: Any parameter prefixed with **`!`** is **required**, the others are optional.
:::

- `!prison`: This is the channel where locked members will write lines. *a brat's worst nightmare*
- `enable`: Setting this to `True` or `False` will enable or disable the Module in the server. *Default is `True`*

:::caution Permission Required
`Administrator Permission` is required for configuring modules.
:::
