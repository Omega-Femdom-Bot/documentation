---
sidebar_position: 3
---

# Setup
[Invite](https://discord.com/api/oauth2/authorize?client_id=1025629384629043262&permissions=8&scope=bot%20applications.commands) the bot to the server with admin permissions and elevate Omega's role to top. (*higher the better*)<br/><br/>Now we need to Config 3 modules separately, *estimated time 1-2 mins*.

## Config

### Femdom
This command will enable/disable Femdom Module in your server and configures roles.

:::important Syntax
`/config femdom` `!domme` `!subby` `!gag_log` `owned` `switch` `enable`	<br/><br/>
**Note**: Any parameter prefixed with **`!`** is **required**, the others are optional.
:::

`!domme`, `!subby`, `switch` Members with these role will be considered as dominant, submissive and switch respectively.<br/>
`!gag_log` is a channel where Omega will post sub's gagged messages.<br/>
`owned` it's a role given to subs if they are owned by a domme, role will be removed if they get disowned.<br/>
`enable` setting this to True/False will enable/disable the Module in the server. *default is `True`*

### Confession
This command will enable/disable Confession Module in your server and allows server Members to Confess secrets.

:::important Syntax
`/config confession` `!channel` `enable`	<br/><br/>
**Note**: Any parameter prefixed with **`!`** is **required**, the others are optional.
:::

`!channel` this is the channel where confessions will be posted.<br/>
`enable` setting this to True/False will enable/disable the Module in the server. *default is `True`*

### Prison
This command will enable/disable Prison Module in your server and allows elite Members to punish and force brats to write lines.

:::important Syntax
`/config prison` `!prison` `!prisoner` `!prison_master` `enable`	<br/><br/>
**Note**: Any parameter prefixed with **`!`** is **required**, the others are optional.
:::

`!prison` this is the channel where locked members will write lines. *brats worst nightmare*<br/>
`enable` setting this to True/False will enable/disable the Module in the server. *default is `True`*

:::caution Permission Required
`Administrator Permission` is Required to configuring Modules.
:::