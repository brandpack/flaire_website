import { Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import React, { Suspense } from 'react';
import { BlogPage } from './pages/Blog/BlogPage';
import ToS from './pages/Tos/ToS';

function App() {
    const LazyMainPage = React.lazy(() => import('./pages/MainPage'))
    return (
        <div className="app dark">
            <Header />
            <Suspense fallback={<h1>Loading...</h1>}>
                <Routes>
                    <Route path='/' element={<LazyMainPage />} />
                    <Route path='/blog' element={<BlogPage />} />
                    <Route path='/tos' element={<ToS />} />
                </Routes>
            </Suspense>
            <Footer />
        </div>
    )
}

export default App
