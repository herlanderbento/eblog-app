import * as Yup from "yup";

export const createUsersSchemaValidate = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().required(),
  password: Yup.string().min(6).required(),
});

export const authenticateUserSchemaValidate = Yup.object().shape({
  email: Yup.string().required(),
  password: Yup.string().min(6).required(),
});
