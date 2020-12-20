import { types } from '../actions/index';

export function selectedFileReducer(selectedFiles, action) {
	switch (action.type) {
		case types.openFile:
			const isOpen = checkOpenFile(selectedFiles, action.node.id);
			return isOpen ? [...selectedFiles] : [...selectedFiles, action.node];
		case types.closeFile:
			selectedFiles = selectedFiles.filter((file) => file.id !== action.id);
			return [...selectedFiles];

		default:
			return [...selectedFiles];
	}
}

const checkOpenFile = (selectedFiles, id) => {
	let isOpen = false;
	selectedFiles.forEach((file) => {
		if (file.id === id) {
			isOpen = true;
		}
	});
	return isOpen;
};
