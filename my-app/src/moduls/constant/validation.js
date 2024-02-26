export const emailValid =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const validationPassword =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/;

export const queryPassword = () => {
  return document.querySelector(".password");
};

export const queryReplayPassword = () => {
  return document.querySelector(".replayPassword");
};

export const showPassword = (target) => {
  if (target && queryPassword().type === "password") {
    queryPassword().type = "text";
    target.textContent = "Скрыть пароль";
    queryReplayPassword().type = "text";
  } else {
    queryPassword().type = "password";
    target.textContent = "Показать пароль";
    queryReplayPassword().type = "password";
  }
};
