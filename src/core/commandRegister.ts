import { CommandType } from "./command";
import dateCommand from "./commands/dateCommand";
import fanyiCommand from "./commands/fanyi/fanyiCommand";
import gotoCommand from "./commands/gotoCommand";
import hotCommand from "./commands/hot/hotCommand";
// import infoCommand from "./commands/terminal/info/infoCommand";
import pingCommand from "./commands/pingCommand";
import ikunCommand from "./commands/relax/ikun/ikunCommand";
// import musicCommand from "./commands/relax/music/musicCommand";
// import ddosCommand from "./commands/ddos/ddosCommand";
import moyuCommand from "./commands/relax/moyu/moyuCommand";
import searchCommands from "./commands/search/searchCommands";
import spaceCommands from "./commands/space/spaceCommands";
import clearCommand from "./commands/terminal/clearCommand";
import backgroundCommand from "./commands/terminal/config/backgroundCommand";
import hintCommand from "./commands/terminal/config/hintCommand";
import resetCommand from "./commands/terminal/config/resetCommand";
import welcomeCommand from "./commands/terminal/config/welcomeCommand";
import helpCommand from "./commands/terminal/help/helpCommand";
import historyCommand from "./commands/terminal/historyCommand";
import shortcutCommand from "./commands/terminal/shortcut/shortcutCommand";
import timingCommand from "./commands/timing/timingCommand";
import todoCommand from "./commands/todo/todoCommand";
import userCommands from "./commands/user/userCommands";
// import ikuntestCommand from "./commands/relax/ikuntest/ikuntestCommand";
import varbookCommand from "./commands/varbook/varbookCommand";

/**
 * 命令列表（数组元素顺序会影响 help 命令的展示顺序）
 */
const commandList: CommandType[] = [
  shortcutCommand,
  gotoCommand,
  ...searchCommands,
  ...spaceCommands,
  ...userCommands,
  varbookCommand,
  hotCommand,
  todoCommand,
  timingCommand,
  dateCommand,
  clearCommand,
  historyCommand,
  fanyiCommand,
  helpCommand,
  pingCommand,
  moyuCommand,
  ikunCommand,
  welcomeCommand,
  backgroundCommand,
  resetCommand,
  hintCommand,
];

/**
 * 命令字典
 */
const commandMap: Record<string, CommandType> = {};

commandList.forEach((command) => {
  commandMap[command.func] = command;
  command.alias?.forEach((name) => {
    commandMap[name] = command;
  });
});

export { commandList, commandMap };

