import React, { FC } from 'react';
import { AppWrapper } from './App.styled';

interface AppProps {}

const App: FC<AppProps> = () => (
 <AppWrapper data-testid="App">
    App Component
 </AppWrapper>
);

export default App;
