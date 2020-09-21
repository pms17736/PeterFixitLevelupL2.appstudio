/*this is creating out variables*/
let userName = prompt(`the users' first name`);
let userState = prompt(`the users' state (2 letters)`);
let userTemperature = Number(prompt(`the users' temperature (number) in Fahrenheit`));
 
/*this is making the first letter in the name capitalized*/
let upperCaseUserName = userName.charAt(0).toUpperCase() + userName.slice(1);
 
/*this is capitalizing both the letters in the state*/
let upperCaseUserState = userState.toUpperCase()
 
/*this is creating the array*/
let userArray = [upperCaseUserName, upperCaseUserState, userTemperature];
 
/*this is creating messages array*/
let messages = ["wear a warm coat, hat, scarf and gloves", "wear a warm coat but you won't need a hat, scarf or gloves.", "wear your warmest coat, a warm hat, a scarf, and warm gloves.", "wear a warm coat, hat and gloves. Maybe a scarf too."]
 
/*these are the switch statement ouptputs*/
switch (userTemperature, upperCaseUserState) {
case(userTemperature < 32 && upperCaseUserState === "NE"):
  NSB.MsgBox("Weat a warm coat, hat, scarf and gloves.")
  break;
case(userTemperature >= 32 && userTemperature < 50 && upperCaseUserState === "NE"):
  NSB.MsgBox("wear a warm coat but you won't need a hat, scarf or gloves.")
  break;
case(userTemperature >= 32 && userTemperature < 50 && upperCaseUserState === "FL"):
  NSB.MsgBox("wear your warmest coat, a warm hat, a scarf, and warm gloves.")
  break;
case(userTemperature >= 50 && userTemperature < 70 && upperCaseUserState === "FL"):
  NSB.MsgBox("wear a warm coat, hat and gloves. Maybe a scarf too.")
  break;
default:
  NSB.MsgBox("I do not know what you should wear.")
  }