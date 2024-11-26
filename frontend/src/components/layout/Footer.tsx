import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Divider from "../divider/Divider";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#201c2d] to-[#262136] min-h-[309px] w-full flex flex-col justify-end text-white">
      <div className="flex justify-evenly h-full py-14 items-start gap-10 flex-wrap px-1">
        <ul className="flex flex-col gap-5 w-40">
          <li className="text-white/50">Categorías</li>
          <li>Cursos</li>
          <li>Aplicaciones</li>
          <li>Vende un Curso</li>
          <li>Vende una App</li>
        </ul>
        <ul className="flex flex-col gap-5 w-40">
          <li className="text-white/50">Acerca de</li>
          <li>Instructores</li>
          <li>Cursos</li>
          <li>Términos del Servicio</li>
          <li>Políticas de Privacidad</li>
        </ul>
        <ul className="flex flex-col gap-5 w-40">
          <li className="text-white/50">Soporte</li>
          <li>FAQ</li>
          <li>Contacto</li>
          <li>Foro</li>
        </ul>
        <ul className="flex flex-col gap-5 w-40">
          <li className="text-white">Encuentranos en</li>
          <div className="flex gap-5">
            <FontAwesomeIcon className="w-[15px]" icon={faFacebookF} />
            <FontAwesomeIcon className="w-[26px]" icon={faTwitter} />
            <FontAwesomeIcon className="w-[24px]" icon={faLinkedin} />
          </div>
        </ul>
      </div>
      <Divider />
      <div className="text-white flex justify-center items-center py-5">
        <p>Ⓒ KlowHub.</p>
      </div>
    </footer>
  );
};

export default Footer;
