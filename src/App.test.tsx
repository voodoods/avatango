import { render, screen } from "@testing-library/react";
import { App } from "./App";

describe('App', () => {
    it('contains an app container', () => {
        render(<App />);
        const elem = screen.getByTestId('app');
        expect(elem).toBeInTheDocument();
    });

    it('contains a stage component', () => {
      render(<App />);
        const elem = screen.getByTestId('stage');
        expect(elem).toBeInTheDocument();
    });

    it('contains a toolbox component', () => {
      render(<App />);
        const elem = screen.getByTestId('toolbox');
        expect(elem).toBeInTheDocument();
    });
});