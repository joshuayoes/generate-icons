import { render } from "@testing-library/react";

test("<Clock /> renders correctly", () => {
  const { container } = render(<Clock />);
  expect(container).toMatchSnapshot();
});
