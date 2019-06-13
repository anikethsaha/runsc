import { error, command  } from "prettycli";

export const manageArgv = (argv: string): void => {
  // regex to match help,--help,-help,--h,-h infact any number of "-" will work
  if (!(/([\-+]?(help)|[\-+]h)/.test(argv))) {
    error("WRONG CMD: it expects 0 arguments to passed ", {
      exit: false,
      silent: false,
    });
    error("run $ rpx --help # to know more", {
      exit: false,
      silent: false,
    });
  } else {
    process.stdout.write(`  Usage \n
    Please go to your directory where package.json is present and then run \n
    $ npx rpx

    or

    $ rpx # if installed globally
    `);
  }
  process.exit();
};
