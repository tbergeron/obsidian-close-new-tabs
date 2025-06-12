import { Plugin } from 'obsidian'

export default class CloseNewTabs extends Plugin {
	async onload() {
		// Helper function to delay execution
		function delay(ms: number) {
			return new Promise(resolve => setTimeout(resolve, ms));
		}

		// Async function to run the closing logic with delay
		const closeTabsWithDelay = async () => {
			for (let i = 0; i < 5; i++) {
				// @ts-ignore
				this.app.workspace.iterateAllLeaves((leaf) => {
					const displayText = leaf.getDisplayText ? leaf.getDisplayText() : undefined;
					console.log('Leaf display text:', displayText, 'Type:', leaf.view?.getViewType?.());
					if (displayText === 'New tab' || displayText === 'Plugin no longer active') {
						leaf.detach();
					}
				});
				await delay(100);
			}
		};

		closeTabsWithDelay();
	}
}
