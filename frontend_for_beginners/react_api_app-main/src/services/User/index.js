import api from "../shared/api";

const login = data => {
  return api.post("/authentication", data);
};

const UserDataService = {
  login
};

export default UserDataService;