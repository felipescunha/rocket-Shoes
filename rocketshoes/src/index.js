import React from 'react';
import { StatusBar } from 'react-native';

import Routes from './routes';

export default function APP() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <Routes />
    </>
  );
}
