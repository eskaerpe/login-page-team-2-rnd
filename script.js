// ==== DEFINISI VARIABLE TIAP ELEMENT ==== //
const users = [
	{
		username: "admin",
		password: "admin123",
	},
	{
		username: "albani",
		password: "albani123",
	},
];
const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const rememberCheckbox = document.getElementById("remember");

function login() {
	const username = usernameInput.value;
	const password = passwordInput.value;

	if (!username || !password) {
		alert("You need to fill both username and password.");
	}
	const user = users.find((u) => u.username === username && u.password === password);
	if (user) {
		loginForm.style.display = "none";
		document.getElementById("loggedInMessage").textContent = `You're logged in as ${username}.`;
		alert(`Login successful.\nWelcome back ${username}!`);
	} else {
		alert("Invalid username or password");
	}
}
