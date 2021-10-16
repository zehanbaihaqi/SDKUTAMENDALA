import {combineReducers} from "redux"
import {configureStore} from "@reduxjs/toolkit"
import DataSlice from "./DataSlice"
import storage from "redux-persist/lib/storage"
import {persistReducer} from "redux-persist"
import persistStore from "redux-persist/es/persistStore"

const reducers = combineReducers({

		data:DataSlice
	
})

const persistConfig={
	key:"todos",
	storage
}

const persistedReducer=persistReducer(persistConfig,reducers)

const store=configureStore({
	reducer:persistedReducer,
	middLeware:(getDefaultMiddLeware)=>
	getDefaultMiddLeware({
		serializableCheck:false
	})
})
const persistor=persistStore(store)
export {store,persistor}