import React, { Component } from 'react';
import axios from 'axios';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from "mdbreact";

export default class EditEstrela extends Component {
  constructor(props) {
    super(props);

    this.onChangeNome = this.onChangeNome.bind(this);
    this.onChangeDescricao = this.onChangeDescricao.bind(this);
    this.onChangeMagnitude = this.onChangeMagnitude.bind(this);
    this.onChangeTamanho = this.onChangeTamanho.bind(this);
    this.onChangeDistancia = this.onChangeDistancia.bind(this);
    this.onChangeNumeroEstrelas = this.onChangeNumeroEstrelas.bind(this);
    this.onChangeConstelacao = this.onChangeConstelacao.bind(this);
    this.onChangeTipo = this.onChangeTipo.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        nome: '',
        descricao: '',
        magnitude : '',
        tamanho : '',
        distancia : '',
        numero_estrelas: '',
        constelacao : '',
        tipo : '',
        constelacoes : [],
        tipos : []
        
      }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/galaxias/'+this.props.match.params.id)
      .then(response => {
        
        this.setState({
            nome : response.data.nome,
            descricao : response.data.descricao,
            magnitude : response.data.magnitude,
            tamanho : response.data.tamanho,
            distancia : response.data.distancia,
            constelacao : response.data.constelacao._id,
            tipo : response.data.tipo._id
          
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

      axios.get('http://localhost:5000/tipogalaxia')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            //users: response.data.map(user => user.username),
            tipos: response.data
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
  onChangeTamanho(e) {
    this.setState({
      tamanho: e.target.value
    })
  }
  onChangeDistancia(e) {
    this.setState({
      distancia: e.target.value
    })
  }
  onChangeNumeroEstrelas(e) {
      this.setState({
          numero_estrelas: e.target.value
      })
  }
  onChangeConstelacao(e) {
    this.setState({
      constelacao: e.target.value
    })
  }
  onChangeTipo(e) {
    this.setState({
      tipo: e.target.value
    })
  }


  onSubmit(e) {
    e.preventDefault();
    

    const galaxia = {
        nome: this.state.nome,
        descricao: this.state.descricao,
        magnitude : this.state.magnitude,
        tamanho : this.state.tamanho,
        distancia : this.state.distancia,
        numero_estrelas : this.state.numero_estrelas,
        constelacao : this.state.constelacao,
        tipo : this.state.tipo
    } 

    axios.post('http://localhost:5000/galaxias/update/' + this.props.match.params.id, galaxia)
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
                <h3 className="h4 text-center py-4">Adicionar Galáxia</h3>
                <div className="gray-text">
                  <MDBInput
                    label="Galáxia"
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
                    label="Tamanho"
                    type="text"
                    value={this.state.tamanho}
                    onChange={this.onChangeTamanho}
                  />
                   <MDBInput
                    label="Número de Estrelas"
                    type="text"
                    value={this.state.numero_estrelas}
                    onChange={this.onChangeNumeroEstrelas}
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
                  <label className = 'mt-3'>Tipo Kepler</label>
                  <select className="browser-default custom-select mt-3" value={this.state.tipo} onChange={this.onChangeTipo}>
                    <option value="" disabled hidden>Selecione</option>
                    {
                      this.state.tipos.map(function(tipo) {
                        return <option 
                          key={tipo._id}
                      value={tipo._id}>{tipo.tipo}
                          </option>;
                      })
                    } 
                  </select>
                </div>
                <div className="text-center py-4 mt-3">
                  <MDBBtn color="green" type="submit" onClick={this.onSubmit}>
                      Cadastrar
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