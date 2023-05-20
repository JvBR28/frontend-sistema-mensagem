import React, {useState, useEffect} from 'react'
import 'react-router-dom'
import './styles.css'

function Home() {

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
    /*
  <div className='container'>
    <h1>Lista de Mensagens</h1>
    {message && message.length > 0 && message.map((messageObj, index) => (
      <Card key={messageObj.id} title={messageObj.title} description={messageObj.description} />
    ))}
  </div>
  */
  <div class="row">
  {message && message.length > 0 && message.map((messageObj, index) => (
    <div class="card col-md-2">
      <div class="card-body">
        <p class="card-date" key={messageObj.id}></p>
        <h5 class="card-title">{messageObj.title}</h5>
        <a href="/{messageObj.id}" class="btn btn-primary">Saber mais</a>
      </div>
    </div>
    ))}


    /*
    *                                <Link to='/home'>
                                    <button type="submit">Cadastrar</button>
                                    </Link>
    */
</div>
  )
}

export default Home