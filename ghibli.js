var peopleList = document.querySelector('ul');

fetch('https://ghibliapi.herokuapp.com/people/') 
.then(function(response) {   
  return response.json(); 
})
.then(function(json) {
  console.log(json)
  .slice(0, 10);
  
  json.forEach(p => {
          let listItem = document.createElement('li'); 
      listItem.innerHTML = '<h2>' + p.name + '</h2>' + '<p>' + "Gender:" + " " + p.gender + '<br>' + "Age:" + " " + p.age + '</p>'; 
      peopleList.appendChild(listItem);
      
    
  });
});