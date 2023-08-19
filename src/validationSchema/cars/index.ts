import * as yup from 'yup';

export const carValidationSchema = yup.object().shape({
  model: yup.string().required(),
  year: yup.number().integer().required(),
  color: yup.string().required(),
  license_plate: yup.string().required(),
  status: yup.string().required(),
});
