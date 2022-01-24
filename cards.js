function fn(){
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET","https://jsonplaceholder.typicode.com/users",true);
    xhttp.onload = function(){
        if(this.status === 200){
            var link = JSON.parse(this.responseText);
            var str = ""
            link.forEach((user,index) =>{
                str += `
                <div class="col">
              <div class="card" style="width:400px">
                <img src="https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80">
                 <div class="card-body">
                  <h4 class="card-title">${user.name}</h4>
                  <p class="card-text">${user.email}</p>
                  <p class="card-text">${user.phone}</p>
                  <p class="card-text">${user.website}</p>
                  <a href=# class="btn btn-primary" onclick="fun(this)">Delete</a>
                  </div>
                  </div>
                  </div>
                  `;
                })
           
            }
            document.getElementById("test").innerHTML=str;
        }
        xhttp.send();
    }
    fn();
    function fun(param){
        param.parentElement.parentElement.parentElement.remove()
      }
