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
	html: <IoLogoHtml5 color='#DD4B25' />,
	css: <IoLogoCss3 color='#2862E9' />,
	js: <IoLogoJavascript color='#F7E31F' />,
	scss: <IoLogoSass color='#C76494' />,
	jsx: <DiReact color='#5ED3F3' />,
	cpp: <CgCPlusPlus color='#005697' />,
	php: <DiPhp color='#7377AD'/>,
	img: <FcImageFile />,
};
