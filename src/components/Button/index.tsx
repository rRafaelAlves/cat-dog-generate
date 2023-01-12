import React, { ReactNode } from 'react';
import * as C from './styles';

type Props ={
    children: ReactNode
    handleAnimal: ()=> void
}

function Button({children, handleAnimal}: Props){ 

    return(
        <C.ContainerButton onClick={handleAnimal}>

            {children}

        </C.ContainerButton>
    )
}

export default Button;