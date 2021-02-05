import {createStore}   from 'redux';
import { reducer } from "./../Components/reducer/reducer";

export  const store=createStore(reducer);
