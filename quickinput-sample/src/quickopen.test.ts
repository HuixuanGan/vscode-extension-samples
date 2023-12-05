import * as vscode from 'vscode';
import { quickOpen} from './quickOpen';

jest.mock('vscode', () => ({
	workspace: {
      openTextDocument: jest.fn().mockResolvedValue({}),
	},
	window: {
      showTextDocument: jest.fn(),
	},
  }));
  
  describe('quickOpen function', () => {
	it('calls openTextDocument and showTextDocument', async () => {
      await quickOpen();
      expect(vscode.workspace.openTextDocument).toHaveBeenCalled();
      expect(vscode.window.showTextDocument).toHaveBeenCalled();
	});
  });