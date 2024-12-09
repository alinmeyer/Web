import React from 'react'

import Header from '../components/header/Header.jsx';
import Footer from '../components/footer/Footer.jsx';
import Carrossel from '../components/booksFeed/Carrossel.jsx';
import Biblioteca from '../components/booksFeed/Biblioteca.jsx';
import Post from '../components/creationPost/Posts.jsx';
import PostFeed from '../components/booksFeed/PostFeed.jsx';

const Home = () => {
    return (
        <div className="bg-gray-100 text-gray-900 min-h-screen flex flex-col">
          {/* Cabeçalho */}
          <Header />
          
          {/* Conteúdo Principal */}
          <main className="flex-grow container mx-auto p-4 sm:p-6">
            {/* Carrossel */}
            <Carrossel />
            {/* Biblioteca */}
            <Biblioteca />
          </main>

          <PostFeed />
    
          {/* Rodapé */}
          <Footer />
    
        </div>
      );
}

export default Home
