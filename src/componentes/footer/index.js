import './style.css'
import Insta from '../../assets/instagram.svg'
import Face from '../../assets/facebook.svg'
import Logo from '../../assets/logo.svg'

export default function Footer(){
    return (
        <div className='container-footer'>
           <div className="primeira">
            <div className="endereco">
                <p>Endereço:</p>
                    <span>
                        Rua Cubos ,  10
                        Jardim Academy
                        Salvador - Bahia - CEP 41820-021
                    </span>
            </div>
            <div className="rede-sociais">
                <img src={Face} alt="logo-facebook" />
                <img src={Insta} alt="logo-instagram" />
            </div>
           </div>
           
           <div className="listra"></div>

           <div className="logo">
                <img src={Logo} alt="logo" />
           </div>
        </div>
    )
}