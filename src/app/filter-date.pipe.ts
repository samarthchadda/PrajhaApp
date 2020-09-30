import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterDate'
})
export class FilterDatePipe implements PipeTransform {


  transform(value:any,doj:string,propName:string) {
    
    if(value.length===0||doj==''){

      return value;

    }

    const resultArr=[];
    const newDate = new Date(doj);

    for(const item of value)
    { 
      const propDate = new Date(item[propName]);

      if(propDate.getDate()===newDate.getDate())
      {
        resultArr.push(item);
      }
    }



    // if(doj) {
    //   let revenueList =[];

  
    // resultArr.forEach(flight => {

    //   if (flight.PaymentDate.getDay() === newDate.getDay()) {
    //     revenueList.push(flight);           
     
    //   }


    //       console.log('LIST' + JSON.stringify(revenueList));
    //       console.log(revenueList.length);
          
    //     });
    //     return revenueList;
    // }


    return resultArr;

    
  }






}
