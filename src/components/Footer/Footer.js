import './Footer.css'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__description">
                <img
                    src="../assets/icons/icono-bike-store.svg"
                    alt="Logo de Bike Store"
                    className="logo-bike-store"
                />
                <p className="footer-text">Bikestore es una empresa familiar que nació por la necesidad de acercar a las personas al mundo del ciclismo, nuestro objetivo es ayudarte a alcanzar tu máximo rendimiento y que disfrutes el proceso</p>
            </div>
            <div className="footer__contact">
                <h3 className="footer-title">Diseñado por Federico Krenn</h3>
                <ul className='contact__icons'>
                    <li><FacebookOutlinedIcon /></li>
                    <li><TwitterIcon /></li>
                    <li><InstagramIcon /></li>
                    <li><LinkedInIcon /></li>
                </ul>
            </div>
            <div className="footer__extra-data">
                <ul>
                    <li>Legales</li>
                    <li>Política de devolución</li>
                    <li>Política de datos</li>
                    <li>Seguros para bicicletas</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer