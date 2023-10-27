### Часть 2: Работа с Actions и Reducers

В Redux, "actions" являются пакетами информации, которые отправляются из вашего приложения в хранилище. Чтобы создать действие, вам сначала нужно определить его "тип". Типы действий обычно хранятся в отдельных файлах для лучшей организации кода.

Редьюсеры в Redux — это чистые функции, которые принимают текущее состояние и действие, а затем возвращают новое состояние. Они не должны изменять входные параметры, не должны иметь побочных эффектов и должны возвращать новый объект, если состояние изменилось.

Для начала, установим необходимые пакеты:

```bash
npm install react redux react-redux redux-thunk axios
```

2. **Создание действий (actions)**:

-   **Типы действий** : `FETCH_WEATHER_REQUEST`, `FETCH_WEATHER_SUCCESS` и `FETCH_WEATHER_FAILURE` - это строки, представляющие типы действий, которые мы будем использовать для обозначения этапов асинхронной операции загрузки данных о погоде.
-   **Создатели действий** : `fetchWeatherRequest`, `fetchWeatherSuccess` и `fetchWeatherFailure` - это функции, которые создают объекты действий.
-   **Асинхронное действие** : `fetchWeather` - это функция, которая возвращает другую функцию. Внутренняя функция принимает `dispatch` в качестве аргумента и делает асинхронный запрос к API погоды с помощью `axios`.

```javascript
// src/actions/weatherActions.js

export const FETCH_WEATHER_REQUEST = "FETCH_WEATHER_REQUEST";
export const FETCH_WEATHER_SUCCESS = "FETCH_WEATHER_SUCCESS";
export const FETCH_WEATHER_FAILURE = "FETCH_WEATHER_FAILURE";

export const fetchWeatherRequest = () => {
    return {
        type: FETCH_WEATHER_REQUEST,
    };
};

export const fetchWeatherSuccess = (weather) => {
    return {
        type: FETCH_WEATHER_SUCCESS,
        payload: weather,
    };
};

export const fetchWeatherFailure = (error) => {
    return {
        type: FETCH_WEATHER_FAILURE,
        payload: error,
    };
};

export const fetchWeather = (city) => {
    return (dispatch) => {
        dispatch(fetchWeatherRequest());
        axios
            .get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY`
            )
            .then((response) => {
                const weather = response.data;
                dispatch(fetchWeatherSuccess(weather));
            })
            .catch((error) => {
                dispatch(fetchWeatherFailure(error.message));
            });
    };
};
```

3. **Создание редьюсеров (reducers)**:

-   **Исходное состояние** : Начальное состояние `initialState` определяет, как будет выглядеть начальное состояние нашего приложения.
-   **Редьюсер** : `weatherReducer` - это функция, которая принимает текущее состояние и действие, а затем возвращает новое состояние. Она обрабатывает различные типы действий и обновляет состояние в зависимости от типа действия.

```javascript
// src/reducers/weatherReducer.js

import {
    FETCH_WEATHER_REQUEST,
    FETCH_WEATHER_SUCCESS,
    FETCH_WEATHER_FAILURE,
} from "../actions/weatherActions";

const initialState = {
    loading: false,
    weather: {},
    error: "",
};

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_WEATHER_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_WEATHER_SUCCESS:
            return {
                loading: false,
                weather: action.payload,
                error: "",
            };
        case FETCH_WEATHER_FAILURE:
            return {
                loading: false,
                weather: {},
                error: action.payload,
            };
        default:
            return state;
    }
};

export default weatherReducer;
```

1. **Настройка хранилища (store)**:

-   Создается хранилище Redux с помощью функции `createStore`, которой передается редьюсер и middleware (`redux-thunk`) для обработки асинхронных действий.

```javascript
// src/store.js

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
```

5. **Создание компонентов React**:

-   **Компонент Weather** : Этот компонент использует хуки `useDispatch` и `useSelector` из `react-redux` для отправки действий и доступа к состоянию Redux соответственно. Компонент также использует хук `useEffect` для загрузки данных о погоде при первом рендеринге.

```javascript
// src/components/Weather.js

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchWeather } from "../actions/weatherActions";

function Weather() {
    const dispatch = useDispatch();
    const weatherData = useSelector((state) => state.weather);
    const { loading, weather, error } = weatherData;

    useEffect(() => {
        dispatch(fetchWeather("London"));
    }, [dispatch]);

    return (
        <div>
            {loading && <p>Loading...</p>}
            {weather.main && (
                <div>
                    <h2>Weather in {weather.name}</h2>
                    <p>Temperature: {weather.main.temp} K</p>
                    <p>Humidity: {weather.main.humidity} %</p>
                </div>
            )}
            {error && <p>{error}</p>}
        </div>
    );
}

export default Weather;
```

6. **Интеграция в основной компонент**:

-   Здесь мы оборачиваем наш компонент `Weather` в `Provider` от `react-redux`, который дает доступ к хранилищу Redux всем компонентам внутри него. Это позволяет нам использовать `useDispatch` и `useSelector` в нашем компоненте `Weather`.

```javascript
// src/index.js

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import Weather from "./components/Weather";

ReactDOM.render(
    <Provider store={store}>
        <Weather />
    </Provider>,
    document.getElementById("root")
);
```
