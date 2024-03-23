import { ReactComponent as AddSharp } from '../../assets/icons/add-sharp.svg';
import s from './banner.module.scss';

export const Banner = () => {
  return (
    <div className={s.container}>
      <ul className={s.banner}>
        <li className={s.bannerList}>
          <p>troy stereotypes</p>
          <AddSharp className={s.cross} />
        </li>
        <li className={s.bannerList}>
          <p>HAVE NO LIMITS</p>
          <AddSharp className={s.cross} />
        </li>
        <li className={s.bannerList}>
          <p>Break rules</p>
          <AddSharp className={s.cross} />
        </li>
      </ul>
    </div>
  );
};
