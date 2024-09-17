import PropsTest from "../../components/propsTest";

export default function Home() {
  
  return (
   <div>
    <h3>Props</h3>
    <PropsTest firstname="Muhammad" lastname="Asher"/>
    <PropsTest firstname="Hammad" lastname="Farman"/>
    <PropsTest firstname="Muhammad" lastname="Yaseen"/>
    <PropsTest  lastname="Yaseen"/>
   </div>
  );
}
