import React, {useState, useEffect} from 'react'
import 'react-router-dom'
import './styles.css'
import Modal from 'react-modal';


Modal.setAppElement("#root");

function Home() {

    const [modalIsOpen, setIsOpen] = useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal() {
      setIsOpen(false);
    }

    const [message, setMessage] = useState([]);

    const fetchData = () => {
      return fetch("http://127.0.0.1:8000/api/messages")
      .then((response) => response.json())
      .then((data) => setMessage(data));
    }

    useEffect(() => {
        fetchData();
    }, [])
  


  return (
    <div className='Container'>
      <button onClick={openModal}>Abrir Mensagens</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        {message && message.length > 0 && message.map((messageObj, index) => (
          <div className="dados">
            <div>
              <h1 key={messageObj.id}>Mensagem: {messageObj.id}</h1>
              <h2>{messageObj.title}</h2>
              <p>
                {messageObj.description}
              </p>
              <hr />
            </div>
          </div>
        ))}
        <button onClick={closeModal}>Close</button>
      </Modal>

    </div>

  )
}

export default Home