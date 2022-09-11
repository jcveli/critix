import { Route, Routes} from 'react-router';
import './App.css'
import NavBar from './components/navbar/navbar.component';
import Home from './routes/home/home.component';
import Profile from './routes/profile/profile.component';
import Search from './routes/search/search.component';
import Footer from './components/footer/footer.component';
//const BACK_URL = 'http://localhost:5000/'

const App = () => {
	
  return(
	<div>
    <Routes>
		<Route path='/' element={<NavBar />}>
			<Route index element={<Home />} />
			<Route path='search' element={<Search />} />
			<Route path='profile' element={<Profile />} />
		</Route>
	</Routes>
	<Footer />
	</div>
  )

}


export default App;
