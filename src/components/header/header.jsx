import { ReactComponent as LogoIcon } from '../../assets/icons/logo.svg';

import { MenuLink } from '../menuLink/MenuLink';
import { SocialLink } from '../socialLinkHeader/socialLink';

import s from './header.module.scss';

export const Header = () => {
  return (
    <header className={s.container}>
      <p>
        <a href="#" className={s.logo}>
          <LogoIcon className={s.logoIcon} />
        </a>
      </p>
      <div>
        <MenuLink />
        <SocialLink />
      </div>
    </header>
  );
};
