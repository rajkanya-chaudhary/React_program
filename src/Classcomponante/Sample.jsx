import React, {Component} from "react";
var name = "dimpal chaudhary"
var arr = [10,20,30,40,50,60,70,80,90,100]
var emp = {
    id : 1001,
    name : "deepak sir ",
    dsg : "Trainer",
    Salary : 1350000,
    city : "noida",
    State : "UP"
}
function display()
{
    return(
        <h1>In display() of Sample Componante</h1>
    )
}
class Sample extends Component
{
    render()
    {
        return(
            <>
            <h1>Class Componante example</h1>
            <h2>This is Sample Componante</h2>
            </>
        )
    }
}
export default Sample
export {name,arr,emp,display}




//import React, {Component} from "react";
//export default class Sample extends Component
//{
 //   render()
 //   {
 //       return(
 //           <>
 //           <h1>Class Componante example</h1>
 //           <h2>This is Sample Componante</h2>
 //           </>
 //       )
 //   }
//}




//export default Sample
//import React, {Component} from "react";
//class Sample extends Component
//{
//    render()
//    {
 //       return(
  //          <>
  //          <h1>Class Componante example</h1>
  //          <h2>This is Sample Componante</h2>
  //          </>
 //       )
 //   }
//}
//export default Sample