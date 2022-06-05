import api from "../shared/api";

const getAll = () => {
  return api.get("/category");
};

const get = id => {
  return api.get(`/category/${id}`);
};

const create = data => {
  return api.post("/category", data);
};

const update = (id, data) => {
  return api.put(`/category/${id}`, data);
};

const remove = id => {
  return api.delete(`/category/${id}`);
};

const findByName = name => {
  return api.get(`/category/GetByName/${name}`);
};

const CategoryDataService = {
  getAll,
  get,
  create,
  update,
  remove,
  findByName
};

export default CategoryDataService;