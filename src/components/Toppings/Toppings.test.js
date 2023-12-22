import { render, screen } from "@testing-library/react";
import Toppings from ".";
import userEvent from "@testing-library/user-event";

test("Veri API'dan geldikten sonra ekrana kartlar basılır", async () => {
  render(<Toppings />);

  const images = await screen.findAllByRole("img");

  expect(images.length).toBeGreaterThanOrEqual(1);
});

test("sosları ekleme çıkarma toplam fiyatı etkiler", async () => {
  render(<Toppings />);
  const user = userEvent.setup();

  // toplam başlığını çağırma
  const total = screen.getByRole("heading", {
    name: /Soslar Ücreti/i,
  });

  const MMs = await screen.findByAltText("M&Ms");
  const mochi = await screen.findByAltText("Mochi");

  await user.click(MMs);

  expect(total).toHaveTextContent("3");

  await user.click(mochi);

  expect(total).toHaveTextContent("6");

  await user.click(MMs);

  expect(total).toHaveTextContent("3");

  await user.click(mochi);

  expect(total).toHaveTextContent("0");
});
