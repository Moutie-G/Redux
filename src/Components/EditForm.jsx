import react ,{useState} from "react" ;
import Modal from "react-modal" ;
import {useDispatch} from "react-redux" ;
import {editAction} from "../Redux/actions" ;


const customStyles = {
content :{
    top :"50%",
    left: "50%",
    right: "auto" ,
    bottom : "auto" ,
    marginRight: "-50%" ,
    tronsform:"translate(-50%, -50%)" ,
},
};
Modal.seAppElement("#root");
const Edition =({oldTask}) => {
    const [modalIsOpen, setmodalIsOpen] = useState(false);
    const[old, setOld] = useState (oldTask.task);
    const dispatch = useDispatch();
    function openModal() {setIsOpen(true);}
    function closeModal() {setIsOpen(false);}
    const HandleChange = (e) => setOld(e.target.value);
    const HandleSubmit = (e) => {
        e.preveventDefault() ;
        const editedTask = {...oldTask, task :old} ;
        dispatch(editAction(editedTask));
        closeModal() ;
    };
    return (
        <div>
            <button onClick={modalIsOpen}>Edit</button>
         <Modal 
            isOpen ={modalIsOpen}
            onRequestClose = {closeModal}
            style ={customStyles}>
            <form onSubmit={HandleSubmit}>
                <input 
                className = "inp" 
                type = "text"
                value ={old}
                onChange ={HandleChange}/>
                <button>confirm</button>
                <button id = "del" on onClick ={closeModal}>Cancel</button>
            </form>
        </Modal>
        </div>
    );
}
export default EditForm ;