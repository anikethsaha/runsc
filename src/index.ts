#!/usr/bin/env node

import notifier from "update-notifier";
import { manageArgv } from "./utils/argument-manage";
import runInteractiveShell from "./utils/script-handler";
// tslint:disable-next-line: no-var-requires
const pkg: notifier.Settings = require("../package.json");
notifier({ pkg }).notify();

const { argv } = process;

argv.length <= 2 ? runInteractiveShell() : manageArgv(argv.pop());

export {
  runInteractiveShell,
  manageArgv,
};
