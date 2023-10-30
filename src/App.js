import {useState} from 'react';
import { drums } from './data';
import Drums from "./components/Drums";
import Drummer from './components/Drummer';

const App = () => {
  const [sounds] = useState(drums)

  return (
    <div>
      <Drummer />
      <div className='drumList'>
        {sounds.map((sound, i) => {
          return (
            <Drums key={i} letter={sound.key} sound={sound.sound} name={sound.name} />
         )
      })}
      </div>
    </div>
  )
}

export default App;
