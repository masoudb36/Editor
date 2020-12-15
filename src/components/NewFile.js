import React, { useState } from 'react';
import { makeStyles, TextField } from '@material-ui/core';
import { icons } from '../icons/index';

const useStyles = makeStyles((theme) => ({
	newFile: {
		display: 'flex',
		alignItems: 'center',
		width: '100%',
		'&.Mui-focused fieldset': {
			borderColor: 'green',
		},
		'& svg': {
			fontSize: 20,
			marginRight: theme.spacing(1),
			opacity: 0.3,
		},
	},
	inputFile: {
		width: '100%',
		'&>div:hover .MuiOutlinedInput-notchedOutline': {
			borderColor: '#23a7f2',
		},
		'& .MuiOutlinedInput-notchedOutline': {
			borderColor: ' #23a7f2',
		},
		'& input': {
			padding: 4,
			color: '#fff',
			fontSize: 14,
		},
	},
}));

const NewFile = ({ iconType }) => {
	const classes = useStyles();
	const [value, setValue] = useState('');

	const addNewFile = (e) => {
		e.preventDefault();
		const type = value.split('.')[1];
		console.log(type);
		// console.log(value);
	};

	const handelInputValue = (e) => {
		setValue(e.target.value);
	};

	return (
		<div>
			<form onSubmit={addNewFile} className={classes.newFile}>
				{icons[iconType]}
				<TextField
					autoFocus
					variant='outlined'
					className={classes.inputFile}
					onChange={handelInputValue}
					value={value}
				/>
			</form>
		</div>
	);
};

export default NewFile;
