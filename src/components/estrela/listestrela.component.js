import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { MDBContainer, MDBCard, MDBCardBody, MDBCardTitle, MDBTable, MDBTableBody, MDBTableHead, MDBRow } from 'mdbreact';

const Estrela = props => (
  <tr>
    <td>{props.estrela.nome}</td>
    <td>{props.estrela.descricao}</td>
    <td>{props.estrela.magnitude}</td>
    <td>{props.estrela.tamanho}</td>
    <td>{props.estrela.massa}</td>
    <td>{props.estrela.distancia}</td>
    <td>{props.estrela.constelacao}</td>
    <td>{props.estrela.classificacao}</td>
    
    
    
    
    
    <td className='text-center'>
      <Link className='btn btn-warning' to={"/edit/"+props.estrela._id}>Editar</Link> <Link className="btn btn-danger" onClick={() => { props.deleteEstrela(props.estrela._id) }}>Deletar</Link>
    </td>
  </tr>
)

export default class EstrelasList extends Component {
  constructor(props) {
    super(props);

    
    this.deleteEstrela = this.deleteEstrela.bind(this)

    this.state = {estrelas: []};
  }
  

  componentDidMount() {
  //  this.setState({constelacoes: response.data})
    axios.get('http://localhost:5000/estrelas/')
      .then(response => {    
        
        response.data.map((estrela, key) => {
            
                response.data[key].constelacao = estrela.constelacao.nome
                response.data[key].classificacao = estrela.classificacao.classificacao
        
            
        });
        console.log(response.data)
        this.setState({estrelas: response.data})
        
      })
      .catch((error) => {
        console.log(error);
      })
      
  }

  deleteEstrela(id) {
    axios.delete('http://localhost:5000/estrelas/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      constelacoes: this.state.constelacoes.filter(el => el._id !== id)
      
    })
  }

  estrelaList() {
    return this.state.estrelas.map(currentestrela => {
      return <Estrela estrela={currentestrela} deleteEstrela={this.deleteEstrela} key={currentestrela._id}/>;
    })
  }

  render() {
    return (
      <MDBContainer className="my-5">
        <MDBCard>
          <MDBCardBody>
            
              <MDBCardTitle><MDBRow className="d-flex align-items-center justify-content-between mx-1"><h3>Lista de Estrelas</h3> <Link className='btn btn-primary' to='/estrelas/create'>Adicionar Estrela</Link></MDBRow></MDBCardTitle>
            
              <MDBTable bordered>
                <MDBTableHead color='purple text-center' textWhite>
                  <tr>
                    <th>Nome</th>
                    <th>Descrição</th>
                    <th>Magnitude</th>
                    <th>Tamanho</th>
                    <th>Massa</th>
                    <th>Distância</th>
                    <th>Constelação</th>
                    <th>Classificação Estelar</th>
                    <th className='text-center'>Ações</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  { this.estrelaList() }
                </MDBTableBody>
              </MDBTable>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    )
  }
}