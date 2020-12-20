import { CssBaseline, makeStyles } from '@material-ui/core';
import './App.css';
// import Editor from './components/Editor';
import FileManager from './components/FileManager';
import Navbar from './components/Navbar';
import TabBar from './components/TabBar';

import { FileManagerProvider } from './context/FileManagerContext';
import { ParentIdProvider } from './context/ParentIdContext';
import { SelectedFileProvider } from './context/SelectedFileContext';

const useStyles = makeStyles((theme) => ({
	wrapper: {
		display: 'grid',
		gridTemplateColumns: '1fr 3fr',
	},
}));

function App() {
	const classes = useStyles();
	return (
		<div>
			<CssBaseline />
			<Navbar />
			<div className={classes.wrapper}>
				<FileManagerProvider>
					<SelectedFileProvider>
						<ParentIdProvider>
							<FileManager />
							{/* <Editor /> */}
							<TabBar />
						</ParentIdProvider>
					</SelectedFileProvider>
				</FileManagerProvider>
			</div>
		</div>
	);
}

export default App;
