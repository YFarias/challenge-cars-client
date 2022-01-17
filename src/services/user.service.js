import axios from "axios";

class UserService {
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
  
    
    userInf = async () => {
      return this.api.get('/api/users/current');
    }
  
    
    editInf = async (requestBody) => {
      return this.api.put(`/api/users/current`, requestBody);
    }
  
  
  }
  
  // Create one instance of the service
  const userService = new UserService();
  
  export default userService;