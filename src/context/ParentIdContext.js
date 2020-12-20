import React, { createContext, useState } from 'react';

export const ParentIdContext = createContext();

export const ParentIdProvider = ({ children }) => {
	const [parentId, setParentId] = useState('root');

	const changeParent = (id) => {
		setParentId(id);
	};

	return (
		<ParentIdContext.Provider value={{ parentId, changeParent }}>
			{children}
		</ParentIdContext.Provider>
	);
};
