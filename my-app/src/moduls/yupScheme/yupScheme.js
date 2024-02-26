import * as yup from "yup";
import { emailValid, validationPassword } from "../constant/validation";

export const fieldsSchema = yup.object().shape({
  email: yup.string().matches(emailValid, "Неккоректный email"),
  password: yup
    .string()
    .required("Введите пароль")
    .matches(
      validationPassword,
      "Пароль должнен содержать: заглавные и строчные латинские буквы, цифры, символы."
    )
    .min(6, "Недостаточно длинный пароль")
    .max(20, "Слишком длинный пароль"),

  replayPassword: yup
    .string()
    .required("Повторите пароль")
    .oneOf([yup.ref("password"), null], "Пароли не совпадают"),
});
