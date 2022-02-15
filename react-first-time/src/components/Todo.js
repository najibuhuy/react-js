import {useState} from 'react'
import Modal from './Modal';
import BackDrop from './Backdrop'

function Todo(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function deleteHandler () {
        setModalIsOpen(true)
    }

    function closeHandler () {
        setModalIsOpen(false)
    }

    return (
        <div className="card">
         <h2> {props.text} </h2>
          <div className="actions">
            <button className="btn" onClick={deleteHandler}> Delete </button>
         </div>
         {modalIsOpen && <Modal onCancel={closeHandler} onConfirm={closeHandler} /> }
         {modalIsOpen && <BackDrop onCancel={closeHandler}/> }    
      </div>
    );
  }
  
  export default Todo;
  