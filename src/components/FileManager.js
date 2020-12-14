import React from 'react';

import { Box, makeStyles } from '@material-ui/core';
import { TreeView, TreeItem } from '@material-ui/lab';
import { VscChevronRight, VscChevronDown } from 'react-icons/vsc';

import { data } from '../data/index';

const useStyles = makeStyles((theme) => ({
    fileManager:{
        
    }
}));

const FileManager = () => {
	const classes = useStyles();

	const renderTree = (nodes) => (
		<TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
			{Array.isArray(nodes.children)
				? nodes.children.map((node) => renderTree(node))
				: null}
		</TreeItem>
	);

	return (
		<Box className={classes.fileManager}>
			<TreeView
				className={classes.root}
				defaultCollapseIcon={<VscChevronDown />}
				defaultExpanded={['root']}
				defaultExpandIcon={<VscChevronRight />}>
				{renderTree(data)}
			</TreeView>
		</Box>
	);
};

export default FileManager;
