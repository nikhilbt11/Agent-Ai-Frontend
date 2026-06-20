export const auth = {
  getToken() {
    return localStorage.getItem("token");
  },

  getUser() {
    const user =
      localStorage.getItem("user");

    return user
      ? JSON.parse(user)
      : null;
  },

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    window.location.href =
      "/login";
  },
};