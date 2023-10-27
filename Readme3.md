### Часть 3: Создание приложения с API NASA и тестирование с Redux

В этой части мы создадим приложение на React и Redux, которое будет использовать API NASA для отображения фотографий дня. Мы также напишем тесты для actions, reducers и middleware.

Структура каталогов:

```
- src/
  - actions/
    - nasaActions.js
  - reducers/
    - nasaReducer.js
    - index.js
  - components/
    - NasaComponent.js
  - tests/
    - nasaActions.test.js
    - nasaReducer.test.js
  - App.js
  - index.js
```

#### 1. Установка зависимостей

```bash
npm install axios react-redux redux redux-thunk jest @testing-library/react
```

#### 2. Actions (src/actions/nasaActions.js)

```javascript
// Определение типов действий
export const FETCH_PHOTO_START = "FETCH_PHOTO_START";
export const FETCH_PHOTO_SUCCESS = "FETCH_PHOTO_SUCCESS";
export const FETCH_PHOTO_FAILURE = "FETCH_PHOTO_FAILURE";

// Создатели действий для начала, успеха и ошибки запроса
export const fetchPhotoStart = () => ({
    type: FETCH_PHOTO_START,
});

export const fetchPhotoSuccess = (photoData) => ({
    type: FETCH_PHOTO_SUCCESS,
    payload: photoData,
});

export const fetchPhotoFailure = (error) => ({
    type: FETCH_PHOTO_FAILURE,
    payload: error,
});

// Асинхронное действие для запроса к API
export const fetchNasaPhoto = () => {
    return async (dispatch) => {
        dispatch(fetchPhotoStart());

        try {
            const response = await axios.get(
                `https://api.nasa.gov/planetary/apod?api_key=YOUR_NASA_API_KEY`
            );
            dispatch(fetchPhotoSuccess(response.data));
        } catch (error) {
            dispatch(fetchPhotoFailure(error));
        }
    };
};
```

#### 3. Reducer (src/reducers/nasaReducer.js)

```javascript
import {
    FETCH_PHOTO_START,
    FETCH_PHOTO_SUCCESS,
    FETCH_PHOTO_FAILURE,
} from "../actions/nasaActions";

const initialState = {
    loading: false,
    photo: null,
    error: null,
};

// Редьюсер
const nasaReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PHOTO_START:
            return { ...state, loading: true };
        case FETCH_PHOTO_SUCCESS:
            return { ...state, loading: false, photo: action.payload };
        case FETCH_PHOTO_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default nasaReducer;
```

#### 4. Combine Reducers (src/reducers/index.js)

```javascript
import { combineReducers } from "redux";
import nasaReducer from "./nasaReducer";

const rootReducer = combineReducers({
    nasa: nasaReducer,
});

export default rootReducer;
```

#### 5. Nasa Component (src/components/NasaComponent.js)

```javascript
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNasaPhoto } from "../actions/nasaActions";

const NasaComponent = () => {
    const dispatch = useDispatch();
    const photo = useSelector((state) => state.nasa.photo);
    const loading = useSelector((state) => state.nasa.loading);
    const error = useSelector((state) => state.nasa.error);

    const handleFetchPhoto = () => {
        dispatch(fetchNasaPhoto());
    };

    return (
        <div>
            <button onClick={handleFetchPhoto}>Fetch NASA Photo</button>
            {loading && <p>Loading...</p>}
            {photo && <img src={photo.url} alt={photo.title} />}
            {error && <p>Error: {error.message}</p>}
        </div>
    );
};

export default NasaComponent;
```

#### 6. App Component (src/App.js)

```javascript
import React from "react";
import NasaComponent from "./components/NasaComponent";

const App = () => {
    return (
        <div className="App">
            <NasaComponent />
        </div>
    );
};

export default App;
```

#### 7. Entry Point (src/index.js)

```javascript
import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import App from "./App";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
```

#### 8. Тестирование Actions (src/tests/nasaActions.test.js)

Этот код представляет собой набор юнит-тестов, написанных с использованием библиотеки Jest, для тестирования Redux action creators в контексте приложения, работающего с API NASA для получения фотографий. Давайте разберем код по частям.

### Импорты

```javascript
import * as actions from "../actions/nasaActions";
import {
    FETCH_PHOTO_START,
    FETCH_PHOTO_SUCCESS,
    FETCH_PHOTO_FAILURE,
} from "../actions/nasaActions";
```

- `import * as actions from "../actions/nasaActions";` импортирует все экспортируемые функции (action creators) из файла `nasaActions.js` в объект `actions`.
- Три константы `FETCH_PHOTO_START`, `FETCH_PHOTO_SUCCESS`, `FETCH_PHOTO_FAILURE` импортируются для сравнения с типами действий в тестах.

### describe() и it()

```javascript
describe("nasa actions", () => {
    // ...
});
```

- `describe()` является функцией Jest, которая позволяет группировать несколько тестов. Она принимает строку, описывающую, что именно тестируется ("nasa actions" в этом случае), и функцию, содержащую набор тестов.

### Тесты

Внутри `describe()`, каждый тест обернут в функцию `it()`, которая описывает, что именно этот тест должен проверить.

#### Тест 1: Проверка начала загрузки

```javascript
it("should create an action to start fetching photo", () => {
    const expectedAction = {
        type: FETCH_PHOTO_START,
    };
    expect(actions.fetchPhotoStart()).toEqual(expectedAction);
});
```

- Здесь мы ожидаем, что вызов `actions.fetchPhotoStart()` вернет действие с типом `FETCH_PHOTO_START`.

#### Тест 2: Успешная загрузка

```javascript
it("should create an action for successful photo fetch", () => {
    const photoData = { url: "some_url", title: "some_title" };
    const expectedAction = {
        type: FETCH_PHOTO_SUCCESS,
        payload: photoData,
    };
    expect(actions.fetchPhotoSuccess(photoData)).toEqual(expectedAction);
});
```

- Этот тест проверяет, что `actions.fetchPhotoSuccess()` создает действие с типом `FETCH_PHOTO_SUCCESS` и полезной нагрузкой, содержащей данные фотографии.

#### Тест 3: Неудачная загрузка

```javascript
it("should create an action for failed photo fetch", () => {
    const error = "Failed to fetch";
    const expectedAction = {
        type: FETCH_PHOTO_FAILURE,
        payload: error,
    };
    expect(actions.fetchPhotoFailure(error)).toEqual(expectedAction);
});
```

- Здесь мы ожидаем, что `actions.fetchPhotoFailure()` создаст действие с типом `FETCH_PHOTO_FAILURE` и полезной нагрузкой, содержащей текст ошибки.

В каждом тесте используется Jest-метод `expect().toEqual()` для сравнения ожидаемого действия с действием, возвращаемым функцией action creator.

Эти тесты помогут вам удостовериться, что ваши action creators работают так, как предполагалось, и создают правильные действия, что важно для стабильной работы вашего приложения.

```javascript
import * as actions from "../actions/nasaActions";
import {
    FETCH_PHOTO_START,
    FETCH_PHOTO_SUCCESS,
    FETCH_PHOTO_FAILURE,
} from "../actions/nasaActions";

// Тестирование actions для загрузки фото от NASA
describe("nasa actions", () => {
    // Проверка создателя действий для начала загрузки
    it("should create an action to start fetching photo", () => {
        const expectedAction = {
            type: FETCH_PHOTO_START,
        };
        expect(actions.fetchPhotoStart()).toEqual(expectedAction);
    });

    // Проверка создателя действий для успешной загрузки
    it("should create an action for successful photo fetch", () => {
        const photoData = { url: "some_url", title: "some_title" };
        const expectedAction = {
            type: FETCH_PHOTO_SUCCESS,
            payload: photoData,
        };
        expect(actions.fetchPhotoSuccess(photoData)).toEqual(expectedAction);
    });

    // Проверка создателя действий для неудачной загрузки
    it("should create an action for failed photo fetch", () => {
        const error = "Failed to fetch";
        const expectedAction = {
            type: FETCH_PHOTO_FAILURE,
            payload: error,
        };
        expect(actions.fetchPhotoFailure(error)).toEqual(expectedAction);
    });
});
```

#### 9. Тестирование Reducers (src/tests/nasaReducer.test.js)

Этот код представляет собой набор тестов для редьюсера `nasaReducer`, который используется для управления состоянием приложения, связанного с загрузкой фотографий от NASA. Для тестирования используется Jest, фреймворк для JavaScript-тестирования.

### Импорты:

1. `import nasaReducer from "../reducers/nasaReducer";`: Импортирует редьюсер `nasaReducer`, который тестируется.
2. `import { FETCH_PHOTO_START, FETCH_PHOTO_SUCCESS, FETCH_PHOTO_FAILURE } from "../actions/nasaActions";`: Импортирует константы действий, которые будут использоваться в тестах.

### Структура теста:

- `describe("nasa reducer", () => { ... })`: Объявляет группу тестов. Все тесты внутри этого блока будут относиться к `nasaReducer`.

  - `it("should return the initial state", () => { ... })`: Тест для проверки начального состояния редьюсера. Если редьюсер вызывается с `undefined` для `state` и пустым объектом для `action`, он должен вернуть начальное состояние.
  - `it("should handle FETCH_PHOTO_START", () => { ... })`: Тест для проверки состояния, когда начинается загрузка фото. Состояние `loading` должно стать `true`.
  - `it("should handle FETCH_PHOTO_SUCCESS", () => { ... })`: Тест для проверки состояния при успешной загрузке фото. Состояние `loading` становится `false`, а `photo` заполняется данными.
  - `it("should handle FETCH_PHOTO_FAILURE", () => { ... })`: Тест для проверки состояния при ошибке загрузки. Состояние `loading` становится `false`, а `error` заполняется сообщением об ошибке.

### Функция `expect()`:

- `expect(nasaReducer(undefined, {})).toEqual(...)`: Сравнивает фактическое значение, возвращаемое `nasaReducer`, с ожидаемым значением.

Этот код помогает убедиться, что редьюсер работает как ожидается в различных сценариях: при инициализации, при начале загрузки, при успешной загрузке и при ошибке. Это полезно для поддержания качества кода, особенно при его изменении или расширении.

```javascript
import nasaReducer from "../reducers/nasaReducer";
import {
    FETCH_PHOTO_START,
    FETCH_PHOTO_SUCCESS,
    FETCH_PHOTO_FAILURE,
} from "../actions/nasaActions";

// Тестирование редьюсера для загрузки фото от NASA
describe("nasa reducer", () => {
    // Проверка начального состояния
    it("should return the initial state", () => {
        expect(nasaReducer(undefined, {})).toEqual({
            loading: false,
            photo: null,
            error: null,
        });
    });

    // Обработка начала загрузки
    it("should handle FETCH_PHOTO_START", () => {
        expect(
            nasaReducer(
                {},
                {
                    type: FETCH_PHOTO_START,
                }
            )
        ).toEqual({
            loading: true,
        });
    });

    // Обработка успешной загрузки
    it("should handle FETCH_PHOTO_SUCCESS", () => {
        const mockPhotoData = { url: "some_url", title: "some_title" };
        expect(
            nasaReducer(
                {},
                {
                    type: FETCH_PHOTO_SUCCESS,
                    payload: mockPhotoData,
                }
            )
        ).toEqual({
            loading: false,
            photo: mockPhotoData,
        });
    });

    // Обработка неудачной загрузки
    it("should handle FETCH_PHOTO_FAILURE", () => {
        const mockError = "Some error";
        expect(
            nasaReducer(
                {},
                {
                    type: FETCH_PHOTO_FAILURE,
                    payload: mockError,
                }
            )
        ).toEqual({
            loading: false,
            error: mockError,
        });
    });
});
```

В этих тестовых файлах мы:

- Тестируем, что создатели действий возвращают правильные объекты действий.
- Тестируем, что редьюсер обрабатывает каждый тип действия правильно и возвращает ожидаемое новое состояние.
