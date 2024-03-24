import { ReactComponent as AddSharp } from '../../assets/icons/add-sharp.svg';
import { Forma } from '../forma/forma';
import s from './contactUs.module.scss';

export const ContactUs = () => {
  return (
    <section className={s.section} id="mint">
      <div className={s.container}>
        <h2 className={s.title}>Are you in?</h2>
        <AddSharp className={s.iconCross} />
        <p className={s.text}>
          Join the YACHT APE community to be one of the first to receive our
          limited edition NFT
        </p>
        <Forma />
      </div>
    </section>
  );
};
