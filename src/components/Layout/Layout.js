import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Layout({ children, ...props }) {
	return (
		<>
			<Header isLogged={props.isLogged}/>
			{children}
			<Footer />
		</>
	)
}

export default Layout;