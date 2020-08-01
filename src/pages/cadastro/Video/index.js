import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroVideo() {
  const [nomeDaCategoria, setNomeDaCategoria] = useState('Nova Categoria')
  return (
    <PageDefault>
      <h1>Cadastro de Video: {nomeDaCategoria}</h1>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  )
}

export default CadastroVideo; 