### Часть 1: Асинхронные действия с Redux Thunk

Redux Thunk — это middleware для Redux, предназначенное для работы с асинхронными операциями.

В стандартном Redux, action creators возвращают объекты действий. Redux Thunk позволяет возвращать функции, которые затем могут выполнять асинхронные операции.

В реальных приложениях часто приходится работать с асинхронными операциями: API-запросы, таймеры и т.д. Redux Thunk облегчает управление такими операциями.

### Настройка Redux и Redux Thunk

Для начала, установим необходимые пакеты:

```bash
npm install redux react-redux redux-thunk axios
```

#### `store.js`

```
my-redux-thunk-app/
|-- node_modules/
|-- public/
|   |-- index.html
|   |-- ...
|-- src/
|   |-- actions/
|   |   |-- index.js (ваш actions.js)
|   |-- reducers/
|   |   |-- index.js (ваш store.js, но только reducer)
|   |-- store/
|   |   |-- index.js (ваш store.js без reducer)
|   |-- components/
|   |   |-- App.js
|   |-- App.css
|   |-- index.js
|-- package.json
|-- ...
```


```javascript
// Импортируем необходимые функции из Redux и Redux Thunk
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// Инициализируем начальное состояние приложения
const initialState = {
    loading: false,
    data: [],
    error: "",
};

// Создаем reducer функцию для обработки actions и обновления state
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_DATA_REQUEST":
            // Устанавливаем loading в true при начале загрузки данных
            return {
                ...state,
                loading: true,
            };
        case "FETCH_DATA_SUCCESS":
            // Обновляем state данными и сбрасываем значения loading и error
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: "",
            };
        case "FETCH_DATA_FAILURE":
            // Устанавливаем сообщение об ошибке и сбрасываем loading и data
            return {
                ...state,
                loading: false,
                data: [],
                error: action.payload,
            };
        default:
            // Возвращаем текущее состояние, если тип action не совпадает
            return state;
    }
};

// Создаем Redux store с применением Thunk middleware
const store = createStore(reducer, applyMiddleware(thunk));
export default store;
```

### Создание асинхронных actions с помощью Redux Thunk

#### `actions.js`

```javascript
// Импортируем Axios для выполнения HTTP-запросов
import axios from "axios";

// Создаем асинхронный action creator
export const fetchData = () => {
    return (dispatch) => {
        // Диспатчим action для начала загрузки данных
        dispatch(fetchDataRequest());
        // Выполняем асинхронный запрос
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                // Диспатчим action для успешной загрузки данных
                dispatch(fetchDataSuccess(response.data));
            })
            .catch((error) => {
                // Диспатчим action для ошибки при загрузке данных
                dispatch(fetchDataFailure(error.message));
            });
    };
};

// Действие для начала загрузки данных
export const fetchDataRequest = () => {
    return {
        type: "FETCH_DATA_REQUEST",
    };
};

// Действие для успешной загрузки данных
export const fetchDataSuccess = (data) => {
    return {
        type: "FETCH_DATA_SUCCESS",
        payload: data,
    };
};

// Действие для ошибки при загрузке данных
export const fetchDataFailure = (error) => {
    return {
        type: "FETCH_DATA_FAILURE",
        payload: error,
    };
};
```

### React-компоненты

#### `App.js`

import React, { useEffect } from 'react';
// Импортируем хуки useSelector и useDispatch из React-Redux
import { useSelector, useDispatch } from 'react-redux';
// Импортируем наш асинхронный action creator
import { fetchData } from './actions';

function App() {
  // Получаем доступ к Redux store
  const dispatch = useDispatch();
  // Используем useSelector для выбора нужных частей state
  const data = useSelector(state => state.data);
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);

  // Используем useEffect для вызова асинхронного action при монтировании компонента
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    `<div className="App">`
      {/* Отображаем индикатор загрузки */}
      {loading && `<p>`Loading...`</p>`}
      {/* Отображаем загруженные данные */}
      {data.length > 0 && data.map(post => (
        `<div key={post.id}>`
          `<h2>`{post.title}`</h2>`
          `<p>`{post.body}`</p>`
        `</div>`
      ))}
      {/* Отображаем сообщение об ошибке */}
      {error && `<p>`{error}`</p>`}
    `</div>`
  );
}

export default App;
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "./actions";

function App() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.data);
    const loading = useSelector((state) => state.loading);
    const error = useSelector((state) => state.error);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    return (`<div className="App">`
            {loading && `<p>`Loading...`</p>`}
            {data.length > 0 &&
                data.map((post) => (
                    `<div key={post.id}>`
                        `<h2>`{post.title}`</h2>`
                        `<p>`{post.body}`</p>`
                    `</div>`
                ))}
            {error && `<p>`{error}`</p>`}
        `</div>`
    );
}

export default App;
