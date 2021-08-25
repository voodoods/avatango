import { render, screen } from "@testing-library/react";
import { ToolNavigation } from "./ToolNavigation";

describe('Toolbox', () => {
    test('contains a toolbox element', () => {
        render(<ToolNavigation />);
        const elem = screen.getByTestId('tool-navigation');
        expect(elem).toBeInTheDocument();
      });
});