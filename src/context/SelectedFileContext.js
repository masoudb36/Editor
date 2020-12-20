import React, { createContext, useReducer } from 'react';
import {selectedFileReducer} from './Reducer/SelectedFileReducer'

export const SelectedFileContext = createContext();

const data=[
	{
		id: '6e9c76fe-74a4-4171-bd68-dc1109bf68ed',
		name: 'index.js',
		type: 'js',
		parentId: '3',
		code:'index.js'

	},
	{
		id: '6e9c76fe-74a4-4171-bd68-dc1109bf68ee',
		name: 'main.css',
		type: 'css',
		parentId: '3',
		code:'main.css'

	},
	{
		id: '6e9c76fe-74a4-4171-bd68-dc1109bf68e3',
		name: 'base.scss',
		type: 'scss',
		parentId: '3',
		code:'base.scss'

	},
]

export const SelectedFileProvider = ({ children }) => {
	const [selectedFiles, dispatch] = useReducer(selectedFileReducer,[]);
	const changeSelectedFile = (action) => {
		dispatch(action);
	};
	return (
		<SelectedFileContext.Provider value={{ selectedFiles, changeSelectedFile }}>
			{children}
		</SelectedFileContext.Provider>
	);
};
