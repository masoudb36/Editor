import React, { useContext, useState } from 'react';

import { Box, makeStyles, Typography } from '@material-ui/core';
import { TreeView, TreeItem } from '@material-ui/lab';
import { VscChevronRight, VscChevronDown } from 'react-icons/vsc';

import { icons } from '../icons/index';

import { FileManagerContext } from '../context/FileManagerContext';
import MenuItem from './MenuItem';
import NewFile from './NewFile';

const useStyles = makeStyles((theme) => ({
	fileManager: {
		backgroundColor: '#252526',
		height: '89.6vh',
		color: '#fff',
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
	const { files } = useContext(FileManagerContext);
	const [parentID, setParentID] = useState('0');
	console.log(files);

	const selectFile = (nodes) => {
		nodes.type === 'dir' ? setParentID(nodes.id) : setParentID(nodes.parentID);
	};

	const renderTree = (nodes) => (
		<TreeItem
			onClick={() => selectFile(nodes)}
			key={nodes.id}
			nodeId={nodes.id}
			label={
				nodes.type === 'newFile' ? (
					<NewFile iconType={nodes.iconType} />
				) : (
					<div className={classes.labelWrap}>
						{icons[nodes.type]}
						<Typography variant='body2' className={classes.labelText}>
							{nodes.name}
						</Typography>
					</div>
				)
			}>
			{Array.isArray(nodes.children)
				? nodes.children.map((node) => renderTree(node))
				: null}
		</TreeItem>
	);

	return (
		<Box className={classes.fileManager}>
			<MenuItem parentID={parentID} />
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
