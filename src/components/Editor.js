import React, { useContext } from 'react';
import AceEditor from 'react-ace';
import { Box, makeStyles, Paper, Typography } from '@material-ui/core';
import { SelectedFileContext } from '../context/SelectedFileContext';
import { icons } from '../icons/index';
import _ from 'lodash';

import 'ace-builds/src-noconflict/mode-java';
// import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-scss';
import 'ace-builds/src-noconflict/mode-jsx';
import 'ace-builds/src-noconflict/mode-php';
import "ace-builds/src-noconflict/ext-language_tools";
import 'ace-builds/src-noconflict/theme-monokai';
import brace from "brace";
import "brace/ext/language_tools";
import 'brace/mode/html';
import 'brace/snippets/html';

const useStyles = makeStyles((theme) => ({
	editorWrapper: {
		backgroundColor: '#1e1e1e',
		height: '89.6vh',
	},
	editor: {
		width: '100% !important',
		height: '84vh !important',
		backgroundColor: '#1e1e1e',
	},
	labelWrap: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(1),
		backgroundColor: '#252526',
		// boxShadow: theme.shadows[13],
		color: '#fff',
		'&>svg': {
			fontSize: 24,
		},
	},
	labelText: {
		marginLeft: 8,
		fontWeight: '100',
		lineHeight: '2',
	},
	welcome: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: '#fff',
		width: '100%',
		height: '100%',
	},
}));

const languages = {
	html: 'html',
	css: 'css',
	js: 'javascript',
	scss: 'scss',
	jsx: 'jsx',
	php: 'php',
};

const Editor = () => {
	const classes = useStyles();
	const { selectedFile } = useContext(SelectedFileContext);

	const onChange = (newValue) => {
		// console.log('change', newValue);
	};

	console.log(selectedFile);
	const isSelectFile = _.isEmpty(selectedFile);

	return (
		<Box className={classes.editorWrapper}>
			{isSelectFile ? (
				<div className={classes.welcome}>
					<Typography variant='h1'>Welcome</Typography>
				</div>
			) : (
				<>
					<Paper square className={classes.labelWrap}>
						{icons[selectedFile.type]}
						<Typography variant='body2' className={classes.labelText}>
							{selectedFile.name}
						</Typography>
					</Paper>
					<AceEditor
						mode={languages[selectedFile.type]}
						value={selectedFile.code}
						theme='monokai'
						onChange={onChange}
						name='Editor'
						editorProps={{ $blockScrolling: true }}
						enableBasicAutocompletion={true}
						enableLiveAutocompletion={true}
						enableSnippets={true}
						className={classes.editor}
						fontSize={15}
					
					/>
				</>
			)}
		</Box>
	);
};

export default Editor;
