import baseService from "./baseService";

class GalleryService extends baseService {
  async add(body) {
    const { data } = await this.client.post("/galleries", body);

    return data;
  }

  async getAll(page) {
    const { data } = await this.client.get("/galleries", { params: page });

    return data;
  }
}

const galleryService = new GalleryService();
export default galleryService;
