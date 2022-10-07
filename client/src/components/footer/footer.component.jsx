import { Outlet } from 'react-router';
import tmdbLogo from '../../assets/tmdb_logo.svg'
import './footer.styles.scss'

const Footer = () => { 
    return (
        <div className='footer-container'>
            <div className='footer-content'>
                <span className='credit'>Created by Jerald Velicaria</span>
                <span className='db-logo'>
                    <img src={tmdbLogo} alt='The Movie Database Logo' />
                </span>
            </div>
        </div>
    )
}


export default Footer; 