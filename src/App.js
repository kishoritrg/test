import logo from './logo.svg';
import './App.css';
import faker from "faker";
import EmpCustData from "./EmpCustData"
import CardDetails from "./CardDetails"
function App() {
  
  return (
    <div className="ui container comment">
    <div class="ui comments">
     <h3 class="ui dividing header">Employee/customer details</h3>
     <CardDetails>
          <EmpCustData
          name="Kishori Khadilkar"
          email="aaa@gmail.com"
          image={faker.image.image()}
          msg="This is Employee"
          ></EmpCustData>
      </CardDetails>
      <CardDetails>
          <EmpCustData
          name="Rajan Khadilkar"
          email="rrr@gmail.com"
          image={faker.image.image()}
          msg="This is Customer"
          ></EmpCustData>
      </CardDetails>
     <CardDetails>
        <EmpCustData
        name="Anil Khadilkar"
        email="aaa@gmail.com"
        image={faker.image.image()}
        msg="This is Employee"
        ></EmpCustData>
    </CardDetails>
</div>

    </div>)
}

export default App;
