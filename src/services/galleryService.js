import baseService from "./baseService";

class GalleryService extends baseService {
  async add(body) {
    const { data } = await this.client.post("/galleries", body);

    return data;
  }
}

const galleryService = new GalleryService();
export default galleryService;
