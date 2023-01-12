import React, { useState } from 'react';
import * as C from './styles';
import { ImageFolder } from '../../types/Types';

function AnimalFolder({img, size}: ImageFolder){
  const [positions, setPositions] = useState<{[key:string]:{width: number, right: number, top: number}}>({});

  function generatePosition(img:string, size: number){
    // verifica se a posição já foi gerada
    if (positions[img]) {
      return positions[img];
    }

    const auxWidth = Math.floor(Math.random() * (100) - 50);

    const rightRandom = Math.floor(Math.random() * ((window.innerWidth / 2) + (auxWidth)) + size);
    const topRandom = Math.floor(Math.random() * (window.innerHeight/ 2) + 100);
    
    const position = {width: size, right: rightRandom, top: topRandom}

    setPositions({...positions, [img]: position});
    return position;
  }

  return(
    <C.FolderImage src={img} style={generatePosition(img, size)}/>
  )
}

export default AnimalFolder;
