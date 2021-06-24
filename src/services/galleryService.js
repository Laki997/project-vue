import baseService from "./baseService";

class GalleryService extends baseService {
  async add(body) {
    const { data } = await this.client.post("/galleries", body);

    return data;
  }

  async getAll(page, term) {
    const { data } = await this.client.get("/galleries", {
      params: { term, page },
    });

    console.log(term);

    return data;
  }

  async getOne(id) {
    const { data } = await this.client.get(`/galleries/${id}`);

    console.log(data);
    return data;
  }
}

const galleryService = new GalleryService();
export default galleryService;
