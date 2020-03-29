import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';
import { StyleSheet, View } from 'react-native';
import Routes from './src/routes';

//elementos  em html <div> <header> <p> <h1> utilizado para web
//no react native podemos utilizar somente div pois nao tem semantica
//comandos react native <text><div><view>
//todos elementos do react native já possui por padrao display flex
//nos estilos nao existe "-" como no exemplo : background-color para web, ficaria backgroundColor para react native
//os valores de stylo que nao sao numeros e necessario usar aspas '' por volta, como no exemplo: backgroundColor: 'f7832h'
//nao existe erança de estilos, para mudar um elemento de textou ou qualquer outro que seja e necessario criar um estilo individual para o elemento como exemplo:
//<Text style ={style.container} e no meu css estar criado meu style title nao existe herança de estilos

export default function App() {
  return (
    <Routes/>
  );
}

