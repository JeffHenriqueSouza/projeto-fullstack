import "./Card.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

export const Card = () => {
    const [dadosFormulario, setDadosFormulario] = useState({email: '', senha: ''})

    function updateFormValues (e) {
        const { name, value } = e.target;

        setDadosFormulario((prev) => ({
            ...prev,
            [name]: value
          }));       
    }
    
  return (
    <form className="formulario-cadastro">
      <h1 className="titulo-formulario">Cadastre seu perfil</h1>
      <div className="campos-formulario">
        <div className="textfield">
            <label><FontAwesomeIcon className="icones" icon={faEnvelope}/>Email</label>
            <input onChange={(e) => updateFormValues(e)} value={dadosFormulario.email} autoComplete="off" className='input-cadastro' type="text" max={40} name="email" placeholder="Email"/>
        </div>
        <div className="textfield">
            <label><FontAwesomeIcon className="icones" icon={faLock}/>Senha</label>
            <input onChange={(e) => updateFormValues(e)} value={dadosFormulario.senha} className='input-cadastro' type="password" max={40} name="senha" placeholder="Senha"/>
        </div>
      </div>
      <button className="botao-formulario">Cadastrar</button>
    </form>
  );
};
