import * as vscode from 'vscode';
import { quickOpen } from './quickOpen';

jest.mock('vscode', () => ({
  workspace: {
    openTextDocument: jest.fn().mockResolvedValue({}),
  },
  window: {
    showTextDocument: jest.fn(),
    createQuickPick: jest.fn().mockReturnValue({
      onDidChangeValue: jest.fn(),
      onDidChangeSelection: jest.fn().mockImplementation(callback => {
        callback([{ label: 'Test File' }]); // Mock QuickPickItem without uri
      }),
      onDidHide: jest.fn(),
      show: jest.fn(),
      items: [],
      dispose: jest.fn(),
    }),
  },
  Uri: {
    parse: jest.fn(),
  },
}));

describe('quickOpen function', () => {
  it('calls openTextDocument and showTextDocument', async () => {
    await quickOpen();

    expect(vscode.workspace.openTextDocument).toHaveBeenCalled();
    expect(vscode.window.showTextDocument).toHaveBeenCalled();
  });
});