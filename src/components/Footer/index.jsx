import './style.sass';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__info">
                <p className="footer__info--title"><img src="/on-logo.svg" alt="" aria-hidden='true' /> Orange.notes</p>
                <p>O Orange Notes, uma plataforma onde você pode organizar seus cursos, vídeo aulas, artigos e tudo que envolve aprendizado em um local só, podendo ver seu progresso.</p>
            </div>
            <div className="footer__author">
                <p>Developed by <a href="https://github.com/sucodelarangela" target='_blank'>Angela Caldas</a></p>
            </div>
        </footer>
    );
};

export default Footer;