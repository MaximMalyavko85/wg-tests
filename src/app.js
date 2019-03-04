// this is an example of improting data from JSON
//import 'orders' from '../data/orders.json';
import * as data from '../data/orders.json';
const orders = data.default;


export default (function () {
    // YOUR CODE GOES HERE
    // next line is for example only
  initialization();

  function initialization(){
    var table = document.getElementsByTagName('tbody')[0];
    	
    orders.forEach((order)=>{
    	//console.log(order)
    	var row = document.createElement('tr');
       row.id = "order" + order.id;
       //var id = document.createElement('td');
    	var transaction_id = document.createElement('td');
    	transaction_id.innerHTML = order.transaction_id;

      var id = document.createElement('td');
      id.innerHTML = order.id;

      var date = document.createElement('td');
      date.innerHTML = changeDate(order.created_at);

      var total = document.createElement('td');
      total.innerHTML = order.order_country + order.total;

      var card_number = document.createElement('td');
      card_number.innerHTML = changeCardNumber(order.card_number);

      var card_type = document.createElement('td');
      card_type.innerHTML = order.card_type;

      var location = document.createElement('td');
      location.innerHTML = order.order_country+" ("+ order.order_ip +")";

      row.append(transaction_id);
      row.append(id);
      row.append(date);
      row.append(total);
      row.append(card_number);
      row.append(card_type);
    	row.append(location);

    	table.appendChild(row);
    	})
    }
  function changeDate(date){
    var refDate = new Date(Number(date));
    var month = '' + (refDate.getMonth() + 1);
    var day = '' + refDate.getDate();
    var year = refDate.getFullYear();
    var hour = refDate.getHours();
    var minute = refDate.getMinutes();
    var sec = refDate.getSeconds();
    var ampm;
    if (hour < 12){
      ampm = "AM";
    } else {
      ampm = "PM";
    }
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    if (hour.toString().length < 2) hour = '0' + hour;
    if (minute.toString().length < 2) minute = '0' + minute;
    if (sec.toString().length < 2) sec = '0' + sec;



    var dataToString = year+"/"+month+"/"+day+ " " + hour+":" + minute + ":" + sec+ " "+ampm;

  return dataToString;
  }

  function changeCardNumber(value){
    var changeValue =value.replace(eval('/'+value.substr(2,10)+'/'),'**********');

    return changeValue;
  }

    console.log(orders)
}());
