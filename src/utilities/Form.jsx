import "/src/styles/Register.css";
import "/src/styles/App.css";
import { useForm } from "react-hook-form";
const Form = ({onSubmit, setOpenForm, register, handleSubmit, errors}) => {
  
    const handleCancelBtn = () => {
        setOpenForm(false)
        /* const elment = document.querySelector("#Formu")
        elment.style.visibility = "hidden" */
    }

    /* const {
    register,
    handleSubmit,
    formState: { errors },
    } = useForm(); */
  

  {/*  const [Update, setUpdate] = useState(null)
    const formRef = useForm(null);
    console.log(formRef)


   
  
    useEffect(() => {
      if(Update!==null){
        //?
        formRef.current.first_name.value = setUpdate.first_name;
        formRef.current.last_name.value = setUpdate.last_name;
        formRef.current.email.value = setUpdate.email;
        formRef.current.password.value = setUpdate.password;
        formRef.current.birthday.value = setUpdate.birthday;
      }
    },[Update])

   
    const handleClickToUpdate = (user) => {
      const elment = document.querySelector("#Form")
      elment.style.visibility = "visible"
      setUpdate(user)
    }
  */}

  
  return (
    <div id="Form">
      <div className="Trasfondo">

      {/*</div>*/}
     <div className="Contenedor__Card">
        <div className="Head_Contenedor">
          <img className="Ellipse" src="/img/Ellipse 9.png" alt="" />
        </div>
         {/*ref={formRef} */}
        <form
         
          autoComplete="off"
          className="Body_Contenedor"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="name">
            {" "}
            {/* celda First Name */}
            <label htmlFor="">First Name</label>
            <input
              placeholder="Enter name"
              type="text"
              name="first_name"
              {...register("first_name", {
                required: true,
                maxLength: 25,
                minLength: 1,
              })}
            />
            {errors.first_name && errors.first_name.type === "required" && (
              <p className="text-red-500">first name is required</p>
            )}
            {errors.first_name && errors.first_name.type === "maxLength" && (
              <p className="text-red-500">first name is too long</p>
            )}
            {errors.first_name && errors.first_name.type === "minLength" && (
              <p className="text-red-500">first name is too short</p>
            )}
          </div>

          <div className="Last">
            {" "}
            {/* celda Last Name */}
            <label htmlFor="">Last Name</label>
            <input
              placeholder="Enter last name"
              type="text"
              name="last_name"
              {...register("last_name", {
                required: true,
                maxLength: 25,
                minLength: 1,
              })}
            />
            {errors.last_name && errors.last_name.type === "required" && (
              <p className="text-red-500">last name is required</p>
            )}
            {errors.last_name && errors.last_name.type === "maxLength" && (
              <p className="text-red-500">last name is too long</p>
            )}
            {errors.last_name && errors.last_name.type === "minLength" && (
              <p className="text-red-500">last name is too short</p>
            )}
          </div>

          <div className="Email">
            {" "}
            {/* celda Email */}
            <label htmlFor="">Email</label>
            <input
              placeholder="Enter email"
              type="text"
              name="email"
              {...register("email", {
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                required: true,
                maxLength: 30,
                minLength: 1,
              })}
            />
            {errors.email && errors.email.type === "pattern" && (
              <p className="text-red-500">email is not valid</p>
            )}
            {errors.email && errors.email.type === "required" && (
              <p className="text-red-500">email is required</p>
            )}
            {errors.email && errors.email.type === "maxLength" && (
              <p className="text-red-500">email is too long</p>
            )}
          </div>

          <div className="Password">
            {" "}
            {/* celda Password */}
            <label htmlFor="">Password</label>
            <input
              placeholder="Enter password"
              type="text"
              name="password"
              {...register("password", {
                required: true,
                maxLength: 25,
                minLength: 1,
              })}
            />
            {errors.password && errors.password.type === "required" && (
              <p className="text-red-500">password is required</p>
            )}
            {errors.password && errors.password.type === "maxLength" && (
              <p className="text-red-500">password is too long</p>
            )}
            {errors.password && errors.password.type === "minLength" && (
              <p className="text-red-500">password is too short</p>
            )}
          </div>

          <div className="birthdays">
            {" "}
            {/* celda Birthday */}
            <label htmlFor="">Birthday</label>
            <input
              type="date"
              name="birthday"
              {...register("birthday", { required: true })}
            />
          </div>

          <div className="Botones">
            <button type="submit" value={"Submit"} className="btn__save">
              Save user
            </button>
            <button onClick={handleCancelBtn} className="btn__Cancel">
              Or Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
    
  );
};
export default Form;
