import { test, expect } from '@playwright/experimental-ct-react';
import type { Locator } from "playwright-core";
import { Calculator } from './Calculator';

test.use({ viewport: { width: 500, height: 500 } });

test('InputForm', async ({ mount }) => {
  const component = await mount(<Calculator defaultWeight='100' defaultReps='10' />);
  await expect(component as Locator).toHaveScreenshot();
});
