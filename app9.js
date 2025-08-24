//conditional && comparsion

//syntax
//   if(something){
//       do something;
//   }else{
//       do something;
//   }

    const id=200;
//EQUAL TO

     if(id==200){
         console.log("yes the Number is 200");
     }else{
          console.log("sorry yar")
      }

//NOT EQUAL TO
     const id=200;
     if(id!=200){
          console.log("yes the Number is 200");
      }else{
          console.log("sorry yar")
      }

//EQUAL DATATYPE & VALUE
      const id="200";
      if(id===200){
          console.log("yes the Number is 200");
      }else{
          console.log("sorry yar")
      }

    //undefined
      const id=200;
    if(typeof id !=="undefined"){
        console.log(id);
    }else{
        console.log("not id")
    }


//GREATER THAN &EQUAL TO
    const id=200;
    if(id>=200) {
        console.log("high");
    }else{
        console.log("low")
    }

//LESSER THAN & EQUAL TO
  const id=200;
  if(id<=200) {
      console.log("low");
  }else{
      console.log("high")
  }

  //IF ELSE
    const color="black"
    if(color==="black"){
        console.log("color is black")
    }else if(color==="blue"){
        console.log("color is blue")
    }else if(color==="brown"){
      console.log("color is brown")

  }else{
        console.log("some error is occured")
    }

//LOGICAL OPERATOR
// AND
  const age=17;
  if(age>0 && age<15){
      console.log("child")
  }else if(age>=17 && age<25){
      console.log("young")
  }
else if(age>18 && age<25){
  console.log("Adualt")
}else{
      console.log("older")
  }

// OR
  const age=99
  if(age>30 || age<65){
      console.log(" participated")
  }else{
      console.log("not participated")
  }

//  ternary
  const age=201
  console.log(age===200 ?"yes, correct":"no,not correct")
