import baseService from "./baseService";

class CommentService extends baseService {
  async add(body) {
    const { data } = await this.client.post("/comments", body);
    console.log(body);

    return data;
  }
}

const commentService = new CommentService();
export default commentService;
