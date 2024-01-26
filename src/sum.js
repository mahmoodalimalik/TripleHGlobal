function sum(x, y){
    x++;
    y++;
    if(x > y)
      return x + y;
    else
      return x - y;
  }
  
  export default sum;