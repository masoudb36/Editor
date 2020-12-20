import React, { useContext, useEffect, useState } from 'react';
import _ from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import { Tab, AppBar, Typography, Box, Tabs } from '@material-ui/core';
import { TabPanel, TabList, TabContext } from '@material-ui/lab';

import { SelectedFileContext } from '../context/SelectedFileContext';
import { ParentIdContext } from '../context/ParentIdContext';

import Editor from './Editor';

import { VscClose } from 'react-icons/vsc';
import { importImg } from '../tools';
import { types } from '../context/actions';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: '#1e1e1e',
	},
	editorWrapper: {
		backgroundColor: '#1e1e1e',
		height: '89.6vh',
	},
	editor: {
		width: '100% !important',
		height: '84vh !important',
		backgroundColor: '#1e1e1e',
		padding: 0,
		'&>div ': {
			padding: 0,
		},
	},
	labelWrap: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(1),
		backgroundColor: '#252526',
		// boxShadow: theme.shadows[13],
		color: '#fff',
		'&>img': {
			width: 22,
			marginRight: 10,
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
	appBar: {
		backgroundColor: '#252526',
	},
	tabWrapper: {
		padding: 0,
		margin: 0,
		minHeight: 0,
		'& .MuiTab-wrapper': {
			display: 'flex',
			flexDirection: 'row-reverse',
			justifyContent: 'space-between',
			alignItems: 'center',
			padding: theme.spacing(0, 0.5),
		},
	},
	btnClose: {
		color: '#fff',
		marginBottom: 0,
		fontSize: 16,
		fontWeight: 'bold',
		zIndex: 9999999,
		marginTop: 5,
	},
}));

// function TabPanel(props) {
// 	const { children, value, index, ...other } = props;

// 	return (
// 		<div
// 			role='tabpanel'
// 			hidden={value !== index}
// 			id={`simple-tabpanel-${index}`}
// 			aria-labelledby={`simple-tab-${index}`}
// 			{...other}>
// 			{value === index && <Box p={3}>{children}</Box>}
// 		</div>
// 	);
// }

// function a11yProps(index) {
// 	return {
// 		id: `simple-tab-${index}`,
// 		'aria-controls': `simple-tabpanel-${index}`,
// 	};
// }

export default function TabBar() {
	const classes = useStyles();
	const { selectedFiles, changeSelectedFile } = useContext(SelectedFileContext);
	const [openFiles, setOpenFiles] = useState(selectedFiles)

	const [value, setValue] = useState('0');

	const isSelectedFile = _.isEmpty(selectedFiles);


	useEffect(() => {
		setOpenFiles(selectedFiles)
	}, [selectedFiles])
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const btnClosClick = (id) => {
		changeSelectedFile({ type: types.closeFile, id });
		setValue(() => {
			return (value - 1).toString();
		});
	};

	return (
		<Box className={classes.editorWrapper}>
			{isSelectedFile ? (
				<div className={classes.welcome}>
					<Typography variant='h1'>Welcome</Typography>
				</div>
			) : (
				<div className={classes.root}>
					<TabContext value={value}>
						<AppBar position='static' className={classes.appBar}>
							<TabList onChange={handleChange} aria-label='simple tabs example'>
								{openFiles.map(({ id, name, type }, index) => (
									<Tab
										key={id}
										label={
											<div className={classes.labelWrap}>
												<img src={importImg(type, name)} alt={name} />
												<span>{name}</span>
											</div>
										}
										value={index.toString()}
										icon={
											<div
												onClick={() => btnClosClick(id)}
												className={classes.btnClose}>
												<VscClose />
											</div>
										}
										className={classes.tabWrapper}
									/>
								))}
								{/* <Tab label="Item One" value="1" />
            <Tab label="Item Two" value="2" />
            <Tab label="Item Three" value="3" /> */}
							</TabList>
						</AppBar>
						{openFiles.map(({ id, type, code }, index) => (
							<TabPanel
								index={index}
								key={id}
								value={index.toString()}
								className={classes.editor}>
								<Editor type={type} code={code} />
							</TabPanel>
						))}
					</TabContext>
				</div>
			)}
		</Box>
	);
}
