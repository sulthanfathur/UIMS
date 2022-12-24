import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './hocs/Layout';
import Home from './components/Home';
import News from './components/News';
import NewsDetail from './components/NewsDetail';
import About from './components/About';
import Team from './components/Team';
import GokartTeam from './components/GokartTeam';
import EVTeam from './components/EVTeam';
import MarketingTeam from './components/MarketingTeam';
import ScrollToTop from "./scrollToTop";

const App = () => (
    <Router>
        <ScrollToTop />
        <Layout>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/about' element={<About />} />
                <Route exact path='/news' element={<News />} /> 
                <Route exact path='/news/:id' element={<NewsDetail />} /> 
                <Route exact path='/team' element={<Team />} /> 
                <Route exact path='/team/gokart' element={<GokartTeam />} /> 
                <Route exact path='/team/ev' element={<EVTeam />} /> 
                <Route exact path='/team/marketing' element={<MarketingTeam />} /> 
            </Routes>
        </Layout>
    </Router>
);

export default App;