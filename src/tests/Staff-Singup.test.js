import React from 'react';
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import Signup from '../components/Staff-Singup.js';
import axios from "axios";
import { MemoryRouter } from "react-router-dom";
jest.mock('axios');

const setup = async () => {
  render(
    <MemoryRouter>
      <Signup />
    </MemoryRouter>
  );
  await waitFor(() => expect(screen.queryByText('Loading . . .')).not.toBeInTheDocument(), { timeout: 5000 });
};

describe('Signup Component', () => {
  test('must display the signup title', async () => {
    await setup();
    expect(screen.getByText('Staff Sign-Up')).toBeInTheDocument();
  })

  test('must have a form with the following fields: email,username, password and a submit button', async () => {
    await setup();
    expect(screen.getByLabelText("Email")).toBeInTheDocument()
    expect(screen.getByLabelText("Username")).toBeInTheDocument()
    expect(screen.getByLabelText("Password")).toBeInTheDocument()
    expect(screen.getByLabelText("Confirm Password")).toBeInTheDocument()
    expect(screen.getByText("Sign Up")).toBeInTheDocument()
  })
  test('handles form submission and API response', async () => {
    await setup();
    axios.post.mockResolvedValue({ data: "Mock response data" });
    expect(screen.getByText('Staff Sign-Up')).toBeInTheDocument();
    fireEvent.change(screen.getByLabelText("Username"), {
      target: { value: "testuser" },
    });
    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "password123" },
    });
    fireEvent.change(screen.getByLabelText("Confirm Password"), {
      target: { value: "password123" },
    });

    fireEvent.click(screen.getByText("Sign Up"));

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith("api/register", {
        username: "testuser",
        email: "test@example.com",
        password: "password123",
        password2: "password123",
      });
    });
  });

});

