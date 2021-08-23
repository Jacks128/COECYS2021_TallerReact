import React from 'react';
import { ReactDOM } from 'react';
import reactDom from 'react-dom';
import './index.css'
import ContadorApp from './ContadorApp';

const divRoot=document.querySelector('#root');

reactDom.render(<ContadorApp value={10}/>,divRoot)