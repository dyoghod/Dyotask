import React, {useState, useEffect} from 'react'
import {Redirect} from 'react-router-dom'
import * as S from './styles'
import {format} from 'date-fns'
import api from '../../services/api'
//componentes
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import TypeIcons from '../../utils/typeIcons'




function Task({match}) {
    const[redirect, setRedirect] = useState(false)
    const[lateCount, setLateCount] = useState()
    const[type, setType] = useState()
    const[id, setId] = useState()
    const[done, setDone] = useState(false)
    const[title, setTitle] = useState()
    const[description, setDescription] = useState()
    const[date, setDate] = useState()
    const[hour, setHour] = useState()
    const[macaddress, setMacaddress] = useState('22:22:22:22:22:22')


    

  async function lateVerify(){
    await api.get(`/task/filter/late/22:22:22:22:22:22`).then(response => {
      setLateCount(response.data.length)
      
    })
  }

  async function LoadTaskDetails(){
    await api.get(`/task/${match.params.id}`).then(response =>{
      setType(response.data.type)
      setTitle(response.data.title)
      setDescription(response.data.description)
      setDate(format(new Date (response.data.when), 'yyyy-MM-dd'))
      setHour(format(new Date (response.data.when), 'HH:mm'))


    })
  }

  async function Save(){
    if(match.params.id){
      await api.put(`/task/${match.params.id}`, {
        macaddress,
        type,
        title,
        description,
        when: `${date}T${hour}:00.000`
      }).then(() => setRedirect(true))
    
    }else{
      await api.post('/task', {
        macaddress,
        type,
        title,
        description,
        when: `${date}T${hour}:00.000`
      }).then(() => setRedirect(true))
    }
    }
    

   useEffect(()=>{
    lateVerify()
    LoadTaskDetails()
  },[])


  return (
    <S.Container>
      {redirect && <Redirect to="/"/>}
      <Header lateCount={lateCount} />

      <S.Form>
        <S.TypeIcons>
          {
            TypeIcons.map((icon, index) => (
              index > 0 &&
              <button type="button" onClick={() => setType(index)}>
              <img src={icon} alt="Tipo da Tarefa" className={type && type !== index && 'inative' }/>
              </button>
              ))
          }

        </S.TypeIcons>

        <S.Input>
          <span>T??tulo</span>
          <input type="text" placeholder="T??tulo da tarefa..." onChange={e => setTitle(e.target.value)} value={title}/>
        </S.Input>

        <S.TextArea>
          <span>Descri????o</span>
          <textarea rows={5} placeholder="Detalhes da tarefa..." onChange={e => setDescription(e.target.value)} value={description} />
        </S.TextArea>

        <S.Input>
          <span>Data</span>
          <input type="date"  onChange={e => setDate(e.target.value)} value={date} />
          
        </S.Input>

        <S.Input>
          <span>Hora</span>
          <input type="time" onChange={e => setHour(e.target.value)} value={hour} />
          
        </S.Input>

        <S.Options>
          <div>
            <input type="checkbox" checked={done} onChange={()=> setDone(!done)}/>
            <span>CONCLU??DO</span>
          </div>
          <button type="button">EXCLUIR</button> 
        </S.Options>

        <S.Save>
          <button type="button" onClick={Save}>SALVAR</button>
        </S.Save>
      </S.Form>
        
      <Footer/>
    </S.Container>)
}

export default Task;