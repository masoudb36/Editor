import { Box, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({}));

const Editor = () => {
	const classes = useStyles();
	return (
		<Box className={classes.editor}>
			hello
		</Box>
	);
};

export default Editor;
