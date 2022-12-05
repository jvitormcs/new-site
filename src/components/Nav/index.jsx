import {BrowserRouter as Router , Routes, Route, Link } from 'react-router-dom'
import Home from '../../screens/Home'
import Menu from '../Menu';
import Footer from '../Footer';
import QuemSomos from '../../screens/QuemSomos';
import ColetaSele from '../../screens/ColetaSele';
import ColetaPJ from '../../screens/ColetaPJ';
import Logistica from '../../screens/LogisticaRev';
import LixoZero from '../../screens/GestaoResi';
import AbraFili from '../../screens/AbraFili';
import TrabalheCo from '../../screens/TrabalheConosco';
import Agradecimento from '../../screens/Agradecimento';
import FaleConosco from '../../screens/FaleConosco';
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