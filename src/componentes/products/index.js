import './style.css'
import {useState} from 'react'


export default function Products({handleProduto, produto}){
  
    return (
        <div className='conteiner-produto'>
                <div
                    className="produto"
                    onClick={()=> handleProduto(produto)}
                 >
                        <img src={produto.image} />
                        <span className='discricao'>{produto.name}</span>
                    <div className='informacao'>
                        <p className='valor-antigo'>R$ {produto.oldPrice.toFixed(2)}</p>
                        <h1 className='valor-atual'>R$ {produto.currentPrice.toFixed(2)}</h1>
                    </div>
                    <div className="parcela">
                        <h3 className='divisao'>6x {(produto.currentPrice/6).toFixed(2)}</h3>
                        <span>sem juros</span>
                    </div>
                </div> 
        </div>
    )
}