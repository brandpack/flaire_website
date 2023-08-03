import { Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import React, { Suspense } from 'react';
import { BlogPage } from './pages/Blog/BlogPage';
import ToS from './pages/Tos/ToS';
import About from './pages/About/About';

function App() {
    const LazyMainPage = React.lazy(() => import('./pages/MainPage'))
    return (
        <div className="app dark">
            <Header />
            <Suspense fallback={<h1 className='Loading' >Loading...</h1>}>
                <Routes>
                    <Route path='/' element={<LazyMainPage />} />
                    <Route path='/blog' element={<BlogPage />} />
                    <Route path='/About' element={<About />} />
                    <Route path='/tos' element={<ToS />} />
                </Routes>
            </Suspense>
            <Footer />
        </div>
    )
}

export default App
