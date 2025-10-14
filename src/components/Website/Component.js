import Sectionone from "./Sectionone/Component";
import Sectionthree from "./Sectionthree/Component";
import Sectionfour from "./Sectionfour/Component";
import Sectionnewcard from "./Sectionnewcard/Component";
const Component = () => {
  return (
    <>
      <div className="container-fluid _admin-sider_comp">
       
        <Sectionone />
        <Sectionnewcard />      
        <Sectionthree />      
        <Sectionfour />      
      </div>
    </>
  );
};

export default Component;
