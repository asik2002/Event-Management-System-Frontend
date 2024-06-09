import Modal from 'react-modal'
import { toast } from 'react-toastify'
import "./ProfileMenu.css"
import { useAuth } from '../../../AuthContext'
import { getDetailsByEmail,deleteUser } from '../../../ApiServices'
import { useEffect,useState } from 'react'
const Profilemenu = ({ isOpen, onRequestClose }) => {
    const {user,logout} =useAuth();
    const [userData, setUserData] = useState(null); 
    useEffect(() => {
        const loadData = async () => {
          try {
            const fetchedUserData = await getDetailsByEmail(user.email);
            setUserData(fetchedUserData);
          } catch (error) {
            console.log("backend Error");
          }
        };
        loadData();
      },[user.email]);
      const deactivateUser = async() => {
        const confirm = window.confirm('Are you sure want to Delete your account?')
        if(confirm){
        try{
      const response = await deleteUser(user.email);
      toast.success(response);
      logout();
     }
        catch(error){
      toast.error("Some backend Error")
        }
      }}
    return (
   <Modal
   isOpen={isOpen}
   onRequestClose={onRequestClose}
   className="event-modal disable-scroll"
   overlayClassName="event-modal-overlay"
    >  
      {userData && (
          
          <div className='content-modal'>
            <b>Email:</b> <p>{userData.email}</p>
            <b>User Name:</b> <p>{userData.user_name}</p>
            <b>Mobile No:</b> <p>{userData.mobile_no}</p>
            <button className='custom-btn btn-unenroll' onClick={()=>deactivateUser()}>Delete My Account</button>
            <span className='material-symbols-outlined form-close-btn' onClick={onRequestClose}>close</span>
           </div>
          
       )}
   </Modal>
  )
}

export default Profilemenu