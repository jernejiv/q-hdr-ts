import {Module} from 'vuex';
import {StateInterface} from 'src/store/index';

export interface GlobalStateInterface {
  showMenuDrawer: boolean;
  title:  string;
}

function state(): GlobalStateInterface {
  return {
    showMenuDrawer: false,
    title: 'bla'
  };
}

const globalModule: Module<GlobalStateInterface, StateInterface> = {
  namespaced: true,
  state
}

export default globalModule;
