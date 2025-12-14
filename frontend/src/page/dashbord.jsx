import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";

function Dashbord(){
     const [app,setApp]=useState([]);
        const {getApp}=useContext(AppContext);
    
        useEffect(()=>{
            getApp().then(data => setApp(data));    
        },[])
return(
     <section class="bg-gray-50 pt-80">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
       <h1 class="text-xl font-bold pb-10 text-gray-800 md:text-2xl text-center">
                  Liste Appointment users
              </h1>
        <table className="w-full border border-gray-200">
          <thead className="bg-white border-b border-gray-200">
            <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">
                    Id
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">
                    Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">
                    Subject
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">
                    Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">
                    Datetime
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">
                    status
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {app.map((p)=>(
            <tr key={p.id} className="border-b border-gray-200 bg-white">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {p.id}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                    {p.user.name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                    {p.subject}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                    {p.description}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                    {p.datetime}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                    {p.status}
                </td>
                <td className="px-6 py-4 space-x-5 text-sm text-gray-600">
                    <a href="#" class="font-medium text-red-700 hover:underline">Cancel</a>
                    <a href="#" class="font-medium text-green-700 hover:underline">Confirme</a>
                </td>
                
            </tr>
             ))} 
        </tbody>
    </table>
    </div>
</section>
)
}
export default Dashbord;