<template>
  <form @submit.prevent="submit">
    <div>
      <div class="attributes">
        <h1>Личные данные</h1>
        <div class="errors" v-if="$v.form.$error">
          <ul>
            <li v-if="$v.form.last.$error">
              Ошибка в поле Фамилия (поле является обязательным и допустима лишь кириллица)
            </li>
            <li v-if="$v.form.first.$error">
              Ошибка в поле Имя (поле является обязательным и допустима лишь кириллица)
            </li>
            <li v-if="$v.form.patronimic.$error">
              Ошибка в поле Отчество (допустима лишь кириллица)
            </li>
            <li v-if="$v.form.date.$error">
              Ошибка в поле Дата рождения (поле является обязательным)
            </li>
            <li v-if="$v.form.number.$error">
              Ошибка в поле Номер телефона
              (поле является обязательным и номер должен начинаться с 7)
            </li>
            <li v-if="$v.form.group.$error">
              Ошибка в поле Группы клиента (поле является обязательным)
            </li>
            <li v-if="$v.form.index.$error">
              Ошибка в поле Индекс (допустимы лишь цифры)
            </li>
            <li v-if="$v.form.country.$error">
              Ошибка в поле Страна (допустима лишь кириллица)
            </li>
            <li v-if="$v.form.state.$error">
              Ошибка в поле Область (допустима лишь кириллица)
            </li>
            <li v-if="$v.form.city.$error">
              Ошибка в поле Город (поле является обязательным и допустима лишь кириллица)
            </li>
            <li v-if="$v.form.type.$error">
              Ошибка в поле Тип документа (поле является обязательным)
            </li>
            <li v-if="$v.form.serial.$error">
              Ошибка в поле Серия (допустимы лишь цифры)
            </li>
            <li v-if="$v.form.numberPass.$error">
              Ошибка в поле Номер (допустимы лишь цифры)
            </li>
            <li v-if="$v.form.dateTake.$error">
              Ошибка в поле Дата выдачи (поле является обязательным)
            </li>
          </ul>
        </div>
        <label for="last">
          Фамилия
          <span>*</span>
          <br>
          <input
            id="last"
            class="input"
            type="text"
            v-model="form.last"
          >
        </label>
        <label for="first">
          Имя
          <span>*</span>
          <br>
          <input
            id="first"
            class="input"
            type="text"
            v-model="form.first"
          >
        </label>
        <label for="patronimic">
          Отчество
          <br>
          <input
            id="patronimic"
            class="input"
            type="text"
            v-model="form.patronimic"
          >
        </label>
        <label for="date">
          Дата рождения
          <span>*</span>
          <br>
          <input
            id="date"
            class="input"
            type="date"
            v-model="form.date"
          >
        </label>
        <label for="number">
          Номер телефона
          <span>*</span>
          <br>
          <input
            id="number"
            class="input"
            type="text"
            placeholder="7"
            v-model="form.number"
          >
        </label>
        <p>Пол</p>
        <select>
          <option selected disabled>Выберите пол</option>
          <option value="Мужской">Мужской</option>
          <option value="Женский">Женский</option>
        </select>
        <label for="group">
          Группа клиента (можно выбрать несколько)
          <span>*</span>
          <br>
          <select multiple v-model="form.group">
            <option value="VIP">VIP</option>
            <option value="Проблемные">Проблемные</option>
            <option value="ОМС">ОМС</option>
          </select>
        </label>
        <p>Лечащий врач</p>
        <select>
          <option value="Иванов">Иванов</option>
          <option value="Захаров">Захаров</option>
          <option value="Чернышева">Чернышева</option>
        </select>
        <p>Не отправлять СМС<input class="check" type="checkbox"></p>
      </div>
      <div>
        <h3>Адрес</h3>
        <label for="index">
          Индекс
          <br>
          <input
            id="index"
            class="input"
            type="text"
            v-model="form.index"
          >
        </label>
        <label for="country">
          Страна
          <br>
          <input
            id="country"
            class="input"
            type="text"
            v-model="form.country"
          >
        </label>
        <label for="state">
          Область
          <br>
          <input
            id="state"
            class="input"
            type="text"
            v-model="form.state"
          >
        </label>
        <label for="city">
          Город
          <span>*</span>
          <br>
          <input
            id="city"
            class="input"
            type="text"
            v-model="form.city"
          >
        </label>
        <label for="street">
          Улица
          <br>
          <input
            id="street"
            class="input"
            type="text"
          >
        </label>
        <label for="house">
          Дом
          <br>
          <input
            id="house"
            class="input"
            type="text"
          >
        </label>
      </div>
      <div>
        <h3>Паспортные данные</h3>
        <label for="type">
          Тип документа
          <span>*</span>
          <br>
          <select v-model="form.type">
            <option value="Паспорт">Паспорт</option>
            <option value="Свидетельство о рождении">Свидетельство о рождении</option>
            <option value="Вод. удостоверение">Вод. удостоверение</option>
          </select>
        </label>
        <label for="serial">
          Серия
          <br>
          <input
            id="serial"
            class="input"
            type="text"
            v-model="form.serial"
          >
        </label>
        <label for="number-pass">
          Номер
          <br>
          <input
            id="number-pass"
            class="input"
            type="text"
            v-model="form.numberPass"
          >
        </label>
        <label for="who">
          Кем выдан
          <br>
          <input
            id="who"
            class="input"
            type="text"
          >
        </label>
        <label for="date-take">
          Дата выдачи
          <span>*</span>
          <br>
          <input
            id="date-take"
            class="input"
            type="date"
            v-model="form.dateTake"
          >
        </label>
      </div>
      <p><span>*</span>Поле обязательное для заполнения</p>
      <button type="submit">Отправить</button>
    </div>
  </form>
</template>

<script>
import { required } from 'vuelidate/lib/validators';

export default {
  name: 'PForm',

  data() {
    return {
      form: {
        last: null,
        first: null,
        patronimic: null,
        date: null,
        number: null,
        group: [],
        index: null,
        country: null,
        state: null,
        city: null,
        type: null,
        serial: null,
        numberPass: null,
        dateTake: null,
      },
    };
  },
  validations() {
    return {
      form: {
        last: {
          required,
          alpha: (val) => /^[а-яё]*$/i.test(val),
        },
        first: {
          required,
          alpha: (val) => /^[а-яё]*$/i.test(val),
        },
        patronimic: {
          alpha: (val) => /^[а-яё]*$/i.test(val),
        },
        date: { required },
        number: {
          required,
          validNumber: (val) => /^7\d/.test(val),
        },
        group: { required },
        index: {
          validIndex: (val) => /\d/.test(val),
        },
        country: {
          validCounty: (val) => /^[а-яё]*$/i.test(val),
        },
        state: {
          validState: (val) => /^[а-яё]*$/i.test(val),
        },
        city: {
          required,
          validCity: (val) => /^[а-яё]*$/i.test(val),
        },
        type: { required },
        serial: {
          validSerial: (val) => /\d/.test(val),
        },
        numberPass: {
          validNumberPass: (val) => /\d/.test(val),
        },
        dateTake: { required },
      },
    };
  },

  methods: {
    submit() {
      this.$v.form.$touch();
      if (this.$v.form.$error) {
        return;
      }
      alert('Form submitted');
    },
  },
};
</script>

<style lang="scss" scoped>
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    h1 {
      padding: 50px 150px;
    }
    .errors {
      max-width: 555px;
      background-color: rgb(240, 116, 116);
      border: 2px solid #f00;
      border-radius: 10px;
      padding: 10px 5px;
      margin-bottom: 15px;
      ul {
        list-style-type: none;
        li {
          margin: 0 5px;
        }
      }
    }
    p, label{
      padding: 10px 10px 0;
    }
    span {
      color: #f00;
    }
    .input, select {
      margin-bottom: 10px;
      width: 100%;
      padding: 5px;
      border: .5px solid rgb(190, 190, 190);
      border-radius: 5px;
      overflow: hidden;
      font-family: 'Lab Grotesque', sans-serif;
      &:hover {
        border-color: #000;
      }
    }
    h3 {
      margin: 20px 10px;
    }
    .check {
      margin: 0 10px;
    }
    button {
      padding: 5px 10px;
      font-family: 'Lab Grotesque', sans-serif;
      line-height: 24px;
      margin: 10px;
      border: .5px solid rgb(190, 190, 190);
      border-radius: 5px;
      cursor: pointer;
      &:hover {
        border-color: #000;
      }
      &:active {
        border: 1px solid #000;
        background-color: #fff;
      }
    }
  }
</style>
