import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event'

import App from './App';

describe("App Tests", () => {
    beforeEach(() => {
        render(<App />);
    });
    test('Renders the Header component', () => {
        // Check header to be in the documnet
        expect(screen.getByText("Emoji Search")).toBeInTheDocument();

        // Verify header emojies display
        const Images = screen.getAllByRole("img");
        expect(Images[0]).toHaveAccessibleName("grin-cat");
        expect(Images[1]).toHaveAccessibleName("grinning-cat");
    });

    test('the emoji list is rendered successfully when the app is first opened.', () => {
        expect(screen.getAllByText("Click to copy emoji")).toHaveLength(20);
    });

    test('The emoji list is re-rendered according to that filter.', () => {
        const input = screen.getByRole('textbox');

        fireEvent.change(input, { target: { value: 'snow' } });

        expect(screen.getAllByText(/snow/i)).toHaveLength(6);
    });

    test('When clicking any emoji on the list,the relevant emoji is copied.', async () => {
        const emoji = screen.getByText('100');
        userEvent.click(emoji);

        const text = '100';
        userEvent.paste(emoji, text);
        expect(emoji).toHaveTextContent(text);
    });
});