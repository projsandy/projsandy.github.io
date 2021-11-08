const BLACKLISTED_KEY_CODES = [ 38 ];
const COMMANDS = {
  help:
    'Supported commands: <span class="code">about</span>, <span class="code">experience</span>, <span class="code">education</span>, <span class="code">skills</span>, <span class="code">certifications</span>,  <span class="code">courses</span>, <span class="code">contact</span>',
  about:
    "A young cyber nerd and all time learner. He is strong in design and integration with intuitive problem-solving skills and much passionate about COMPUTERS and INFORMATION SECURITY...",
  skills:
    "Shell Scripting (BASH + BATCH) | DevSecOps | Computer Hardware & Networking |  Security Operation Analysis ",
  education:
    "MSc. in Digital Forensics & Information Security (Running)<br>Postgraduate-cert in Inforation Assurence<br> BSc. in Inforation Technology",
  experience:'<span class="code">Total experience: 2.9 years</span><br>Technical Support Engineer DevSecOps - Full Time - Pagentra Infosec Pvt Ltd (6 months) <br> Technical Writter - community work - M L Dahanukar College  (3 months)<br>Computer Technician - Part Time - Freelancer (2 years)<br>',
  certifications: 
    "DIAT Certified Information Assurence Professional<br>",
  courses:"TCM Security - Practical Ethical Hacking<br>Hacktify Security - Bug Bounty",
  articles:
    "<a href='https://github.com/iamthefrogy/FYI' class='success link'>FYI - https://github.com/iamthefrogy/FYI </br> This GitHub repo has the collection of my entire career's work/research/thoughts/webinars/articles/publications.</a>",
  contact:
    "You can contact me on any of following links:<br><a href='https://www.linkedin.com/in/sandesh-ajgekar/' class='success link'>Linkedin</a>, <a href='mailto:proj.test.sandy@gmail.com' class='success link'>Email</a>, <a href='https://twitter.com/projsandy/' class='success link'>Twitter</a>"
};
let userInput, terminalOutput;

const app = () => {
  userInput = document.getElementById("userInput");
  terminalOutput = document.getElementById("terminalOutput");
  document.getElementById("dummyKeyboard").focus();
  console.log("Application loaded");
};

const execute = function executeCommand(input) {
  let output;
  input = input.toLowerCase();
  if (input.length === 0) {
    return;
  }
  output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
  if (!COMMANDS.hasOwnProperty(input)) {
    output += `<div class="terminal-line">no such command: ${input}</div>`;
    console.log("Oops! no such command");
  } else {
    output += COMMANDS[input];
  }

  terminalOutput.innerHTML = `${
    terminalOutput.innerHTML
  }<div class="terminal-line">${output}</div>`;
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
};

const key = function keyEvent(e) {
  const input = userInput.innerHTML;

  if (BLACKLISTED_KEY_CODES.includes(e.keyCode)) {
    return;
  }

  if (e.key === "Enter") {
    execute(input);
    userInput.innerHTML = "";
    return;
  }

  userInput.innerHTML = input + e.key;
};

const backspace = function backSpaceKeyEvent(e) {
  if (e.keyCode !== 8 && e.keyCode !== 46) {
    return;
  }
  userInput.innerHTML = userInput.innerHTML.slice(
    0,
    userInput.innerHTML.length - 1
  );
};

document.addEventListener("keydown", backspace);
document.addEventListener("keypress", key);
document.addEventListener("DOMContentLoaded", app);
