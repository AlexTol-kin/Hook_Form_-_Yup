import styles from "./app.module.css";
import { fieldsSchema } from "./moduls/yupScheme/yupScheme";
import { showPassword } from "./moduls/constant/validation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(fieldsSchema),
  });
  const onSubmitHandler = (data) => {
    console.log({ data });
    reset();
  };

  const onLoginBlur = ({ target }) => {
    reset();
  };

  const seePassword = ({ target }) => {
    showPassword(target);
  };

  return (
    <div className={styles.app}>
      <button onClick={onLoginBlur} type="submit">
        Очистить поля
      </button>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <input
          className="email"
          name="email"
          type="email"
          placeholder="Почта"
          {...register("email")}
        />
        <p>{errors.email?.message}</p>
        <input
          className="password"
          name="password"
          type="password"
          placeholder="Пароль"
          {...register("password")}
        />
        <p>{errors.password?.message}</p>

        <input
          className="replayPassword"
          name="replayPassword"
          type="password"
          placeholder="Повторите пароль"
          {...register("replayPassword")}
        />
        <p>{errors.replayPassword?.message}</p>

        <button
          className={styles.login}
          type="submit"
          disabled={!!errors.password?.message}
        >
          Зарегистрироваться
        </button>
      </form>
      <button
        className={styles.seePassword}
        onClick={seePassword}
        type="submit"
      >
        Показать пароль
      </button>
    </div>
  );
};
