import { useEffect, useState } from 'react';
import s from './MenuLink.module.scss';
import  BurgerMenu  from '../burgerMenu/burgerMenu';
import { MenuNavList } from '../menuNavList/menuNavList';

export const MenuLink = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isShowBurgerMenu, setIsShowBurgerMenu] = useState(false);

  useEffect(() => {
    const autoResize = () => {
      setIsShowBurgerMenu(window.innerWidth <= 768);
    };
    autoResize();
    window.addEventListener('resize', autoResize);
    return () => {
      window.removeEventListener('resize', autoResize);
    };
  }, []);

  const handleClickOpenNavMenu = () => {
    setIsOpenMenu(prevState => !prevState);
  };

  return (
    <div className={s.container}>
      {isOpenMenu ? (
        isShowBurgerMenu ? (
          <BurgerMenu onClose={handleClickOpenNavMenu} />
        ) : (
          <MenuNavList />
        )
      ) : null}
      <button
        className={!isOpenMenu ? `${s.buttonIsOpen}` : `${s.buttonIsClose}`}
        onClick={handleClickOpenNavMenu}
      >
        {!isOpenMenu ? 'MENU' : 'Close'}
      </button>
    </div>
  );
};
