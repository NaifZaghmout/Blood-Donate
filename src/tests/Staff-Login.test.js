import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import axios from "axios";
import Login from "../components/Staff-Login.js";
import { MemoryRouter } from "react-router-dom";

jest.mock("axios");

const setup = async () => {
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );
  await waitFor(() => expect(screen.queryByText('Loading . . .')).not.toBeInTheDocument(), { timeout: 5000 });
};

describe('Login Component', () => {

  test('must display the login title', async () => {
    await setup();
    expect(screen.getByText('Staff Login')).toBeInTheDocument();
  })

  test('must have a form with the following fields: email,username, password and a submit button', async () => {
    await setup();
    expect(screen.getByLabelText("Email")).toBeInTheDocument()
    expect(screen.getByLabelText("Password")).toBeInTheDocument()
    expect(screen.getByLabelText("Username")).toBeInTheDocument()
    expect(screen.getByText("Login")).toBeInTheDocument()

  })
  test('handles form submission and API response', async () => {
    await setup();
    axios.post.mockResolvedValue({ data: "Mock response data" });

    fireEvent.change(screen.getByLabelText("Username"), {
      target: { value: "testuser" },
    });
    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "password123" },
    });

    fireEvent.click(screen.getByText("Login"));

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith("api/login", {
        username: "testuser",
        email: "test@example.com",
        password: "password123",
      });
    });
  });

});git
