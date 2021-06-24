import baseService from "./baseService";

class CommentService extends baseService {
  async add(body) {
    const { data } = await this.client.post("/comments", body);
    console.log(body);

    return data;
  }

  async getComments(id) {
    const { data } = await this.client.get(`/galleries/${id}/comments`);

    console.log(data);

    return data;
  }
}

const commentService = new CommentService();
export default commentService;
