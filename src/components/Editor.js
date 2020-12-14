import { Box, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
	editor: {
		backgroundColor: '#1e1e1e',
		height: '89.6vh',
	},
}));

const Editor = () => {
	const classes = useStyles();
	return <Box className={classes.editor}>hello</Box>;
};

export default Editor;
