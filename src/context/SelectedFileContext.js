import React, { createContext, useState } from 'react';

export const SelectedFileContext = createContext();

export const SelectedFileProvider = ({ children }) => {
	const [selectedFile, setSelectedFile] = useState({});
	const changeSelectedFile = (node) => {
		setSelectedFile(node);
	};
	return (
		<SelectedFileContext.Provider value={{ selectedFile, changeSelectedFile }}>
			{children}
		</SelectedFileContext.Provider>
	);
};
