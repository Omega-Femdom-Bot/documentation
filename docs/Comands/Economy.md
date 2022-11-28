---
sidebar_position: 5
---

# Economy
Simulate Economy in your server.
## Financial Commands
### Earnings
Collect your earnings using these commands.
:::important syntax
`/daily`<br/>
`/hourly`
:::
### Balance
Check your balance, or that of other server member's, using this command.
:::important syntax
`/balance` `member`
:::
`member` The member you wish to check the balance of.
### Bank Transactions
:::important syntax
`/deposit` `amount`<br/>
`/withdraw` `amount`
:::
`amount` How much you would like to deposit/withdraw from the bank.
### Give
Using this command give cash to server members.
:::important syntax
`/give` `!member` `!amount`<br/><br/>
**Note**: Any parameter prefixed with **`!`** is **required**, the others are optional. 
:::
`!member` the member you want to give money to.<br/>
`!amount` the amount of money you want to give to the member.

### Rob
Using this command you can Rob Money from server members,  at least if they don't deposit into their bank.
:::important syntax
`/rob` `!member`<br/><br/>
**Note**: Any parameter prefixed with **`!`** is **required**, the others are optional. 
:::

### Leaderboard
Get the list of Richest Members of the server.
:::important syntax
`/leaderboard` `order_by`
:::
`order_by` **[Cash, Bank, Total]**
## Shop
You can have a shop in server and trade items. Stock up on exciting and fun items!
### Add item
Using this command adds an item to the server shop.
:::important syntax
`/shop add_item` `!name` `!description` `!cost` `!icon` `count` `role` `duration`<br/><br/>
**Note**: Any parameter prefixed with **`!`** is **required**, the others are optional. 
:::
`!name` Name of the item to be added.<br/>
`!description` Description of the item to be added.<br/>
`!cost` Price of the item to added.<br/>
`count` Total number of items to sell, you can make some items rare and unique.<br/>
`role` If configured, Omega will give this role if member has this item in their inventory.<br/>
`duration` If configured, the item will expire after the configured duration, counting down from their time of purchase.
### Edit item
Using this command edit item on the server shop.
:::important syntax
`/shop edit_item` `!name` `!description` `!cost` `!icon` `count` `role` `duration`<br/><br/>
**Note**: Any parameter prefixed with **`!`** is **required**, the others are optional. 
:::
**Same Parameters as in `/shop add_item`**
### Delete item
Using this command you can remove item from the server shop.
:::important syntax
`/shop delete_item` `!name`<br/><br/>
**Note**: Any parameter prefixed with **`!`** is **required**, the others are optional. 
:::
`!name` Name of the item to delete from the server shop.
### View
use this command to view items in the server shop.
:::important syntax
`/shop view`
:::
### Buy
Using this command you can purchase Items from the server Shop.
:::important syntax
`/shop buy` `!name`<br/><br/>
**Note**: Any parameter prefixed with **`!`** is **required**, the others are optional. 
:::
`!item` name of the item to buy from server shop.

### Sell
Using this command you can sell Items from your inventory.
:::important syntax
`/shop buy` `!item`<br/><br/>
**Note**: Any parameter prefixed with **`!`** is **required**, the others are optional. 
:::
`!item` name of the item to sell from your inventory.
### Gift
Using this command you can gift an item to member.
:::important syntax
`/shop gift` `!member` `!item`<br/><br/>
**Note**: Any parameter prefixed with **`!`** is **required**, the others are optional. 
:::
`!member` member you want to give gift to.<br/>
`!item` name of the item you want to give as a gift.
### Inventory
Check your inventory, or that of other server member's, using this command.
:::important syntax
`/shop inventory` `member`
:::
`member` mention the member to check there inventory.
