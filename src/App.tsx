import React from 'react';
import * as C from './App.styles';
import AnimalFolder from './components/AnimalFolder';
import Button from './components/Button';
import { ImageFolder } from './types/Types';
import { Cats, Dogs } from './constants/AnimalConstants';

function App() {

  const [imagesWindow, setImagesWindow] = React.useState<Array<ImageFolder>>([]);



  function handleDog(){
    const arrayLenght = Dogs.length;
    const arrayIndex = Math.floor(Math.random() * arrayLenght);

    setImagesWindow(prev => [...prev, Dogs[arrayIndex]]);

  }
  function handleCat(){
    const arrayLenght = Cats.length;
    const arrayIndex = Math.floor(Math.random() * arrayLenght);

    setImagesWindow(prev => [...prev, Cats[arrayIndex]]);
  }


  return (
    <C.Container>
        <Button handleAnimal={handleDog}> Cachorro </Button>
        <Button handleAnimal={handleCat}> Gato </Button>

        {imagesWindow.map((element, index) => (
          <AnimalFolder key={index} img={element.img} size={element.size}></AnimalFolder>
        ))}
    </C.Container>
  );
}

export default App;
