import { newSpecPage } from '@stencil/core/testing';
import { MoviesComponent } from '../movies-component';

describe('movies-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MoviesComponent],
      html: `<movies-component></movies-component>`,
    });
    expect(page.root).toEqualHtml(`
      <movies-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </movies-component>
    `);
  });
});
