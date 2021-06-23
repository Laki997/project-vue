import baseService from "./baseService";

class UserService extends baseService {
  async get(id) {
    const { data } = await this.client.get(`/users/${id}`);
    console.log(data);
    return data;
  }
}

const userService = new UserService();
export default userService;
