import React, { createContext, useReducer } from 'react';
import { data } from '../data/index';
import filesReducer from './Reducer/FileManagerReducer';

export const FileManagerContext = createContext();

export const FileManagerProvider = ({ children }) => {
	const [files, dispatch] = useReducer(filesReducer, data);
	const changeFiles = (action) => {
		dispatch(action);
	};
	return (
		<FileManagerContext.Provider value={{ files, changeFiles }}>
			{children}
		</FileManagerContext.Provider>
	);
};
