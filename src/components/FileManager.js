import React from 'react';

import { Box, makeStyles, Paper, Typography } from '@material-ui/core';
import { TreeView, TreeItem } from '@material-ui/lab';
import { VscChevronRight, VscChevronDown } from 'react-icons/vsc';

import { data } from '../data/index';
import { icons } from '../icons/index';

const useStyles = makeStyles((theme) => ({
	fileManager: {
		backgroundColor: '#252526',
		height: '89.6vh',
		color: '#fff',
	
	},
	titleBox: {
		backgroundColor: '#252526',
		padding: theme.spacing(1.5),
		color: '#e2a34e',
		borderColor: '#fff',
	},
	fileRoot:{
		padding:theme.spacing(2)
	}
}));

const FileManager = () => {
	const classes = useStyles();

	const renderTree = (nodes) => (
		<TreeItem
			key={nodes.id}
			nodeId={nodes.id}
			label={
				<div className={classes.label}>
					{icons[nodes.type]}
					<Typography variant='body1' className={classes.labelText}>
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
				{renderTree(data)}
			</TreeView>
		</Box>
	);
};

export default FileManager;
