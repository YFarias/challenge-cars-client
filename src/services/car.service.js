import axios from 'axios';

class CarService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_SERVER_URL || "http://localhost:5005"
    });

    // Automatically set JWT token in the headers for every request
    this.api.interceptors.request.use((config) => {
      // Retrieve the JWT token from the local storage
      const storedToken = localStorage.getItem("authToken");

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }

  //!Post
  createOne = async (requestBody) => {
    return this.api.post('/api/cars', requestBody);
  }

  //!Get
  getAll = async () => {
    return this.api.get('/api/cars');
  }

  //!PUT
  updateOne = async (id, requestBody) => {
    return this.api.put(`/api/cars/${id}`, requestBody);
  }

  //!DELETE 
  deleteProject = async (id) => {
    return this.api.delete(`/api/cars/${id}`);
  } 


}

// Create one instance of the service
const carService = new CarService();

export default carService;