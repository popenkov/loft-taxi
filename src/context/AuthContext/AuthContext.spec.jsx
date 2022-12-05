import { render } from "@testing-library/react";
import React from "react";
import { act } from "react-dom/test-utils";

import { AuthProvider, AuthContext } from "./AuthContext";

describe("AuthContext", () => {
  describe("#logIn", () => {
    it("sets 'isLoggedIn' to false", () => {
      let isLoggedIn;
      let logIn;

      render(
        <AuthProvider>
          <AuthContext.Consumer>
            {(value) => {
              isLoggedIn = value.isLoggedIn;
              logIn = value.logIn;
              return null;
            }}
          </AuthContext.Consumer>
        </AuthProvider>
      );

      expect(isLoggedIn).toBe(false);
      act(() => {
        logIn("test", "test");
      });
      expect(isLoggedIn).toBe(true);
    });
  });

  describe("#logOut", () => {
    it("sets 'isLoggedIn' to false", () => {
      let isLoggedIn;
      let logOut;
      let logIn;

      render(
        <AuthProvider>
          <AuthContext.Consumer>
            {(value) => {
              logOut = value.logOut;
              logIn = value.logIn;
              isLoggedIn = value.isLoggedIn;
              return null;
            }}
          </AuthContext.Consumer>
        </AuthProvider>
      );

      act(() => {
        logIn("test", "test");
        logOut();
      });

      expect(isLoggedIn).toBe(false);
    });
  });
});
