import { Outlet } from 'react-router';
import tmdbLogo from '../../assets/tmdb_logo.svg'
import './footer.styles.scss'

const Footer = () => { 
    return (
        <div className='footer-container'>
            <span className='credit'>Created by Jerald Velicaria</span>
            <span className='db-logo'>Powered By <img src={tmdbLogo} alt='The Movie Database Logo' />
            
            </span>
        </div>
    )
}


export default Footer; 