describe('Example', () => {
	it('should show "Step One"', async () => {
		await expect(element(by.text('Step One'))).toBeVisible();
	});

	it('should render "See Your Changes" in the second slide', async () => {
		await element(by.id('slides')).swipe('left');
		await expect(element(by.text('See Your Changes'))).toBeVisible(); // no this will pass!
	});

	it('should render "Learn More" and change text in the fourth slide', async () => {
		await element(by.id('slides')).swipe('left');
		await element(by.id('slides')).swipe('left');
		await element(by.id('slides')).swipe('left');
		await expect(element(by.text('Learn More'))).toBeVisible();

		const docsInput = element(by.id('docsInput'));

		await expect(docsInput).toBeVisible();

		await docsInput.clearText();
		await docsInput.typeText('Maybe later!');

		await expect(docsInput).toHaveText('Maybe later!');
	});
});
