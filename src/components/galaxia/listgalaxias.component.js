import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { MDBContainer, MDBCard, MDBCardBody, MDBCardTitle, MDBTable, MDBTableBody, MDBTableHead, MDBRow } from 'mdbreact';

const Galaxia = props => (
  <tr>
    <td>{props.galaxia.nome}</td>
    <td>{props.galaxia.descricao}</td>
    <td>{props.galaxia.magnitude}</td>
    <td>{props.galaxia.tamanho}</td>
    <td>{props.galaxia.distancia}</td>
    <td>{props.galaxia.numero_estrelas}</td>
    <td>{props.galaxia.constelacao}</td>
    <td>{props.galaxia.tipo}</td>
    
    
    
    
    
    <td className='text-center'>
      <Link className='btn btn-warning' to={"/edit/"+props.galaxia._id}>Editar</Link> <Link className="btn btn-danger" onClick={() => { props.deleteGalaxia(props.galaxia._id) }}>Deletar</Link>
    </td>
  </tr>
)

export default class GalaxiasList extends Component {
  constructor(props) {
    super(props);

    
    this.deleteGalaxia = this.deleteGalaxia.bind(this)

    this.state = {galaxias: []};
  }
  

  componentDidMount() {
  //  this.setState({constelacoes: response.data})
    axios.get('http://localhost:5000/galaxias/')
      .then(response => {    
        
        response.data.map((galaxia, key) => {
            
                response.data[key].constelacao = galaxia.constelacao.nome
                response.data[key].tipo = galaxia.tipo.tipo
        
            
        });
        console.log(response.data)
        this.setState({galaxias: response.data})
        
      })
      .catch((error) => {
        console.log(error);
      })
      
  }

  deleteGalaxia(id) {
    axios.delete('http://localhost:5000/galaxias/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      constelacoes: this.state.constelacoes.filter(el => el._id !== id)
      
    })
  }

  galaxiaList() {
    return this.state.galaxias.map(currentgalaxia => {
      return <Galaxia galaxia={currentgalaxia} deleteGalaxia={this.deleteGalaxia} key={currentgalaxia._id}/>;
    })
  }

  render() {
    return (
      <MDBContainer className="my-5">
        <MDBCard>
          <MDBCardBody>
            
              <MDBCardTitle><MDBRow className="d-flex align-items-center justify-content-between mx-1"><h3>Lista de Galáxias</h3> <Link className='btn btn-primary' to='/galaxias/create'>Adicionar Galáxia</Link></MDBRow></MDBCardTitle>
            
              <MDBTable bordered>
                <MDBTableHead color='purple text-center' textWhite>
                  <tr>
                    <th>Nome</th>
                    <th>Descrição</th>
                    <th>Magnitude</th>
                    <th>Tamanho</th>
                    <th>Distância</th>
                    <th>Número de Estrelas</th>
                    <th>Constelação</th>
                    <th>Tipo</th>
                    <th className='text-center'>Ações</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  { this.galaxiaList() }
                </MDBTableBody>
              </MDBTable>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    )
  }
}