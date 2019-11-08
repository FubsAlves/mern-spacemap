import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { MDBContainer, MDBCard, MDBCardBody, MDBCardTitle, MDBTable, MDBTableBody, MDBTableHead, MDBRow } from 'mdbreact';

const Constelacao = props => (
  <tr>
    <td>{props.constelacao.nome}</td>
    <td>{props.constelacao.descricao}</td>
    <td>{props.constelacao.estrela_principal}</td>
    
    
    <td className='text-center'>
      <Link className='btn btn-warning' to={"/edit/"+props.constelacao._id}>Editar</Link> <Link className="btn btn-danger" onClick={() => { props.deleteConstelacao(props.constelacao._id) }}>Deletar</Link>
    </td>
  </tr>
)

export default class ConstelacoesList extends Component {
  constructor(props) {
    super(props);

    
    this.deleteConstelacao = this.deleteConstelacao.bind(this)

    this.state = {constelacoes: []};
  }
  

  componentDidMount() {
  //  this.setState({constelacoes: response.data})
    axios.get('http://localhost:5000/constelacoes/')
      .then(response => {    
        
        response.data.forEach((constelacao, key) => {
            if(response.data[key].estrela_principal)
            response.data[key].estrela_principal = constelacao.estrela_principal.nome
            else{
              response.data[key].estrela_principal = ''
            }
        });
        this.setState({constelacoes: response.data})
        
      })
      .catch((error) => {
        console.log(error);
      })
      
  }

  deleteConstelacao(id) {
    axios.delete('http://localhost:5000/constelacoes/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      constelacoes: this.state.constelacoes.filter(el => el._id !== id)
      
    })
  }

  constelacaoList() {
    return this.state.constelacoes.map(currentconstelacao => {
      return <Constelacao constelacao={currentconstelacao} deleteConstelacao={this.deleteConstelacao} key={currentconstelacao._id}/>;
    })
  }

  render() {
    return (
      <MDBContainer className="my-5">
        <MDBCard>
          <MDBCardBody>
            
              <MDBCardTitle><MDBRow><h3>Lista de Constelações</h3> <Link className='btn btn-primary' to='/constelacoes/create'>Adicionar Constelação</Link></MDBRow></MDBCardTitle>
            
              <MDBTable bordered>
                <MDBTableHead color='purple' textWhite>
                  <tr>
                    <th>Nome</th>
                    <th>Descrição</th>
                    <th>Estrela Principal</th>
                    <th className='text-center'>Ações</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  { this.constelacaoList() }
                </MDBTableBody>
              </MDBTable>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    )
  }
}