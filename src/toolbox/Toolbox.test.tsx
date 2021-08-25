import { render, screen } from "@testing-library/react";
import { Toolbox } from "./Toolbox";

describe('Toolbox', () => {
    test('contains a toolbox element', () => {
        render(<Toolbox />);
        const elem = screen.getByTestId('toolbox');
        expect(elem).toBeInTheDocument();
      });
});