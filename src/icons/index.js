import { FcFolder, FcFile, FcImageFile } from 'react-icons/fc';
import {
	IoLogoHtml5,
	IoLogoCss3,
	IoLogoJavascript,
	IoLogoSass,
} from 'react-icons/io';
import { CgCPlusPlus } from 'react-icons/cg';
import { DiPhp, DiReact } from 'react-icons/di';

export const icons = {
	dir: <FcFolder />,
	file: <FcFile />,
	html: <IoLogoHtml5 color='#fdd' />,
	css: <IoLogoCss3 color='#e9e' />,
	js: <IoLogoJavascript color='#de2' />,
	scss: <IoLogoSass color='#e8e' />,
	jsx: <DiReact color='#1ef' />,
	cpp: <CgCPlusPlus color='#9ef' />,
	php: <DiPhp />,
	img: <FcImageFile />,
};
