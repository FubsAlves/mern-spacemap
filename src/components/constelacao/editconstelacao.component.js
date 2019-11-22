import React, { Component } from 'react';
import axios from 'axios';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from "mdbreact";

export default class EditConstelacao extends Component {
  constructor(props) {
    super(props);

    this.onChangeNome = this.onChangeNome.bind(this);
    this.onChangeDescricao = this.onChangeDescricao.bind(this);
    this.onChangeEstrelaPrincipal = this.onChangeEstrelaPrincipal.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      nome: '',
      descricao: '',
      estrela_principal : '',
      estrelas: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/constelacoes/'+this.props.match.params.id)
      .then(response => {
        
        this.setState({
          nome: response.data.nome,
          descricao: response.data.descricao,
          
        })
        if(response.data.estrela_principal){
          this.setState({
            estrela_principal: response.data.estrela_principal._id,
          })
        }
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('http://localhost:5000/estrelas/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            //users: response.data.map(user => user.username),
            estrelas: response.data
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

  onChangeEstrelaPrincipal(e) {
    this.setState({
      estrela_principal: e.target.value
    })
  }


  onSubmit(e) {
    e.preventDefault();

    const constelacao = {
      nome: this.state.nome,
      descricao: this.state.descricao,
      estrela_principal: this.state.estrela_principal
      
    }


    axios.post('http://localhost:5000/constelacoes/update/' + this.props.match.params.id, constelacao)
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
                <h3 className="h4 text-center py-4">Editar Constelação {this.state.nome}</h3>
                <div className="gray-text">
                  <MDBInput
                    label="Constelação"
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
                  <label>Estrela Principal</label>
                  <select className="browser-default custom-select mt-3" value={this.state.estrela_principal} onChange={this.onChangeEstrelaPrincipal}>
                    <option value="" disabled hidden>Selecione</option>
                    {
                      this.state.estrelas.map(function(estrelas) {
                        return <option 
                          key={estrelas._id}
                          value={estrelas._id} >{estrelas.nome}
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