const vscode = require('vscode');

const messages = [
  "You got this!",
  "you're crushing it!",
  "You're doing great",
  "bro is coding like a pro rn",
  "Keep building!",
  "Skill issue? Nah, you're goated",
  "Your future self will thank you for this",
  "Absolute legend.",
];

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	const msg = messages[Math.floor(Math.random() * messages.length)];

	const statusBar = vscode.window.createStatusBarItem(
		vscode.StatusBarAlignment.Left, 100
	);

	statusBar.text = `$(heart) ${msg}`;
	statusBar.tooltip = "keep coding!";
	statusBar.show();

	const interval = setInterval(() => {
		const newMsg = messages[Math.floor(Math.random() * messages.length)];
		statusBar.text = `$(heart) ${newMsg}`;
	}, 60 * 1000);

	context.subscriptions.push(statusBar);
	context.subscriptions.push({ dispose: () => clearInterval(interval) });
	
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
