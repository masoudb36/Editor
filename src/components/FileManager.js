import React from 'react';

import { Box, makeStyles   } from '@material-ui/core';

import MenuItem from './MenuItem';
import FilesView from './FilesView';

const useStyles = makeStyles((theme) => ({
	fileManager: {
		backgroundColor: '#252526',
		height: '89.6vh',
		color: '#fff',
	},
}));

const FileManager = () => {
	const classes = useStyles();

	// console.log(files);

	return (
		<Box className={classes.fileManager}>
			<MenuItem />
			<FilesView/>
		</Box>
	);
};

export default FileManager;
