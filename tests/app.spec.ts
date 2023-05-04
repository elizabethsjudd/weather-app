import { Page, expect, test } from "@playwright/test";

const completelyFillOutForm = async (page: Page) => {
	await page.getByLabel("Street").fill("2001 Blake St");
	await page.getByLabel("City").fill("Denver");
	await page.getByLabel("State").selectOption({ label: "Colorado" });
	await page.getByLabel("Zip code").fill("80205");
	await page.locator('button:text("Get location")').click();
};

test("should get street address error if empty", async ({ page }) => {
	// Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
	await page.goto("/");

	const input = page.getByLabel("Street");
	await input.focus();
	await input.blur();

	await expect(page.getByTestId("form-error")).toContainText("A street address is required");
	await expect(page.locator("details")).toHaveCount(1);
});

test("should get zip code error if invalid format", async ({ page }) => {
	await page.goto("/");

	const input = page.getByLabel("Zip code");
	await input.fill("80");
	await input.blur();

	await expect(page.getByTestId("form-error")).toContainText(
		"Invalid zip code, enter a 5-digit number"
	);
	await expect(page.locator("details")).toHaveCount(1);
});

test("should get API error if invalid address fields", async ({ page }) => {
	await page.goto("/");

	await page.getByLabel("Street").fill("2001 Blake St");
	await page.locator('button:text("Get location")').click();

	// We don't write this error message so we simply want to know that it exists and not the specific message
	await expect(page.getByTestId("form-error")).toContainText("Error");
	await expect(page.locator("details")).toHaveCount(1);
});

test("should get forecast for full address", async ({ page }) => {
	await page.goto("/");

	await completelyFillOutForm(page);

	await expect(page.locator("details")).toHaveCount(2);
	await expect(page.locator("h3")).toContainText("Upcoming forecast");
	await expect(page.getByTestId("forecast-current")).toHaveCount(1);
	await expect(page.getByTestId("forecast-future")).toHaveCount(6);
});

test("should allow user to change temperature unit", async ({ page }) => {
	await page.goto("/");

	await completelyFillOutForm(page);
	const input = page.getByTestId("temp-unit-toggle");

	await expect(input).toHaveCount(1);
	await expect(page.getByTestId("forecast-current")).toContainText("°F");
	await input.click();
	await expect(page.getByTestId("forecast-current")).toContainText("°C");
});

test("should be able to get forecast details for a given day", async ({ page }) => {
	await page.goto("/");

	await completelyFillOutForm(page);

	await expect(page.locator("details")).toHaveCount(2);
	await page.getByTestId("forecast-current-button").click();
	await expect(page.getByRole("dialog")).toContainText("Wind");
});
