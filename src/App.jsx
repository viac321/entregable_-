import { useEffect, useState } from "react"
import axios from "axios"
import UsersList from "./utilities/UsersList"
import "/src/styles/App.css"
import "/src/styles/CardList.css"
import "/src/utilities/UsersList.jsx"
import "/src/utilities/Form.jsx"
import Form from "./utilities/Form"
import ConsultUsers from "../src/functions/ConsultUsers"
import { useForm } from "react-hook-form"

function App() {
  const [openForm, setOpenForm] = useState(false);
  const [dataUser, setDataUser] = useState({});
  const [editMode, setEditMode] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }, 
    reset,
    setValue
    } = useForm();


    useEffect(() => {
      if(editMode === true){
        setValue("first_name", dataUser.first_name)
        setValue("last_name", dataUser.last_name)
        setValue("email", dataUser.email)
        setValue("password",dataUser.password)
        setValue("birthday", dataUser.birthday)
      }
    }, [editMode])

  console.log(dataUser)
//------------obtain users--------------------
  const[users, setUsers] = useState([]);
    const Base_URL = "https://users-crud.academlo.tech"; 
    useEffect(() => {
        axios
          .get(Base_URL + "/users/")
          .then(({ data }) => {setUsers(data);})
          .catch((error) => console.log(error));
      }, []);

    {/*create cars*/}

    const onSubmit = (data) => {
        if(editMode === true) {
          axios
          .put(Base_URL + "/users/" + dataUser.id + "/", data)
          .then(({ data: newUser }) => {
            reset(); 
            setOpenForm(false);
            alert("user modificated");
            const newUsers = users.map((user) => {
              return user.id === newUser.id ? newUser : user
            })
            setUsers(newUsers);
          })
          .catch((error) => console.log(error));
      }
        else{
        axios
          .post(Base_URL + "/users/", data)
          .then(({ data: newUser }) => {
            reset();
            alert("user created");
            setOpenForm(false);
            setUsers([...users, newUser]);
          })
          .catch((error) => console.log(error));}
    };
   
  const handleCreateBtn = () => {
    //const element = docuquerySelector("#Formu")ment.
    setOpenForm(true);
    //{if (element) {

    /* console.log(element)
    element.style.visibility = "visible"; */
    //}
  //}
  //------------delete users--------------------
   
  }
 
  return (
    <main className="Main">
     
      <div className="App">
      {openForm ?
        <div id="Formu">
          <Form onSubmit={onSubmit} setOpenForm={setOpenForm} register={register} errors={errors} handleSubmit={handleSubmit}/>
        </div>
      : null}
      <div id="Select">
         {/* <DeleSelect /> */}
      </div>
        <UsersList users={users} setOpenForm={setOpenForm} setDataUser={setDataUser} setEditMode={setEditMode}/>
        {/*  */}
        <section className="main">
            <div className="Header">
            <p className="List">List of user</p>
                <button onClick={() => handleCreateBtn()} className="Btn">Create new user</button>
            {ConsultUsers.length>=1 ? (<div className="Show">
              <UsersList users={ConsultUsers} />
            </div>): 
            ( <div>
               <img className="foto" src="/img/Ellipse 9.png" alt="" />
                <p className="you">You don t have any users on your list. Create a new user</p>  
            </div>
            )}
                <div className="circle1">
                </div>
                <div className="circle2">
                </div>
            </div>
        </section> 

      </div>
    </main>
  );
}
export default App;