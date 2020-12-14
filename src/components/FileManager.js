import React, { useContext, useState } from 'react';

import { Box, makeStyles, Paper, Typography } from '@material-ui/core';
import { TreeView, TreeItem } from '@material-ui/lab';
import { VscChevronRight, VscChevronDown } from 'react-icons/vsc';

import { icons } from '../icons/index';

import { FileManagerContext } from '../context/FileManagerContext';

const useStyles = makeStyles((theme) => ({
	fileManager: {
		backgroundColor: '#252526',
		height: '89.6vh',
		color: '#fff',
	},
	titleBox: {
		backgroundColor: '#252526',
		padding: theme.spacing(1.5),
		color: '#eaa445',
		borderColor: '#fff',
	},
	fileRoot: {
		padding: theme.spacing(2),
	},
	labelWrap: {
		display: 'flex',
		alignItems: 'center',
		'&>svg': {
			fontSize: 20,
		},
	},
	labelText: {
		marginLeft: 8,
		fontWeight: '100',
		lineHeight: '2',
	},
}));

const FileManager = () => {
	const classes = useStyles();
	const { files, changeFile } = useContext(FileManagerContext);
	const [parentID, setParentID] = useState('0');

	const selectFile = (nodes) => {
		setParentID(nodes.parentID)
	};

	
	const renderTree = (nodes) => (
		<TreeItem
			onClick={() => selectFile(nodes)}
			key={nodes.id}
			nodeId={nodes.id}
			label={
				<div className={classes.labelWrap}>
					{icons[nodes.type]}
					<Typography variant='body2' className={classes.labelText}>
						{nodes.name}
					</Typography>
				</div>
			}>
			{Array.isArray(nodes.children)
				? nodes.children.map((node) => renderTree(node))
				: null}
		</TreeItem>
	);

	return (
		<Box className={classes.fileManager}>
			<Paper square className={classes.titleBox}>
				Explorer
			</Paper>
			<TreeView
				className={classes.fileRoot}
				defaultCollapseIcon={<VscChevronDown />}
				defaultExpanded={['0']}
				defaultExpandIcon={<VscChevronRight />}>
				{renderTree(files)}
			</TreeView>
		</Box>
	);
};

export default FileManager;
