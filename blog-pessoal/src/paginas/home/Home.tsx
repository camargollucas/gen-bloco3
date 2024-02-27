import homeLogo from '../../assets/home.png'
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import ListaPostagens from '../../components/postagens/listaPostagem/ListaPostagens';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <div className="bg-emerald-900 flex justify-center">
        <div className='container grid grid-cols-2 text-white'>
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className='text-5xl font-bold'>Welcome stranger</h2>
            <p className='text-xl'>What are your thoughts?</p>

            <div className="flex justify-around gap-4">
              <ModalPostagem />
              <Link to='/postagens' className='hover:underline'><button className='rounded bg-white text-green-800 py-2 px-4'>Ver postagens</button></Link>
            </div>
          </div>
          <div className="flex justify-center ">
            <img src={homeLogo} alt="" className='w-2/3' />
          </div>
        </div>
      </div>
      <ListaPostagens />
    </>
  );
}

export default Home;