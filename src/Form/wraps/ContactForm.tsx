import Form from '../Form';
import { FormConfig } from '../formTypes';

const contactFormConfig: FormConfig = {
  title: 'Контактная форма',
  description: 'Заполните форму ниже и мы свяжемся с вами в ближайшее время',
  storageKey: 'contactFormData',
  submitButtonText: 'Отправить сообщение',
  clearButtonText: 'Очистить форму',
  onSubmit: (data) => {
    console.log(data);
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      placeholder: 'Имя',
      required: true,
      validation: {
        minLength: 2
      }
    },
    {
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      required: true
    },
    {
      name: 'phone',
      type: 'tel',
      placeholder: 'Телефон',
      validation: {
        pattern: /^\+?[\d\s\-\(\)]+$/,
        custom: (value) => {
          if (value && value.length < 10) {
            return 'Номер телефона слишком короткий';
          }
          return null;
        }
      }
    },
    {
      name: 'message',
      type: 'textarea',
      placeholder: 'Сообщение',
      required: true,
      validation: {
        minLength: 10
      },
      rows: 4
    }
  ]
};

function ContactForm() {
  return <Form config={contactFormConfig} />;
}

export default ContactForm;