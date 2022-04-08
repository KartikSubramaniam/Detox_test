const waitToNavigate = duration => new Promise(resolve => setTimeout(() => resolve(), duration));

describe('Example', () => {
  beforeEach(async () => {
    await device.launchApp();
  });

  it('Home Screen', async () => {
    await expect(element(by.text('HomeScreen'))).toBeVisible();
    await element(by.id('Home')).tap();
    await waitToNavigate(2000);
  });

  it('Detail Screen', async () => {
    await expect(element(by.text('DetailScreen'))).toBeVisible();
    await element(by.id('Details')).tap();
    await waitToNavigate(2000);
  });
});
