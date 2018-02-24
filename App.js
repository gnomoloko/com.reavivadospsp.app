import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation'

import TelaInicial from './src/TelaInicial';
import TelaBiblia from './src/TelaBiblia';
import TelaCapitulo from './src/TelaCapitulo';
import TelaTabs from './src/TelaTabs';
import WhoWeAre from './src/WhoWeAre';


const Navegador = StackNavigator ({
  Home: { screen: TelaInicial },
  Biblia: { screen: TelaBiblia },
  Capitulo: {screen: TelaCapitulo},
  WhoWeAre: {screen: WhoWeAre},
  Tabs: {screen: TelaTabs},

  
});

console.disableYellowBox = true;


export default Navegador;

