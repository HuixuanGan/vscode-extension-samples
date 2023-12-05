const vscode = {
	workspace: {
	  openTextDocument: jest.fn(),
	  // Add other workspace methods you use here
	},
	window: {
	  showTextDocument: jest.fn(),
	  createQuickPick: jest.fn(),
	  // Add other window methods you use here
	},
	Uri: {
	  parse: jest.fn((uriString) => ({ fsPath: uriString })),
	  // Add other Uri methods or properties you use here
	},
	// Add other vscode objects and methods you use here
  };
  
  module.exports = vscode;