import {BrowserRouter as Router , Routes, Route, Link } from 'react-router-dom'
import Home from '../Home'
import Menu from '../Menu';
import Footer from '../Footer';
import QuemSomos from '../QuemSomos';
import ColetaSele from '../ColetaSele';
import ColetaPJ from '../ColetaPJ';
import Logistica from '../LogisticaRev';
import LixoZero from '../GestaoResi';
import AbraFili from '../AbraFili';
import TrabalheCo from '../TrabalheConosco';
import Agradecimento from '../Agradecimento';
import FaleConosco from '../FaleConosco';
const Nav = () => {

    return(
        <Router>
            
            <Menu />
            
            <Routes>
                <Route path='/' element={<Home/>}/>
                
                <Route path='/quem-somos' element={<QuemSomos/>} />
                <Route path='/coleta-residencia' element={<ColetaSele/>} />
                <Route path='/coleta-empresas' element={<ColetaPJ/>} />
                <Route path='/logistica-reversa' element={<Logistica/>} />
                <Route path='/lixo-zero' element={<LixoZero/>} />
                <Route path='/abra-filial' element={<AbraFili/>} />
                <Route path='/trabalhe-conosco' element={<TrabalheCo/>} />
                <Route path='/agradecimento' element={<Agradecimento/>} />
                <Route path='/list' element={<FaleConosco/>} />
            </Routes>
            <Footer />
        </Router>
    )

}

export default Nav