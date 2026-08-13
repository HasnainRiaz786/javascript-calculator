  let curr = '', prev = '';
  const currEl = document.getElementById('curr');
  const prevEl = document.getElementById('prev');
 
  function press(val){
    curr += val;
    currEl.textContent = curr;
  }
  function clearAll(){
    curr = ''; prev = '';
    currEl.textContent = '0'; prevEl.textContent = '';
  }
  function del(){
    curr = curr.slice(0,-1);
    currEl.textContent = curr || '0';
  }
  function calculate(){
    try{
      prev = curr;
      let result = eval(curr.replace('%','/100'));
      prevEl.textContent = curr + ' =';
      curr = String(result);
      currEl.textContent = curr;
    }catch(e){
      currEl.textContent = 'Error';
      curr = '';
    }
  }