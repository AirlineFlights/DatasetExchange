import pug from 'babel-plugin-transform-react-pug';
export const ReactComponent = props => pug`
  .wrapper
    if props.shouldShowGreeting
      p.greeting Hello World!

    button(onClick=props.notify) Click Me`

    export default ReactComponent