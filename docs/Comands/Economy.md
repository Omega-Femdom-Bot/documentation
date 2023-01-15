---
sidebar_position: 5
---

# Economy
Simulate economy in your server with these commands.

## Financial Commands
### Earnings
Collect your daily and hourly earnings using these commands.
:::important syntax
`/daily`<br/>
`/hourly`
:::
### Balance
Check your own balance, or that of other server members, using this command.
:::important syntax
`/balance` `member`
:::
`member` The member you wish to check the balance of. (leave blank for your own balance)
### Bank Transactions
Manage your bank account using these commands.
:::important syntax
`/deposit` `amount`<br/>
`/withdraw` `amount`
:::
`amount` How much you would like to deposit/withdraw from the bank.
### Give
Use this command to give cash to other server members.
:::important syntax
`/give` `!member` `!amount`<br/><br/>
**Note**: Any parameter prefixed with **`!`** is **required**, the others are optional. 
:::
`!member` The member you want to give money to.<br/>
`!amount` The amount of money you want to give to the member.
### Rob
With the `/rob` command, you can attempt to steal money from other members of the server, as long as they haven't deposited it into their bank account.

:::important syntax
`/rob` `!member`<br/><br/>
**Note**: Any parameter prefixed with **`!`** is **required**.
:::

### Leaderboard
Use the `/leaderboard` command to see a list of the wealthiest members in the server.

:::important syntax
`/leaderboard` `order_by`
:::
`order_by` **[Cash, Bank, Total]**, you can choose the order by which you want to see the leaderboard.

## Shop
Enhance your server experience by trading items with other members. Stock up on exciting and unique items!

### Add Item
This command allows you to add an item to the server shop.
:::important syntax
`/shop add_item` `!name` `!description` `!cost` `!icon` `count` `role` `duration`<br/><br/>
**Note**: Any parameter prefixed with **`!`** is **required**, the others are optional. 
:::
`!name` The name of the item to be added.<br/>
`!description` A brief description of the item.<br/>
`!cost` The price of the item.<br/>
`count` The total number of items available for sale. Make some items rare and unique by setting a low count.<br/>
`role` If configured, Omega will give this role to members who purchase this item.<br/>
`duration` If configured, the item will expire after the specified duration, counting down from the time of purchase.

### Edit Item
This command allows you to edit an existing item in the server shop.
:::important syntax
`/shop edit_item` `!name` `!description` `!cost` `!icon` `count` `role` `duration`<br/><br/>
**Note**: Any parameter prefixed with **`!`** is **required**, the others are optional. 
:::
**Same Parameters as in `/shop add_item`**

### Delete Item
This command allows you to remove an item from the server shop.
:::important syntax
`/shop delete_item` `!name`<br/><br/>
**Note**: Any parameter prefixed with **`!`** is **required**, the others are optional. 
:::
`!name` The name of the item to be removed from the server shop.

### View
Use this command to view all the items currently available in the server shop.
:::important syntax
`/shop view`
:::

### Buy
Using this command, you can purchase items from the server shop.
:::important syntax
`/shop buy` `!name`<br/><br/>
**Note**: Any parameter prefixed with **`!`** is **required**, the others are optional. 
:::
`!item` The name of the item you wish to purchase from the server shop.

### Sell
Using this command, you can sell items from your inventory.
:::important syntax
`/shop sell` `!item`<br/><br/>
**Note**: Any parameter prefixed with **`!`** is **required**, the others are optional. 
:::
`!item` The name of the item you wish to sell from your inventory.
### Gift
Using this command, you can gift an item to a member.
:::important syntax
`/shop gift` `!member` `!item`<br/><br/>
**Note**: Any parameter prefixed with **`!`** is **required**, the others are optional. 
:::
`!member` The member you wish to give the gift to.<br/>
`!item` The name of the item you wish to give as a gift.
### Inventory
Check your inventory, or that of other server members, using this command.
:::important syntax
`/shop inventory` `member`
:::
`member` Mention the member whose inventory you wish to check.

