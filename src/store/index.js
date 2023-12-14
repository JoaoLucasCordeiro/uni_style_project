import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#2F9CFA',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './unistyle.png',
  fullDecal: './unistyle.png',
});

export default state;