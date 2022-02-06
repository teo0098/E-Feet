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

  it('Renders with custom styles', () => {
    render(
      <Layout styles={{ color: 'red' }}>
        <h1>E-feet</h1>
      </Layout>
    );
    const layoutElement = screen.getByTestId('mainLayout');
    expect(layoutElement).toBeVisible();
    expect(layoutElement).toHaveStyle({ color: 'red' });
  });

  it('Renders with custom className', () => {
    render(
      <Layout className="text-neutral-200">
        <h1>E-feet</h1>
      </Layout>
    );
    const layoutElement = screen.getByTestId('mainLayout');
    expect(layoutElement).toBeVisible();
    expect(layoutElement).toHaveClass('text-neutral-200');
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
