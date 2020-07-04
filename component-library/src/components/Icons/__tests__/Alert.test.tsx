
import { render } from "@testing-library/react";

test("<Alert /> renders correctly", () => {
  const { container } = render(<Alert />);
  expect(container).toMatchSnapshot();
});
  