import {
  render,
  screen,
  fireEvent,
  waitForElementToBeRemoved,
} from "@testing-library/react"; //render to render our component, screen to find elements in our component and fireEvent to interact with those element
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";

test("Initial Conditions", () => {
  render(<SummaryForm />);

  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  expect(checkbox).not.toBeChecked();

  const confirmButton = screen.getByRole("button", { name: /confirm order/i });
  expect(confirmButton).toBeDisabled();
});

test("checkbox enables button on first click and disables on second click", () => {
  render(<SummaryForm />);

  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  const confirmButton = screen.getByRole("button", { name: /confirm order/i });

  userEvent.click(checkbox);
  expect(confirmButton).toBeEnabled();

  userEvent.click(checkbox);
  expect(confirmButton).toBeDisabled();
});

test("popover response on hover", async () => {
  render(<SummaryForm />);
  //popover is hidden initially
  const nullPopover = screen.queryByText(
    /no ice cream will actually be delivered/i
  );
  expect(nullPopover).not.toBeInTheDocument();

  //popover appears on hover/mouseover the checkbox label
  const termsAndConditions = screen.getByText(/Terms and Conditions/i);
  userEvent.hover(termsAndConditions);
  const popoverText = screen.queryByText(
    /no ice cream will actually be delivered/i
  );
  expect(popoverText).toBeInTheDocument();

  //popover hiddes on mouseout from checkbox label
  userEvent.unhover(termsAndConditions);
  await waitForElementToBeRemoved(() =>
    screen.queryByText(/no ice cream will actually be delivered/i)
  );
  // expect(nullPopoverAgain).not.toBeInTheDocument();
});
