import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { Menu } from "./Menu";
import Dashboard from './Dashboard';
import Footer from './Footer';
import { Table } from './Table';


function App() {
  return (
    <div class="wrapper">
      <Header/> 
      <Menu/> 
      <Dashboard/> 
      <Footer/> 
      <Table/>
    </div>
  );
}

export default App;