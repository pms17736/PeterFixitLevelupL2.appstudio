/*this is creating variables*/
let userName = prompt(`the users first name`);
let userState = prompt(`the users state (2 letters)`);
let userTemp = Number(prompt(`the users temperature (number) in fahrenheit`));

/* this is converting the first letter of the user name to a capital letter in case the user used lower case*/
let upperCaseUserName = userName.charAt(0).toUpperCase() + userName.slice(1

/*this is converting the state entered to all capital letters in case the user used lower case*/
let upperCaseUserState = userState.toUpperCase();

/*this is creating the array*/
let userArray = [upperCaseName, upperCaseState, userTemp];

/*this is creating a message array*/
let messages = ["wear a warm coat, hat, scarf and gloves", "wear a warm coat but you won't need a hat, scarf or gloves", "wear your warmest coat, a warm hat, a scarf, and warm gloves", "wear a warm coat, hat and gloves. Maybe a scarf too" ]

/*NSB.MsgBox() outputs*/
if (upperCaseUserState === 'NE' && userTemperature <= 32) {
NSB.MsgBox(upperCaseUserName+", "+messages[0])
} else if (upperCaseUserState === 'NE' && userTemperature > 32 && userTemperature <= 50) {
  NSB.MsgBox(upperCaseUserName+", "+messages[1])
} else if (upperCaseUserState === 'FL' && userTemperature <= 50 && userTemperature >= 32) {
  NSB.MsgBox(upperCaseUserName+", "+messages[2])
} else if (upperCaseUserState === 'FL' && userTemperature > 50 && userTemperature <= 70) {
  NSB.MsgBox(upperCaseUserName+", "+messages[3])
}
