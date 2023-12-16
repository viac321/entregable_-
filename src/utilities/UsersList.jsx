import "/src/styles/Cards.css";
import DeleSelect from "./DeleSelect";
import { useState } from "react";
const UsersList = ({users, setOpenForm, setDataUser, setEditMode}) => {
const [idUser, setIdUser] = useState(null)
const elment = document.querySelector(".Delete")
  
const handleClickToUpdate = (user) => {
  setOpenForm(true)
  setDataUser(user)
  setEditMode(true)
  
  /* const elment = document.querySelector("#Form")
      elment.style.visibility = "hidden" */
      
    }
    


  return (
    
    <div className="Fondos">
      {idUser ? <DeleSelect userId={idUser} /> : null}
      <div id="Contenedor__Cards">
      {users.map((user) => (
        <div className="Card" key={user.id}>
          <p className="Name">
            {user.first_name + " " + user.last_name}
            <br />
            <span className="linea"></span>
          </p>
          <button onClick={() => setIdUser(user.id)} className="delete">
            
            <img src="/img/trash-2 1.png" alt="" />
          </button>
          <button onClick={() => handleClickToUpdate(user)} className="edit">
            <img src="/img/edit-2 1.png" alt="" />
          </button>
          <div className="email">
            <p>Email</p>
            <p>{user.email}</p>
          </div>
          <div className="birthday">
            <p>Birthday</p>
            <p>{user.birthday}</p>            

          </div>
        </div>
      
      ))}
</div>
    </div>

  );
};
export default UsersList;
