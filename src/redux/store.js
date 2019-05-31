import { AsyncStorage } from "react-native";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import rootReducer from "./reducers";

const persistConfig = { key: "root", storage: AsyncStorage };
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));
const persist = persistStore(store, { whiteList: [], blackList: [] });

export { store, persist };
