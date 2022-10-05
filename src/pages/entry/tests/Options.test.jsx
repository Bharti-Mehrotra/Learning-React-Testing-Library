import { render, screen } from "@testing-library/react";
import Option from "../Options";

test("displays image for each scoop from the server", async () => {
  render(<Option optionType="scoops" />);

  //find the images
  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  //comfirm alt text of images
  const altText = scoopImages.map((img) => img.alt);
  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});

test("displays image for each topping from the server", async () => {
  render(<Option optionType="toppings" />);

  //find the images
  const toppingImages = await screen.findAllByRole("img", {
    name: /topping$/i,
  });
  // console.log("I'fsdf ",toppingImages);
  expect(toppingImages).toHaveLength(3);

  //comfirm alt text of images
  const altText = toppingImages.map((img) => img.alt);
  expect(altText).toEqual([
    "M&Ms topping",
    "Hot fudge topping",
    "Peanut butter cups topping",
  ]);
});
