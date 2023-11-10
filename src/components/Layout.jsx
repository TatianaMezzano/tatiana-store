import Footer from './Footer/Footer';
import NavBar from './NavBar/NavBar';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <NavBar />
      <main className="content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
