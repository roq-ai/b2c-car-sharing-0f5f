import * as yup from 'yup';

export const driverValidationSchema = yup.object().shape({
  license_number: yup.string().required(),
  availability_status: yup.string().required(),
  user_id: yup.string().nullable(),
  car_id: yup.string().nullable(),
});
