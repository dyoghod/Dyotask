import React from 'react'
import * as S from './styles'
import {Link} from 'react-router-dom'

import logo from '../../assets/1.png'
import bell from '../../assets/bell.png'


function Header({lateCount, clickNotification}) {
  return (
    <S.Container>
      <S.LeftSide>
        <img src={logo} alt="Logo" />
      </S.LeftSide>
      <S.RightSide>
      <Link to="/">Início</Link>
        <span className="dividir"/>
        <Link to="/task">Nova Tarefa</Link>
        <span className="dividir"/>
        <a href="#">Sincronizar Celular</a>
        <span className="dividir"/>
        <button onClick={clickNotification} id="notification" >
          <img src={bell} alt="Notificação"/>
          <span>{lateCount}</span>
        </button>

      </S.RightSide>
    </S.Container>)
}

export default Header;