import './App.css'
import HelloComponent from './components/HelloComponent.tsx'
// react + typescript
// javascript 可能会有些问题, 主要因为弱类型
// jsx 后缀改成tsx 
// 函数进行类型约束
// const HelloComponent = () => {
//   // void 空 ReactNode 
//   return 1
// }
function App() {
  // 编译阶段 
  // 多写了些类型声明文件
  // 多写的一些代码 类型声明 代码质量保驾护航
  
  let count:number = 10;
  const title:string ="Hello ts"
  const isDone:boolean = true;
  const list:number[] = [1,2,3];
  // 元祖类型
  const tuple: [string, number] = ["释永乐", 10];
  // 枚举类型
  enum Status {
    Pending,
    Fullfilled,
    Rejected
  }
  const pStatus: Status = Status.Pending;
  // 对象的约束？
  // 接口类
  interface User {
    name: string;
    age: number;
    isSingle?: boolean;
  }
  // 使用interface 来约定类型
  const user:User = {
    name: "Chirs",
    age: 16
  }
  return (
    <>
    {count}
    {title}
    {user.name}{user.age}
    {/* typescript 很严格 */}
    <HelloComponent name="Apex" age={123}/>
    </>
  )
}

export default App
