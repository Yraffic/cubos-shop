import './style.css'
import FecharModal from '../../assets/close-icon.svg'

export default  function Modal({produto, showModal, handleClose}){
    
    return(
        <>
            {showModal && 
                <div className="conteiner-modal">
                <div className="card-modal">
                    <img 
                    src={FecharModal} 
                    className="btn-close"  
                    onClick={()=> handleClose()}
                    />
                    <img src={produto.image} className='img-modal' />
                    <h1 className='modal-nome'> {produto.description} </h1>
                    <p className='descricao-modal'>
                        Sofisticado e cheio de elegância, este sapato estilo Derby deixará o seu look impecável. Feito de couro, conta com design moderno, solado flexível e palmilha extra macia. Com muito bom gosto e charme, é o tipo de sapato masculino que se adapta a qualquer ocasião, desde as formais as mais casuais. Fica incrível se combinado com camisa social manga longa e calça de linho.  
                    </p>
                    <div className='modal-compra'>
                        <button className='btn-comprar'>COMPRAR</button>
                        <div className='colum'>
                        <div className="precos-modal">
                            <p className='valor-antigo'>R$ {produto.oldPrice.toFixed(2)}</p>
                            <h1 className='valor-atual'>R$ {produto.currentPrice.toFixed(2)}</h1>
                        </div>
                        <div className="parcela">
                            <h3 className='divisao'>6x {(produto.currentPrice/6).toFixed(2)}</h3>
                            <span>sem juros</span>
                        </div>
                        </div>
                    </div>
                </div>
          </div>             
            }
        </>
    )
}