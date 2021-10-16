import {combineReducers,createStore} from "redux"
import {configureStore} from "@reduxjs/toolkit"
import passengerSlice from "./passengerSlice"
import {persistReducer,persistStore} from "redux-persist"
import storage from "redux-persist/lib/storage"


const reducers= combineReducers({
	passengers:passengerSlice
})

const persistConfig={
	key:"root",
	storage:storage
}

const persistedReducer=persistReducer(persistConfig,reducers)

const store=configureStore({reducer:persistedReducer})

const persistor=persistStore(store)

export {store,persistor}