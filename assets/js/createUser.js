            let user = [];

            try{
              let temp=JSON.parse(localStorage.getItem("user"));
              temp.map((account)=>{
                console.log(account);
                user.push(account);
              });
            }
            catch(TypeError){
              localStorage.setItem('user',JSON.stringify(user))
            }

              function createUser(){
                let name = document.querySelector('#txtName').value;
                let password = document.querySelector('#txtPass').value;
                let newName = {
                  name: name,
                  password: password};
                user.push(newName);

                localStorage.setItem('user',JSON.stringify(user));
              }

                /*console.log(user);
                let jns = JSON.stringify(user);
                localStorage.setItem('user',jns); 

                let jns_retrieve = localStorage.getItem('user');
                console.log(jns_retrieve);


                let jns_parse = JSON.parse(localStorage.getItem('user'));
                console.log(jns_parse);


                console.log("Name is " + jns_retrieve[0].name);
                console.log("Password is " + jns_retrieve[0].password);

                let html = `
                  <tr>
                    <td>${jns_retrieve[0].name}</td>
                    <td>${jns_retrieve[0].gender}</td>
                  </tr>
                  <tr>
                    <td>${jns_retrieve[1].name}</td>
                    <td>${jns_retrieve[1].gender}</td>
                  </tr>
                `;

                let html = ``;

                jns_retrieve.map((name)=>{
                  console.log(name.name);
                  console.log(name.gender);
                  console.log("---------");
                  html += `
                  <tr>
                    <td>${name.name}</td>
                    <td>${name.password}</td>
                    <td><img src="http://lorempixel.com/100/100/people/"></td>
                  </tr>
                  `;    
                });

                for(let i=0;i<jns_retrieve.length;i++){
                  console.log(jns_retrieve[i].name);
                  console.log(jns_retrieve[i].gender);
                  console.log("************");
                }

                document.querySelector('#tblNames').innerHTML = html;
              }*/