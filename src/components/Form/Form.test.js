// öncelikle tabiki import

import { fireEvent, render, screen } from "@testing-library/react";
import Form from ".";
import userEvent from "@testing-library/user-event";

test("Koşulların onaylanmasına göre buton aktifliği", async () => {
  render(<Form />);

  const user = userEvent.setup();

  const orderButton = screen.getByRole("button");

  const checkedBox = screen.getByRole("checkbox");

  expect(orderButton).toBeDisabled();

  expect(checkedBox).not.toBeChecked();

  await user.click(checkedBox);

  expect(orderButton).toBeEnabled();

  await user.click(checkedBox);

  expect(orderButton).toBeDisabled();
});

test("onayla butonu hover olunca bildirim çıkar", async () => {
  render(<Form />);

  const user = userEvent.setup();

  const orderButton = screen.getByRole("button");
  const checkedBox = screen.getByRole("checkbox");
  const popUp = screen.getByText("Size gerçekten bir şey", { exact: false });

  await user.click(checkedBox);

  expect(orderButton).toBeEnabled();

  fireEvent.mouseEnter(orderButton);

  expect(popUp).toBeVisible()

  fireEvent.mouseLeave(orderButton);

  expect(popUp).not.toBeVisible();
});
