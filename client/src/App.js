import { Route, Routes} from 'react-router';
import './App.scss'
import NavBar from './components/navbar/navbar.component';
import Home from './routes/home/home.component';
import Profile from './routes/profile/profile.component';
import Search from './routes/search/search.component';
import Details from './routes/details/details.component';
//import Footer from './components/footer/footer.component';
//const BACK_URL = 'http://localhost:3001/'

const App = () => {
	
  return(
	<div className='App'>
    <Routes>
		<Route path='/' element={<NavBar />}>
			<Route index element={<Home />} />
			<Route path='search' element={<Search />} />
			<Route path='profile' element={<Profile />} />
			<Route exact path='detail/:id' element={<Details />}>
			</Route>
		</Route>
	</Routes>

	</div>
  )

}


export default App;
