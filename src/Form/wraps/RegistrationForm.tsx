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
      required: true,
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
      required: true,
      size: 'S'
    },
    {
      name: 'password',
      type: 'password',
      placeholder: 'Пароль',
      required: true,
      validation: {
        minLength: 6
      },
      size: 'S'
    },
    {
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'Подтверждение пароля',
      required: true,
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