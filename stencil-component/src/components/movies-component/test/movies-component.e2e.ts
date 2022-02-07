import { newE2EPage } from '@stencil/core/testing';

describe('movies-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<movies-component></movies-component>');

    const element = await page.find('movies-component');
    expect(element).toHaveClass('hydrated');
  });
});
