import homeLogo from '../../assets/mercador.png';

function Home() {
    return (
        <>
            <div className="bg-indigo-900 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-5 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>Welcome stranger</h2>
                        <p className='text-xl'>What are you buying?</p>

                        <div className="flex justify-around gap-4">
                            <button className='rounded bg-white text-blue-800 py-2 px-4'>Ver itens</button>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img src={homeLogo} alt="" className='w-2/3' style={{ width: '500px', height: '400px' }} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;