import './style.css'
import Logo from '../../assets/logo.svg'

export default function Header(){
    return (
        <div className='header'>
            <h1>MODA MASCULINA</h1>
            <h2>SAPATOS SOCIAIS - CASUAIS - ESPORTE FINO</h2>
            <img className='logo-header' src={Logo} alt="logo" />
        </div>
    )
}