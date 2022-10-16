import { test, expect } from '@playwright/experimental-ct-react';
import type { Locator } from "playwright-core";
import App from './App';

test.use({ viewport: { width: 500, height: 500 } });

test('should work', async ({ mount }) => {
  const component = await mount(<App></App>);
  await expect(component as Locator).toHaveScreenshot();
});
