import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Login from './components/login/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/login/layout';

const App = () => (
	<>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Login />} />
					<Route path="signup" element={<Header />} />
					<Route path="contact" element={<Footer />} />
					{/* <Route path="*" element={<NoPage />} /> */}
				</Route>
			</Routes>
		</BrowserRouter>
		{/* <Header />
		<main style={{ minHeight: '93vh' }}></main>
		<Footer /> */}
	</>
);

export default App;
