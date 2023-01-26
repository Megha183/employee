function addemployee(){
    //access values of employee from inputs
    empname=ename.value
    empid=eid.value
    desig=ed.value
    salary=es.value
    exper=ee.value
    //employee={"employee_name":empname,"empid":empid,"desig":desig,"salary":salary,"exper":exper}
    

    //store  data in local storage
    //localStorage.setItem(employee.empid,JSON.stringify(employee))
     if(empid in localStorage){
        alert("employee already present")
    }
    else{
        employee={"employee_name":empname,"empid":empid,"desig":desig,"salary":salary,"exper":exper}
                                 //converts JS into JSON
        localStorage.setItem(employee.empid,JSON.stringify(employee))
        alert(`employee added successfully`)

        //to redirect window
        window.location=`home.html`
     
    }
   
}

function displaydata(){
    eid=s1.value
    if(eid in localStorage){
           //convert json object to js object
   emp=JSON.parse(localStorage.getItem(eid))
   console.log(emp);

result.innerHTML=
 `<p>employee name :<strong class="text-info">${emp.employee_name}</strong></p>
  <p>employee id :<strong class="text-info">${emp.empid}</strong></p>
  <p>employee designation :<strong class="text-info"> ${emp.desig}</strong></p>
 <p>employee salary :<strong class="text-info"> ${emp.salary}</strong></strong>
 <p>employee experiance:<strong class="text-info"> ${emp.exp}</strong></p>`
 
    }
    else{
        alert("employee not presnt in database")
        result.innerHTML=""
    }
}