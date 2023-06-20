const applescript = require("applescript");

const recipient = ""; // enter recipient's phone number within quotes
const message = "Hello, world!"; // replace with your message

const script = `
tell application "Messages"
    set targetService to 1st service whose service type = iMessage
    set targetBuddy to buddy "${recipient}" of targetService
    send "${message}" to targetBuddy
end tell
`;

applescript.execString(script, (err, res) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Message sent successfully.");
  }
});


// To run this code:
// npm install applescript (if haven't already)
// Run node send-iMessage.js
