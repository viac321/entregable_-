import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
const EditUsers = () => {
   
    const {
        register,
        handleSubmit,
        formState: { errors },
        } = useForm();
      
    
        const [Update, setUpdate] = useState(null)
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
  
  
  return (
    <div>EditUsers</div>
  )
}
export default EditUsers