import { ErrorMessage, Formik } from 'formik';
import { validationSchema } from '../../utils/validateSchema';
import { ReactComponent as Discord } from '../../assets/icons/discord.svg';
import { ReactComponent as MetaMask } from '../../assets/icons/meta-mask.svg';
import s from './forma.module.scss';

export const Forma = () => {
  const handleSubmit = (values, { resetForm }) => {
    const user = values.username.trim().replace('@', '');
    const wallet = values.walletAddress.trim();

    resetForm();
  };
  return (
    <div>
      <Formik
        initialValues={{ username: '', walletAddress: '' }}
        validate={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <form autoComplete="off" className={s.forma}>
            <div className={s.containerForm}>
              <div className={s.containerIcon}>
                <Discord className={s.icon} />
              </div>
              <input
                name="username"
                placeholder="@username"
                className={s.input}
                error={errors.username && touched.username ? 'true' : undefined}
              />
              {errors.username && touched.username ? (
                <ErrorMessage
                  className={s.errors}
                  name="walletAddress"
                  component="div"
                />
              ) : null}
            </div>
            <div className={s.containerForm}>
              <div className={s.containerIcon}>
                <MetaMask className={s.icon} />
              </div>
              <input
                name="walletAddress"
                placeholder="Wallet address"
                className={s.input}
                error={
                  errors.walletAddress && touched.walletAddress
                    ? 'true'
                    : undefined
                }
              />
              {errors.walletAddress && touched.walletAddress ? (
                <ErrorMessage
                  className={s.errors}
                  name="walletAddress"
                  component="div"
                />
              ) : null}
            </div>
            <button className={s.button} type="submit">
              MINT
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};
