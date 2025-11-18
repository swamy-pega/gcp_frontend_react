
import { Home,SquarePen,EditIcon,Image, FileText,MessageCircleQuestionMark } from 'lucide-react'
import { NavLink} from 'react-router-dom'

import { useState } from 'react'

//const navigate = useNavigate()


//const [active, setActive] = useState('Dashboard');
// ${temp === item.name ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white" : ""}


const Sidebar = () => {



    const Navitems=[

    { name: 'Dashboard', to: '/ai' ,image:<Home />},
    { name: 'generate-article', to: '/ai/generate-article' ,image:<SquarePen />},
    { name: 'generate-image', to: '/ai/generate-image' ,image:<Image />} ,
     { name: 'sample-quiz', to: '/ai/sample-quiz' ,image:<MessageCircleQuestionMark />} ,
    { name: 'review-resume', to: '/ai/review-resume' ,image:<FileText />} 
    ]
//const temp = 'Dashboard'; // This is a placeholder for the active state, replace with actual state management if needed
const {active, setActive} = useState('Dashboard');
//console.log("curactive item", active);

const setCurrent = (name) => {
    //alert(name);
  setActive(name);
  //console.log(name);
  //temp = name;

};
  return (
    <div className='flex flex-col border -r border-gray-200 bg-white text-black p-4 w-64 h-full'>
      {Navitems.map((item) => (
        <div key={item.name} className={`flex items-center 
       hover:bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg cursor-pointer transition-colors duration-200`}>
          <NavLink className={`flex items-center gap-2 p-4 space-x-2 space-y-2`} to={item.to} 
         onClick={() => setCurrent(item.name)} >{item.image} {item.name}</NavLink>

        </div>  
      ))}
    </div>
  )
}

export default Sidebar  