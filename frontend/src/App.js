// import Footer from './components/footer/Footer';
// import Header from './components/header/Header';
import Login from './components/login/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/login/layout';
import Register from './components/register/register.js';
import Contact from './components/contact/contact';

const App = () => (
	<>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Login />} />
					<Route path="signup" element={<Register />} />
					<Route path="contact" element={<Contact />} />
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
