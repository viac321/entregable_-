import axios from "axios";
import { useEffect, useState } from "react";
const CreateUser = () => {
    const[users, setUsers] = useState([]);
    const Base_URL = "https://users-crud.academlo.tech"; 
    useEffect(() => {
        axios
          .get(Base_URL + "/users/")
          .then(({ data }) => setUsers(data))
          .catch((error) => console.log(error));
      }, []);
    
      return users
  
}
export default CreateUser