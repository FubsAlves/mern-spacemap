import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { MDBContainer, MDBCard, MDBCardBody, MDBCardTitle, MDBTable, MDBTableBody, MDBTableHead, MDBRow } from 'mdbreact';

const Nebulosa = props => (
  <tr>
    <td>{props.nebulosa.nome}</td>
    <td>{props.nebulosa.descricao}</td>
    <td>{props.nebulosa.magnitude}</td>
    <td>{props.nebulosa.distancia}</td>
    <td>{props.nebulosa.constelacao}</td>
    <td>{props.nebulosa.classificacao}</td>
    
    
    <td className='text-center'>
      <Link className='btn btn-warning' to={"/edit/"+props.nebulosa._id}>Editar</Link> <Link className="btn btn-danger" onClick={() => { props.deleteNebulosa(props.nebulosa._id) }}>Deletar</Link>
    </td>
  </tr>
)

export default class NebulosasList extends Component {
  constructor(props) {
    super(props);

    
    this.deleteNebulosa = this.deleteNebulosa.bind(this)

    this.state = {nebulosas: []};
  }
  

  componentDidMount() {
  //  this.setState({constelacoes: response.data})
    axios.get('http://localhost:5000/nebulosas/')
      .then(response => {    
        
        response.data.map((nebulosa, key) => {
            
                response.data[key].constelacao = nebulosa.constelacao.nome
                response.data[key].classificacao = nebulosa.classificacao.classificacao
        
            
        });
        console.log(response.data)
        this.setState({nebulosas: response.data})
        
      })
      .catch((error) => {
        console.log(error);
      })
      
  }

  deleteNebulosa(id) {
    axios.delete('http://localhost:5000/nebulosas/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      nebulosas: this.state.nebulosas.filter(el => el._id !== id)
      
    })
  }

  nebulosaList() {
    return this.state.nebulosas.map(currentnebulosa => {
      return <Nebulosa nebulosa={currentnebulosa} deleteNebulosa={this.deleteNebulosa} key={currentnebulosa._id}/>;
    })
  }

  render() {
    return (
      <MDBContainer className="my-5">
        <MDBCard>
          <MDBCardBody>
            
              <MDBCardTitle><MDBRow className="d-flex align-items-center justify-content-between mx-1"><h3>Lista de Nebulosas</h3> <Link className='btn btn-primary' to='/nebulosas/create'>Adicionar Nebulosa</Link></MDBRow></MDBCardTitle>
            
              <MDBTable bordered>
                <MDBTableHead color='purple text-center' textWhite>
                  <tr>
                    <th>Nome</th>
                    <th>Descrição</th>
                    <th>Magnitude</th>
                    <th>Distância</th>
                    <th>Constelação</th>
                    <th>Classificação</th>
                    <th className='text-center'>Ações</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  { this.nebulosaList() }
                </MDBTableBody>
              </MDBTable>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    )
  }
}