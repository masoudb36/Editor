import React, { useState, useContext, useEffect } from 'react';
import { makeStyles, TextField } from '@material-ui/core';
import { icons } from '../icons/index';
import { FileManagerContext } from '../context/FileManagerContext';
import { types } from '../context/actions/index';
import { v4 as uuid } from 'uuid';

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

const NewFile = ({ iconType, parentID }) => {
	const classes = useStyles();
	const { files, changeFiles } = useContext(FileManagerContext);
	const [value, setValue] = useState('');
	const [error, setError] = useState(false);
	const [nodes, setNodes] = useState([]);

	const findNodes = (nodes, id) => {
		if (nodes.id === id) {
			setNodes(nodes.children);
		} else {
			Array.isArray(nodes.children) &&
				nodes.children.map((node) => findNodes(node, id));
		}
	};

	useEffect(() => {
		findNodes(files, parentID);
		nodes.forEach((node) => {
			if (node.name === value) {
				setError(true);
			}
		});
	});

	const handelSubmit = (e) => {
		e.preventDefault();

		console.log(error, nodes);
		if (error) {
		} else {
			iconType === 'file' ? addNewFile() : addNewFolder();
		}
		// console.log(value);
	};

	const addNewFile = () => {
		let type = value.split('.')[1];
		if (type === undefined) {
			type = 'file';
		}
		const file = {
			id: uuid(),
			name: value,
			type: type,
			parentID: parentID,
		};
		changeFiles({ type: types.addFile, parentID, file });
	};

	const addNewFolder = () => {
		const file = {
			id: uuid(),
			name: value,
			type: 'dir',
			parentID: parentID,
			children: [],
		};
		changeFiles({ type: types.addFolder, parentID, file });
	};

	const removeInput = () => {
		changeFiles({ type: types.removeInput, parentID });
	};

	const handelInputValue = (e) => {
		setValue(e.target.value);
		setError(false);
	};

	return (
		<div>
			<form onSubmit={handelSubmit} className={classes.newFile}>
				{icons[iconType]}
				<TextField
					error={error}
					autoFocus
					variant='outlined'
					className={classes.inputFile}
					onChange={handelInputValue}
					value={value}
					onBlur={removeInput}
				/>
			</form>
		</div>
	);
};

export default NewFile;
