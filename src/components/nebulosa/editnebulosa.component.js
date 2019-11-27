import React, { Component } from 'react';
import axios from 'axios';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from "mdbreact";

export default class EditEstrela extends Component {
  constructor(props) {
    super(props);

    this.onChangeNome = this.onChangeNome.bind(this);
    this.onChangeDescricao = this.onChangeDescricao.bind(this);
    this.onChangeMagnitude = this.onChangeMagnitude.bind(this);
    this.onChangeDistancia = this.onChangeDistancia.bind(this);
    this.onChangeConstelacao = this.onChangeConstelacao.bind(this);
    this.onChangeClassificacao = this.onChangeClassificacao.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        nome: '',
        descricao: '',
        magnitude : '',
        tamanho : '',
        distancia : '',
        constelacao : '',
        classificacao : '',
        constelacoes : [],
        classificacoes : []
        
      }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/nebulosas/'+this.props.match.params.id)
      .then(response => {
        
        this.setState({
            nome : response.data.nome,
            descricao : response.data.descricao,
            magnitude : response.data.magnitude,
            tamanho : response.data.tamanho,
            distancia : response.data.distancia,
            constelacao : response.data.constelacao._id,
            classificacao : response.data.classificacao._id
          
        })
        console.log(this.state)
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('http://localhost:5000/constelacoes/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            //users: response.data.map(user => user.username),
            constelacoes: response.data
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

      axios.get('http://localhost:5000//classificacoes/nebulosa')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            //users: response.data.map(user => user.username),
            classificacoes: response.data
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangeNome(e) {
    this.setState({
      nome: e.target.value
    })
  }
  onChangeDescricao(e) {
    this.setState({
      descricao: e.target.value
    })
  }
  onChangeMagnitude(e) {
    this.setState({
      magnitude: e.target.value
    })
  }
  onChangeDistancia(e) {
    this.setState({
      distancia: e.target.value
    })
  }
  onChangeConstelacao(e) {
    this.setState({
      constelacao: e.target.value
    })
  }
  onChangeClassificacao(e) {
    this.setState({
      classificacao: e.target.value
    })
  }


  onSubmit(e) {
    e.preventDefault();
    

    const nebulosa = {
        nome: this.state.nome,
        descricao: this.state.descricao,
        magnitude : this.state.magnitude,
        distancia : this.state.distancia,
        constelacao : this.state.constelacao,
        classificacao : this.state.classificacao
    }

    axios.post('http://localhost:5000/nebulosas/update/' + this.props.match.params.id, nebulosa)
      .then(res => console.log(res.data));

  }

  render() {
    return (
        <MDBContainer className="my-4">
      <MDBRow>
        <MDBCol md="12">
          <MDBCard>
            <MDBCardBody>
              <form onSubmit={this.onSubmit}>
                <h3 className="h4 text-center py-4">Editar Nebulosa {this.state.nome}</h3>
                <div className="gray-text">
                  <MDBInput
                    label="Nebulosa"
                    type="text"
                    value={this.state.nome}
                    onChange={this.onChangeNome}
                  />
                  <MDBInput
                    label="Descrição"
                    type="textarea"
                    value={this.state.descricao}
                    onChange={this.onChangeDescricao}
                   
                  />
                   <MDBInput
                    label="Magnitude"
                    type="text"
                    value={this.state.magnitude}
                    onChange={this.onChangeMagnitude}
                  />
                   <MDBInput
                    label="Distância"
                    type="text"
                    value={this.state.distancia}
                    onChange={this.onChangeDistancia}
                  />
                  <label>Constelação</label>
                  <select className="browser-default custom-select mt-3" value={this.state.constelacao} onChange={this.onChangeConstelacao}>
                    <option value="" disabled hidden>Selecione</option>
                    {
                      this.state.constelacoes.map(function(constelacao) {
                        return <option 
                          key={constelacao._id}
                          value={constelacao._id}>{constelacao.nome}
                          </option>;
                      })
                    } 
                  </select>
                  <label className = 'mt-3'>Classificação</label>
                  <select className="browser-default custom-select mt-3" value={this.state.classificacao} onChange={this.onChangeClassificacao}>
                    <option value="" disabled hidden>Selecione</option>
                    {
                      this.state.classificacoes.map(function(classificacao) {
                        return <option 
                          key={classificacao._id}
                      value={classificacao._id}>{classificacao.classificacao}
                          </option>;
                      })
                    } 
                  </select>
                </div>
                <div className="text-center py-4 mt-3">
                  <MDBBtn color="green" type="submit" onClick={this.onSubmit}>
                      Alterar
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    )
  }
}