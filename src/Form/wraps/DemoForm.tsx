import React from 'react';
import Form from '../Form';
import { FormConfig } from '../formTypes';

const DemoForm: React.FC = () => {
  const advancedFormConfig: FormConfig = {
    title: 'Демо-форма',
    description: 'Демонстрация Input и Button компонентов и схемы валидации',
    storageKey: 'demoForm',
    submitButtonText: 'Сохранить данные',
    clearButtonText: 'Очистить форму',
    onSubmit: async (data) => {
      // представим что тут запрос к апи
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Данные расширенной формы:', data);
      alert('Данные успешно сохранены!');  // TODO: компонент уведомление - туда алерты
    },
    // TODO: сейчас иконки это строки-смайлики, надо svg
    fields: [
      {
        name: 'username',
        type: 'text',
        placeholder: 'Имя пользователя',
        size: 'M',
        icon: '👤',
        helperText: 'Используйте настоящее имя для лучшего взаимодействия',
        helperTextIcon: '💡',
        validation: {
          minLength: 2,
          maxLength: 50
        }
      },
      {
        name: 'email',
        type: 'email',
        placeholder: 'Email адрес',
        size: 'M',
        icon: '📧',
        helperText: 'Мы отправим на этот email подтверждение'
      },
      {
        name: 'salary',
        type: 'number',
        placeholder: 'Зарплата',
        size: 'M',
        icon: '💰',
        afterText: 'RUB',
        helperText: 'Укажите ожидаемую зарплату в рублях',
        validation: {
          custom: (value) => {
            if (value && value < 0) {
              return 'Зарплата не может быть отрицательной';
            }
            return null;
          }
        }
      },
      {
        name: 'budget',
        type: 'number',
        placeholder: 'Бюджет проекта',
        size: 'L',
        icon: '📊',
        afterText: 'USD',
        helperText: 'Общий бюджет проекта в долларах США',
        helperTextIcon: '💼',
        validation: {
          custom: (value) => {
            if (value && value < 1000) {
              return 'Бюджет должен быть не менее 1000 USD';
            }
            return null;
          }
        }
      },
      {
        name: 'temperature',
        type: 'number',
        placeholder: 'Температура',
        size: 'S',
        icon: '🌡️',
        afterText: '°C',
        helperText: 'Температура в градусах Цельсия',
        validation: {
          custom: (value) => {
            if (value && (value < -50 || value > 100)) {
              return 'Температура должна быть в диапазоне от -50°C до 100°C';
            }
            return null;
          }
        }
      },
      {
        name: 'discount',
        type: 'number',
        placeholder: 'Скидка',
        size: 'S',
        icon: '🎁',
        afterText: '%',
        helperText: 'Размер скидки в процентах',
        validation: {
          custom: (value) => {
            if (value && (value < 0 || value > 100)) {
              return 'Скидка должна быть от 0% до 100%';
            }
            return null;
          }
        }
      },
      {
        name: 'website',
        type: 'text',
        placeholder: 'Ссылка',
        icon: '🔗',
        helperText: 'Введите полный URL вашего сайта',
        validation: {
          pattern: /^https?:\/\/.+\..+$/,
          custom: (value) => {
            if (value && !value.startsWith('http')) {
              return 'URL должен начинаться с http:// или https://';
            }
            return null;
          }
        }
      },
      {
        name: 'phone',
        type: 'tel',
        placeholder: 'Телефон',
        icon: '📞',
        helperText: 'Международный формат: +7 XXX XXX-XX-XX',
        validation: {
          pattern: /^\+?[\d\s\-\(\)]+$/,
          minLength: 10
        }
      },
      {
        name: 'description',
        type: 'textarea',
        placeholder: 'Описание проекта',
        rows: 4,
        size: 'L',
        icon: '📝',
        helperText: 'Опишите детали проекта максимально подробно',
        helperTextIcon: 'ℹ️',
        validation: {
          minLength: 10,
          maxLength: 1000
        }
      }
    ]
  };

  return <Form config={advancedFormConfig} />;
};

export default DemoForm;