import { fileExtensions, folderNames } from '../icons/index';


export const importImg = (type, name) => {
	const iconName =
		type === 'folder' ? folderNames[name.toLowerCase()] : fileExtensions[type];
	const images = require.context('./../icons/icons', true);
	const iconPath = images(`./${iconName}.svg`);
	return iconPath.default;
};
