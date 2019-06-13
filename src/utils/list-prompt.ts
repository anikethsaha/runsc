import * as inquirer from "inquirer";

export default (name: string , message: string, choicesList: string[]): inquirer.Answers =>   inquirer
.prompt({
  type : "list",
  name,
  message,
  choices : choicesList,
});
