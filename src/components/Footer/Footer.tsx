import './Footer.css';
import { Link } from 'react-router-dom';
import {
  AUTHOR_GITHUB_URL,
  SOURCE_CODE_GITHUB_URL,
  TECH,
  TECHS,
} from '../../utils/constants';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__info">
        <h4 className="footer__title">Исходный код</h4>
        <Link
          to={SOURCE_CODE_GITHUB_URL}
          target="_blank"
          className="footer__link"
        >
          GitHub проекта
        </Link>
        <h4 className="footer__title">Контакты</h4>
        <Link to={AUTHOR_GITHUB_URL} target="_blank" className="footer__link">
          GitHub Автора
        </Link>
      </div>
      <div className="footer__tech">
        <h4 className="footer__title">Технологии</h4>
        <ul className="footer__techs-list">
          {TECHS.map((tech: TECH) => (
            <li className="footer__techs-item" key={tech.title}>
              <Link
                to={tech.link}
                className="footer__tech-link"
                target="_blank"
              >
                <span
                  className={`footer__tech-icon footer__tech-icon_type_${tech.title}`}
                ></span>
                {tech.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer__author">
        Владимир Поляница &copy; {new Date().getFullYear()}
      </div>
    </footer>
  );
};
