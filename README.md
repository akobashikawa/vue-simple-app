# Vue Simple App

Usando HTML5, Vue, Router, Vuex, Vuetify, pero sin webpack.

## Carga dinámica

Carga los módulos según se necesitan.

Antes:
```
import Counter from './Counter.js';
```

Después:
```
const Counter = () => import('./Counter.js');
```