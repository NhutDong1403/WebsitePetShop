import React, { createContext, useContext, useState, useEffect } from "react";
// import toàn bộ module, sau đó dùng .default
import { jwtDecode } from "jwt-decode";
import { getAccessToken } from "../services/TokenService";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const token = getAccessToken();
    if (token) {
      const decoded = jwtDecode(token); // jwtDecode từ jwt-decode
      setUser({
        username: decoded.username,
        role: decoded.role,
        avatar: decoded.avatar || "/images/Profile.gif",
      });
    }
  }, []);

  const login = (userData) => setUser(userData);
  const logout = () => {
    setUser(null);
    localStorage.removeItem("accessToken");
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
