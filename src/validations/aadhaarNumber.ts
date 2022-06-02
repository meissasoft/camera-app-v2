import * as yup from 'yup';

export const aadhaarNumber = yup.object().shape({
  aadhaarNumber: yup.string().required('Aaadhaar Number is Required'),
  securityCode: yup.string().required('Security Number is Required'),
});
