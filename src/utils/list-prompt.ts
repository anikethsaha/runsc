import * as inquirer from "inquirer";

export default (name: string, message: string, choicesList: string[], filter :(_ : string) => string): inquirer.Answers =>
inquirer
  .prompt({
    type: "list",
    name,
    message,
    choices: choicesList,
    filter,
  });
