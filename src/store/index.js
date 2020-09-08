import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import createEncryptor from "redux-persist-transform-encrypt";

import rootReducer from "./modules/rootReducer";

const encryptor = createEncryptor({
  secretKey: "meialua",
  onError: function (error) {
    alert("Erro ao gerar chave criptográfica do Redux Persis: " + error);
  },
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
  transforms: [encryptor],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
