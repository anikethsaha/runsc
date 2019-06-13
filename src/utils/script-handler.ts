import * as cp from "child_process";
import * as fs from "fs";
import * as path from "path";
import { info } from "prettycli";
import listPrompt from "./list-prompt";

export const pkgManager = (): string => fs.existsSync(path.resolve(process.cwd(), "yarn.lock")) ? "yarn" : "npm";

export const runScript = (script: string, cmds: string): void => {
  info(`RUNNING ${script}`, `it will run $ ${cmds}`);
  const commandTorun: string[] = ["run", script];
  cp.spawn(pkgManager(), commandTorun, {
    shell: true,
    stdio: "inherit",
  });

};

export const findScript = (src: string = ""): void => {
  const PKGJSON = require(process.cwd().trim() + `/${src}/package.json`);
  const { scripts } = PKGJSON;
  listPrompt(
    "script",
    "List of Available Scripts, Select the one you want to run",
    Object.keys(scripts).map(s => `${s} ===> ${scripts[s]}`),
    (val : string) : string => val.split("===>")[0].trim()
  )
  .then((res : {script : string} ) => runScript(res.script, scripts[res.script]));

};

export default (): void => findScript();
