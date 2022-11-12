import './style.css';
import Header from '../../componentes/header'
import Products from '../../componentes/products'
import Footer from '../../componentes/footer'
import data from '../../data'
import { useState } from 'react';
import Modal from '../../componentes/Modal';

function Main() {
  const [showModal, setShowModal] = useState(false)
  const [produtos, setProdutos] = useState(data)
  const [produtoAtual, setProdutoAtual] = useState({})
  
  function handleModal(id){
    handleProduto(id)
    setShowModal(true)
  }
  function handleClose(){
    setShowModal(false)
}

  function handleProduto(produto){
    setShowModal(true)
    setProdutoAtual(produto)
  }
  
  return (
    <div className="conteiner-main">
        <Header />
        <div className="conteiner-products">
          {produtos.map((produto)=>(
              <Products 
                handleProduto={handleProduto}
                produto={produto}
                key={produto.id}
            />
          ))}
       </div>
        <Footer />
       <Modal 
       produto={produtoAtual} 
       showModal={showModal}
       handleClose={handleClose}
       />
    </div>
  );
}

export default Main;
