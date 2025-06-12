import { Plugin } from 'obsidian'

export default class CloseNewTabs extends Plugin {
	async onload() {
		this.addCommand({
			id: 'close-new-tabs',
			name: 'Close new tabs',
			callback: () => {
				// Iterate all leaves (tabs)
				// @ts-ignore
				this.app.workspace.iterateAllLeaves((leaf) => {
					// getDisplayText() returns the tab title
					if (leaf.getDisplayText && leaf.getDisplayText() === 'New tab') {
						leaf.detach();
					}
				});
			}
		});
	}
}
