import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  username: yup
    .string()
    .transform(value => value.trim())
    .min(6, 'At least 6 characters')
    .matches(/^@[a-zA-Z0-9]+$/, 'Wrong discord')
    .required('Wrong discord'),
  walletAddress: yup
    .string()
    .transform(value => value.trim())
    .length(19, 'Must be exactly 19 characters')
    .matches(
      /^[a-zA-Z0-9]+$/,
      'Wallet address must contain only letters and digits',
    )
    .required('Wrong address'),
});
