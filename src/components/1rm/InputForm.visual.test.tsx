import { test, expect } from '@playwright/experimental-ct-react';
import type { Locator } from "playwright-core";
import { InputForm } from './InputForm';

test.use({ viewport: { width: 500, height: 500 } });

test('InputForm', async ({ mount }) => {
  const component = await mount(<InputForm weight="100" reps="10" onWeightChange={() => {}} onRepsChange={() => {}} />);
  await expect(component as Locator).toHaveScreenshot();
});
