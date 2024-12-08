import React from 'react';
import Slider from 'react-slick'; // Importação do react-slick
import 'slick-carousel/slick/slick.css'; // Estilos do carrossel
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom'; // Importando o Link para a navegação

const Post = ({ post }) => {
  console.log(post._id)
  console.log(post.userName)
  console.log(post.desc)


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Smartphones grandes
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleDelete = (id) => {
    // Lógica para deletar o post inteiro
    console.log('Deletando o post com ID:', id);
  };

  return (
    <section id="home" className="mb-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-center sm:text-left">
          Post de {post.userName}
        </h2>
        <div className="flex space-x-2">
          <Link
            to={`/update-post/1`} // Rota de atualização
            className="px-4 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-400 text-white font-medium transition"
          >
            Atualizar
          </Link>
          <button
            onClick={() => handleDelete(1)} // Deleta o post com o ID 1
            className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-400 text-white font-medium transition"
          >
            Deletar
          </button>
        </div>
      </div>

      <p className="text-gray-700 text-center sm:text-left">
        {post.desc}
      </p>

      <Slider {...settings} className="mt-6">
        <div>
          <div className="card p-4 bg-white shadow rounded-lg text-center">
            <img
              src="https://images.pexels.com/photos/1053687/pexels-photo-1053687.jpeg"
              alt="Livro em Destaque"
              className="fixed-img mx-auto"
            />
            <h3 className="font-semibold mt-2">Livro em Destaque</h3>
            <p className="text-sm text-gray-600">"A Montanha Mágica" - Thomas Mann</p>
          </div>
        </div>
        <div>
          <div className="card p-4 bg-white shadow rounded-lg text-center">
            <img
              src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
              alt="Resenha Popular"
              className="fixed-img mx-auto"
            />
            <h3 className="font-semibold mt-2">Resenha Popular</h3>
            <p className="text-sm text-gray-600">"Um livro que transforma vidas!"</p>
          </div>
        </div>
        <div>
          <div className="card p-4 bg-white shadow rounded-lg text-center">
            <img
              src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
              alt="Sugestões para Você"
              className="fixed-img mx-auto"
            />
            <h3 className="font-semibold mt-2">Sugestões para Você</h3>
            <p className="text-sm text-gray-600">"Grande Sertão: Veredas" - Guimarães Rosa</p>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default Post;
