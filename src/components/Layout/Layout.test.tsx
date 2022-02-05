import { render, screen, within } from '@testing-library/react';

import { Layout } from '@components/Layout';

describe('Layout component tests', () => {
  it('Renders content', () => {
    render(
      <Layout>
        <h1>E-feet</h1>
      </Layout>
    );
    const navElement = screen.getByRole('navigation');
    expect(navElement).toBeVisible();
    const linkElements = within(navElement).getAllByRole('link');
    expect(linkElements).toHaveLength(5);
  });

  it('Snapshots content', () => {
    const { container } = render(
      <Layout>
        <h1>E-feet</h1>
      </Layout>
    );
    expect(container).toMatchSnapshot();
  });
});
