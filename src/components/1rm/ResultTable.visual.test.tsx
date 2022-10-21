import { test, expect } from '@playwright/experimental-ct-react';
import type { Locator } from "playwright-core";
import { ResultTable } from './ResultTable';

test.use({ viewport: { width: 500, height: 500 } });

test('ResultTable', async ({ mount }) => {
  const component = await mount(<ResultTable weight="100" reps="10" />);
  await expect(component as Locator).toHaveScreenshot();
});
