import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzg2ZmZhMTFiNGI4NGY5ODQwZTkwZWVmMGFjMjUzYSIsIm5iZiI6MTc1MzMzNDg0Ny41NTUsInN1YiI6IjY4ODFjNDNmMjIzMDBhNTBhNzcyZGE2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sluKQazPqxwLS_WhrWU4eTF65GtFEMMdMakt3fKXYug",
  },
});

export default instance;
