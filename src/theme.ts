import Aura from '@primeng/themes/aura';
import { definePreset } from '@primeng/themes';

export const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#FFF8E1',
      100: '#FEE6B3',
      200: '#FDD080',
      300: '#F8B94C',
      400: '#B28735',
      500: '#996B2D',
      600: '#805524',
      700: '#66411C',
      800: '#4D2E13',
      900: '#331B0B',
      950: '#1A0E05',
    },
  },
});
