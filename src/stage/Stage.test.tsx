import { render, screen } from "@testing-library/react";
import { Stage } from "./Stage";

describe('Stage', () => {
    test('contains a stage element', () => {
        render(<Stage />);
        const elem = screen.getByTestId('stage');
        expect(elem).toBeInTheDocument();
      });
});