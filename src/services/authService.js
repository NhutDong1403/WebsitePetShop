import API from "./API";

export const login = (data) => API.post("/Auth/login", data);
export const getProfile = () => API.get("/users/me");
