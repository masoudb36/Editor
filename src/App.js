import { CssBaseline, makeStyles } from '@material-ui/core';
import './App.css';
import Editor from './components/Editor';
import FileManager from './components/FileManager';
import Navbar from './components/Navbar';

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
				<FileManager />
				<Editor />
			</div>
		</div>
	);
}

export default App;
