import React, { useState, useContext, useEffect } from 'react';
import { makeStyles, TextField } from '@material-ui/core';
import { FileManagerContext } from '../context/FileManagerContext';
import { ParentIdContext } from '../context/ParentIdContext';
import { types } from '../context/actions/index';
import { v4 as uuid } from 'uuid';
import { importImg } from '../tools/index';


const useStyles = makeStyles((theme) => ({
	newFile: {
		display: 'flex',
		alignItems: 'center',
		width: '100%',
		'&.Mui-focused fieldset': {
			borderColor: 'green',
		},
		'& img': {
			width:20,
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

const NewFile = ({ iconType}) => {
	const classes = useStyles();
	const { files, changeFiles } = useContext(FileManagerContext);
	const { parentId } = useContext(ParentIdContext);
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
		findNodes(files, parentId);
		nodes.forEach((node) => {
			if (node.name === value) {
				setError(true);
			}
		});
	});

	const handelSubmit = (e) => {
		e.preventDefault();
		if (!error) {
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
			parentId: parentId,
		};
		changeFiles({ type: types.addFile, parentId, file });
	};

	const addNewFolder = () => {
		const file = {
			id: uuid(),
			name: value,
			type: 'folder',
			parentId: parentId,
			children: [],
		};
		changeFiles({ type: types.addFolder, parentId, file });
	};

	const removeInput = () => {
		changeFiles({ type: types.removeInput, parentId });
	};

	const handelInputValue = (e) => {
		setValue(e.target.value);
		setError(false);
	};

	return (
		<div>
			<form onSubmit={handelSubmit} className={classes.newFile}>
				<img className={classes.icon} src={importImg( iconType,iconType)} alt={iconType} />
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
