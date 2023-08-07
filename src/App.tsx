import { Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import React, { Suspense } from 'react';

function App() {
    const LazyMainPage = React.lazy(() => import('./pages/MainPage'))
    const LazyBlogPage = React.lazy(() => import('./pages/Blog/BlogPage'))
    const LazyTosPage = React.lazy(() => import('./pages/Tos/ToS'))
    const LazyAboutPage = React.lazy(() => import('./pages/About/About'))
    return (
        <div className="app dark">
            <Header />
            <Suspense fallback={<h1 className='Loading' ><span className="loader"></span></h1>}>
                <Routes>
                    <Route path='/' element={<LazyMainPage />} />
                    <Route path='/blog' element={<LazyBlogPage />} />
                    <Route path='/About' element={<LazyAboutPage />} />
                    <Route path='/tos' element={<LazyTosPage />} />
                </Routes>
            </Suspense>
            <Footer />
        </div>
    )
}

export default App
