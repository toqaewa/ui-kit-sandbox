import Form from '../Form';
import { FormConfig } from '../formTypes';

const registrationFormConfig: FormConfig = {
  title: 'Регистрация',
  description: 'Создайте новый аккаунт',
  storageKey: 'registrationFormData',
  submitButtonText: 'Зарегистрироваться',
  clearButtonText: 'Очистить',
  onSubmit: (data) => {
    console.log(data);
  },
  fields: [
    {
      name: 'username',
      type: 'text',
      placeholder: 'Имя',
      validation: {
        minLength: 3,
        maxLength: 20
      },
      size: 'S'
    },
    {
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      size: 'S'
    },
    {
      name: 'password',
      type: 'password',
      placeholder: 'Пароль',
      validation: {
        minLength: 6
      },
      size: 'S'
    },
    {
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'Подтверждение пароля',
      validation: {
        custom: (value, allData) => {
          if (value !== allData?.password) {
            return 'Пароли не совпадают';
          }
          return null;
        }
      },
      size: 'S'
    }
  ]
};

function RegistrationForm() {
  return <Form config={registrationFormConfig} />;
}

export default RegistrationForm;