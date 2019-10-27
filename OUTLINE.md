Design and Create an Electron App using Angular that allows a user to type in their favorite subreddit to a form field and then displays the latest post from that subreddit and the comments for that post.

Requirements
Use Angular 6 or greater and Typescript. Vanilla Javascript will not be accepted.
This is designed to test your ability to look up, use, and combine existing resources to build your own app. Feel free to use google, official documentation, and tutorials to learn frameworks.
Post the code to a repository on your Github account.


Notes..

Important points to research. How to build an Electron App. How to convert an Angular App into an Electron App.
How to interface with Reddit. Build Angular App using TypeScript.
Break problem down into simple steps..

Take 5 minute tutorial on Typescript [*]
Build simple Angular App
Install Angular Cli using npm install -g @angular/cli
Simple steps....
Build a new Angular app using generate.
Create a new Git repository.
Fetch a subreddit from the reddit APi and display it along with comments.
fetch("https://www.reddit.com/r/[Change this value].json").then(r => r.json()).then(r => {
  document.getElementById("output").textContent = JSON.stringify(r, null, 2);
});
Create an input form field and a submit button.
Remove the subreddit information from the display.
Hook up the input form to the reddit API.
Hook up the submit button to complete the fetch request.
