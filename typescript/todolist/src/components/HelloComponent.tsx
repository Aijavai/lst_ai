import React from 'react'
interface Props {
    name: string;
    age: number;
}
// typescript 类型约束, 重要的地方一定要类型约束
// 泛型
const HelloComponent: React.FC<Props> = (props) => {
    // const {name} = props;
    return ( 
        <div>Hello user:{props.name}</div>
    )
}
export default HelloComponent
