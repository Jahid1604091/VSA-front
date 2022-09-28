import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import Footer from './components/Footer';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';

//Redux
import { Provider } from 'react-redux';
import store from './store';
import Alert from './components/Layouts/Alert';
import { setAuthToken } from './utils/setAuthToken';
import { loadUser } from './actions/auth';
import { useEffect } from 'react';
import Profile from './components/Dashboard/Profile';
import Dashboard from './components/Dashboard/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';
import Error from './pages/Error';
import Blogs from './components/Blog/Blogs';
import BlogDetails from './components/Blog/BlogDetails';
import { LOGOUT } from './actions/types';
function App() {
  useEffect(() => {
    // check for token in LS when app first runs
    if (localStorage.token) {
      setAuthToken(localStorage.token)
    }

    store.dispatch(loadUser())

    // log user out from all tabs if they log out in one tab
    window.addEventListener('storage', () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });

  }, [])

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Alert />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={
            <PrivateRoute >
              <Dashboard />
            </PrivateRoute>
          } />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/blogs/:id' element={<BlogDetails />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <ToastContainer />
        <Footer />
      </BrowserRouter>

    </Provider>
  );
}

export default App;
