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

  async delete(id) {
    const { data } = await this.client.delete(`/galleries/${id}`);

    return data;
  }

  async edit(gallery) {
    const { data } = await this.client.put(`/galleries/${gallery.id}`, gallery);

    return data;
  }
}

const galleryService = new GalleryService();
export default galleryService;
