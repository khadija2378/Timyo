import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

function AddAppointment(){
    const [subject,setSubject]=useState();
    const [description,setDescription]=useState();
    const [datetime,setDatetime]=useState();

    const {addAppointment}=useContext(AppContext);

const handleSubmit = async(e) =>{
e.preventDefault();
     
     const data = {    
           subject,
           description,
           datetime  
      };
 const success = await addAppointment(data);
  
  
       if(!success){
          alert("Erreur connexion");
          return;
       }
  
      if (success) {
          navigate('/listeAppointment');
      }
}

    return(
        <section class="bg-gray-50 pt-10">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center">
                  Add Appointment
              </h1>
              <form onSubmit={handleSubmit} class="space-y-4 md:space-y-6" action="#">
                <div>
                      <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 ">Subject</label>
                      <input type="text" value={subject} onChange={(e)=>setSubject(e.target.value)} name="name" id="subject" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Enter the subject..." required=""/>
                  </div>
                  <div>
                      <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                      <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)} name="description" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Enter a short description..." required=""/>
                  </div>
                  <div>
                      <label for="datetime" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Datetime</label>
                      <input type="datetime-local" value={datetime} onChange={(e)=>setDatetime(e.target.value)} name="datetime"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required=""/>
                  </div> 
                  
                  <button type="submit" class="w-full text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create Appointment</button>
                  
              </form>
          </div>
      </div>
  </div>
</section>
    )
}
export default AddAppointment;