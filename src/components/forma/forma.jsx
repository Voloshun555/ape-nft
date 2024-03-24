import { ErrorMessage, Field, Form, Formik } from 'formik';

import { ReactComponent as Discord } from '../../assets/icons/discord.svg';
import { ReactComponent as MetaMask } from '../../assets/icons/meta-mask.svg';
import { validationSchema } from '../../utils/schema';

import { Report } from 'notiflix/build/notiflix-report-aio';
import { useState } from 'react';
import s from './forma.module.scss';

export const Forma = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (values, { resetForm }) => {
    setIsSubmitted(true);
    const user = values.username.trim().replace('@', '');
    const wallet = values.walletAddress.trim();

    Report.success(
      `Welcome ${user}!`,
      `APE NFT to the community!
Your wallet address: ${wallet}`,
      'Okay',
      () => {
        resetForm();
        setIsSubmitted(false);
      },
    );
  };
  return (
    <Formik
      initialValues={{ username: '', walletAddress: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form autoComplete="off" className={s.forma}>
          <div className={s.containerForm}>
            <div className={s.containerIcon}>
              <Discord className={s.icon} />
            </div>
            <Field
              name="username"
              placeholder="@username"
              className={`${s.input} ${errors.username && touched.username ? s.error : ''}`}
              error={errors.username && touched.username ? 'true' : undefined}
            />
            {errors.username && touched.username ? (
              <ErrorMessage
                className={s.errorMessage}
                name="username"
                component="p"
              />
            ) : null}
          </div>
          <div className={s.containerForm}>
            <div className={s.containerIcon}>
              <MetaMask className={s.icon} />
            </div>
            <Field
              name="walletAddress"
              placeholder="Wallet address"
              className={`${s.input} ${errors.walletAddress && touched.walletAddress ? s.error : ''}`}
              error={
                errors.walletAddress && touched.walletAddress
                  ? 'true'
                  : undefined
              }
            />
            {errors.walletAddress && touched.walletAddress ? (
              <ErrorMessage
                className={s.errorMessage}
                name="walletAddress"
                component="p"
              />
            ) : null}
          </div>
          <button className={s.button} type="submit" disabled={isSubmitted}>
            {isSubmitted
              ? Object.keys(errors).length > 0
                ? 'ERROR'
                : 'MINTED'
              : 'MINT'}
          </button>
        </Form>
      )}
    </Formik>
  );
};
