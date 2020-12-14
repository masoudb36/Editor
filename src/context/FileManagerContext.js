import React, { createContext, useReducer } from 'react';
import { data } from '../data/index';
import filesReducer from './Reducer/FileManagerReducer';

export const FileManagerContext = createContext();

export const FileManagerProvider = ({ children }) => {
	const [files, dispatch] = useReducer(filesReducer, data);
	const changeFile = (action) => {
		dispatch(action);
	};
	return (
		<FileManagerContext.Provider value={{ files, changeFile }}>
			{children}
		</FileManagerContext.Provider>
	);
};
