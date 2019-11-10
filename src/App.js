import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import './components/assets/css/index.css';
import Navbar from "./components/template/navbar.component";
import CreateConstelacao from './components/constelacao/createconstelacao.component';
import CreateGalaxia from './components/galaxia/creategalaxia.component';
import CreateEstrela from './components/estrela/createestrela.component';
import CreateNebulosa from './components/nebulosa/createnebulosa.component';
//import ExercisesList from "./components/exercises-list.component";
import Index from "./components/index.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import Footer from './components/template/footer.component';
import ListConstelacao from './components/constelacao/listconstelacao.component';
import ListGalaxia from './components/galaxia/listgalaxias.component';
import ListEstrela from './components/estrela/listestrela.component';
import ListNebulosa from './components/nebulosa/listnebulosa.component';




function App() {
  return (
    <Router>
      <Navbar/>
      <Route path="/user/create" exact component={CreateUser} />
      <Route path="/constelacoes/create" exact component={CreateConstelacao} />
      <Route path="/galaxias/create" exact component={CreateGalaxia} />
      <Route path ="/estrelas/create" exact component={CreateEstrela} />
      <Route path="/nebulosas/create" exact component={CreateNebulosa} />
      <Route path="/" exact component={Index} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
      <Route path="/constelacoes" exact component={ListConstelacao} />
      <Route path="/galaxias" exact component={ListGalaxia} />
      <Route path="/estrelas" exact component={ListEstrela} />
      <Route path="/nebulosas" exact component={ListNebulosa} />
      <Footer/>
    </Router>
  );
}

export default App;
