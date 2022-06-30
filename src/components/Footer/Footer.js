import './Footer.css'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
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
                    <li><a href='https://www.facebook.com/kempeess'><FacebookOutlinedIcon/></a></li>
                    <li><a href='mailto:fedekrenn@gmail.com'><EmailIcon/></a></li>
                    <li><a href='https://github.com/fedekrenn'><GitHubIcon/></a></li>
                    <li><a href='https://www.linkedin.com/in/fkrenn/'><LinkedInIcon/></a></li>
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