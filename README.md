# React Canvas Draw Stream
Base on 
https://github.com/embiem/react-canvas-draw
## Instalation
Install Via NPM:
```js
npm install --save reactdrawstream
```

## Usage
```jsx
import import {ReactDrawStream} from 'reactdrawstream';
...
<ReactDrawStream onGetStream={(stream) => {
    sendStream(stream)
}} />
...
```

### props

- onGetStream: function called once the stream is ready
Please reefer to :
it also inherits all of the props listed on: 
https://github.com/embiem/react-canvas-draw#props