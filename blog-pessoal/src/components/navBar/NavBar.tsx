import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { toastAlerta } from '../../util/toastAlerta';
import './NavBar.css';

function Navbar() {
  let navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    toastAlerta('Usuário deslogado com sucesso', 'sucesso');
    navigate('/login');
  }

  let navbarComponent;

  if (usuario.token !== "") {
    navbarComponent = (
      <div className='navbar-container w-full bg-emerald-900 text-white flex justify-center py-4'>
        <div className="container flex justify-between text-lg">
          <Link to='/home' className='text-2xl font-bold uppercase'>Blog Pessoal</Link>

          <div className='flex gap-4 navbar-links'>
            <Link to='/postagens' className='hover:text-cyan-300 hover:underline'>Postagens</Link>
            <Link to='/temas' className='hover:text-cyan-300 hover:underline'>Temas</Link>
            <Link to='/cadastroTema' className='hover:text-cyan-300 hover:underline'>Cadastrar tema</Link>
            <Link to='/perfil' className='hover:text-cyan-300 hover:underline'>Perfil</Link>
            <Link to='' onClick={logout} className='hover:text-cyan-300 hover:underline'>Sair</Link>
          </div>
        </div>
      </div>
    );
  }

  return <>{navbarComponent}</>;
}

export default Navbar;