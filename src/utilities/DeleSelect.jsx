import axios from "axios";
import "/src/styles/App.css"
import "/src/styles/Delete.css";
import { useEffect } from "react";
const DeleSelect = ({ userId }) => {
 
const Base_URL = "https://users-crud.academlo.tech";


    const handleAnswerNo = () => {
        const elment = document.querySelector(".Delete")
        elment.style.visibility = "hidden"
      }
      const DeleteUsers = (uId) => {
     
        axios.delete(`${Base_URL}/users/${uId}/`) // Usar userId en la URL
              .then(() => alert("user deleted"))
              .catch((error) => console.log(error));
    }
 
  return (
    <div className="Delete">
      <section className="Fondo">
        <div className="Contenedor">
            <div className="img">
                <img className="imagen" src="/img/Ellipse 9.png" alt="" />
            </div>
            <div className="info">
                <div className="contenedordos">
                    <p>Are you sure you want to delete this user?</p>

                    <button onClick={() => DeleteUsers(userId)}  className="btn__delete">Yes, delete</button>
                    <button onClick={() => handleAnswerNo()} className="btn__cancel">or cancel</button>
                </div>
            </div>
        </div>
      </section>
    </div>
    
  )
}
export default DeleSelect