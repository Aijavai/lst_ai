import { Component } from 'react'
import Child from './Child'

class LifecycleDemo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }

    doIncrement = () => {
        console.log('////////', this);
        
    }

    // 状态，生命周期
    // JSX
    render() {
        return (
           <>
           LifecycleDemo
           <p>Count: {this.state.count}</p>
           <button onClick={this.doIncrement}>Increment</button>
            <Child title={"hello"} />
           </>
        )
    }
}

export default LifecycleDemo;