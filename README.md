<h1 align="center">Bus Bot</h1>

<p align="center"><b>A Discord bot to notify members of my college of the arrival of their college buses!</b></p>

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
	- [Running the Bot](#running-the-bot)
	- [Interacting on Discord](#interacting-on-discord)
		- [Table of Commands](#table-of-commands)
- [Updating](#updating)
- [Contributing](#contributing)

## Features

- Integration with Discord's slash commands
- Setup command to create required roles and channel in a Discord server
- Bus role management commands for users to get and remove bus ping roles
- A find command to get the location of a specific bus at any time
- Remote storage of Discord server and bus data using MongoDB to allow persistence of this bot's services after a restart of the bot

## Requirements

| Software | Tested Version(s) |
| -------- | :---------------: |
| Nodejs   | v16.14-15         |
| npm      | 8.19              |
| MongoDB  | 5                 |

**You will also need a Discord bot account which you can acquire through [Discord's developer portal](https://discord.com/developers/applications)**

## Installation

Currently this project is not published anywhere as a package so the only way to get a copy is to clone this repository:

```bash
$ git clone https://github.com/heyimnova/bus-bot.git
```

Once you have a copy of this repository, enter it and run `npm update` to install required dependencies:

```bash
$ cd bus-bot
$ npm update
```

Before you can actually run the bot there are some environment variables the bot requires. The simplest way to set these is to create a .env file inside the bus-bot directory and fill it in as such:

```
DISCORD_TOKEN=<The bot client token of the Discord bot account that will be running this service>
MONGO_URI=<The MongoDB server's URI the bot will use to read from and write to the MongoDB server>
COLLEGE_WEBSERVICES_URL=<The URL of my college's webservices page, removed from source code for privacy reasons>
```

An example `MONGO_URI` is `mongodb+srv://<username>:<password>@<clustername>.abcdefg.mongodb.net/?retryWrites=true&w=majority` if you are using MongoDB Atlas as I do

## Usage

### Running the Bot

**⚠️ It is important that this bot is running before it is added to any Discord servers else the slash commands will not work! ⚠️**  

**⚠️ This bot needs to be first run while the college webservices bus departures page is displaying a table of all buses or `/setup` will not create the required bus roles! ⚠️**  
  
Once you have installed and configured the bot, to run it simply execute from within the project directory:

```bash
$ node .
```

With this you will have a running instance of the Bus Bot! You can now add it to any Discord servers you want to run this service from :)  
  
***Running the bot will require the terminal it was run from be left alive, so it is recommended that you run this within a detachable terminal session using a tool such as [tmux](https://github.com/tmux/tmux#readme) so you can leave it running in the background.***

### Interacting on Discord

Once the Discord bot has been added to a Discord server it will install two slash commands to the server, `/help` and `/setup`  
Run the `/setup` command to modify the Discord server's roles to include a role for each bus **(if the server already has roles that share names with a college bus, they will be removed and replaced with a new role of the same name - be aware of this)**, create the *bus-updates* channel within the server to publish bus role pings, and register the rest of the bot's slash commands with the server.

#### Table of Commands

| Command | Argument(s) | Function | Example |
| :-----: | ----------- | -------- | :-----: |
| `/find` | The role corresponding to the bus you wish to locate | Reply to the user with a Discord embed showing the location of the requested bus | `/find @100` |
| `/get` | The ***bus role*** you wish to get | Give the user the ***bus role*** they requested | `/get @100` |
| `/help` | N/A | Send a direct message to the user containing a Discord embed with all the bot's commands and a brief description of them | `/help` |
| `/remove` | The ***bus role*** you wish to remove from yourself | Remove the requested ***bus role*** from the user | `/remove @100` |
| `/setup` | N/A | Modify the Discord server as explained above this table (can only be run once per Discord server) | `/setup` |

## Updating

To update this project the process is very similar to installing it in the first place. From within the project directory, run:

```bash
$ git pull
$ npm update
```

From there you can kill and restart the bot and you will be running the newest version.  
  
If changes are pushed to this repository that require more steps than above, this section of the README will be updated with instructions on how to correctly update the bot to that version.

## Contributing

If you wish to contribute to this project first of all, thank you!  
Please ensure that any code you add follows the format of this project as outlined within the .eslintrc.json and .prettierrc.json files, if your code diverges from those rules too much I may not accept it into the project.  
To ensure your code does follow those rules there are commands built into this package to check and modify your code to follow those rules:

```bash
$ npm run eslint # Will check your code and inform you of any errors you have made
$ npm run eslint:fix # Will automatically fix any errors that it can and inform you of any errors you have made that it cannot automatically fix
$ npm run prettier # Will do the same thing as "npm run eslint" but against prettier's rules instead
$ npm run prettier:fix # Will do the same thing as "npm run eslint:fix" but against prettier's rules instead
```

If your contributions aren't being accepted or you wish to take this project in a different direction yourself, you are free to do so in accordance with the terms and conditions of the BSD 2 Clause license this project is licensed under :)  
  
Thank you for using the Bus Bot!
