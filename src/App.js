import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Pages/Others/Router/Routes/Routes';
import ParticlesBg from './Pages/Particles/PaeticlesBg';

function App() {
  return (
    <div className='max-w-screen-xl mx-auto'>
      <div className='mx-5 auto'>
        <RouterProvider router={router}></RouterProvider>
        <ParticlesBg></ParticlesBg>
      </div>
    </div>
  );
}

export default App;
