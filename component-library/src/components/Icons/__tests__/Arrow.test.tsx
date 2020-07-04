import { render } from "@testing-library/react";

test("<Arrow /> renders correctly", () => {
  const { container } = render(<Arrow />);
  expect(container).toMatchSnapshot();
});
