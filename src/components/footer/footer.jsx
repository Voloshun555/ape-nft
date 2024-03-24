import s from './footer.module.scss';

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <p className={s.text}>
        © Yacht ape 2024 all rights <br /> reserved
      </p>
    </footer>
  );
};
