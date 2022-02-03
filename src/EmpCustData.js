import React from 'react';
import faker from 'faker';
const EmpCustData=(props)=>{
    console.log(props)
    
    return (<div>
       <div class="comment">
       <a class="avatar">
          <img src={props.image} alt="no image"/>
       </a>
    <div class="content">
      <a class="author">{props.name}</a>
      <div class="metadata">
        <span class="date">{props.email}</span>
      </div>
      <div class="text">
        {props.msg}
      </div>
      
    </div>
  </div>
    </div>)
}

//default properties and can be used if properties are not passed
EmpCustData.defaultProps={
    name:"Anil Khadilkar",
        email:"aaa@gmail.com",
        image:"http://image/image",
        msg:"This is Employee"
}
export default EmpCustData