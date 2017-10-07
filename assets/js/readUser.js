                    let jns_parse = JSON.parse(localStorage.getItem('user'));
                        console.log(jns_parse);
                        let html = ``;

                        jns_parse.map((name)=>{
                    /*      console.log(name.name);
                          console.log(name.gender);
                          console.log("---------");*/
                          html +=`
                          <tr>
                            <td>${name.name}</td>
                            <td>${name.password}</td>
                            <td><img src="http://lorempixel.com/50/50/people/"></td>
                          </tr>
                          `;    
                        });

                        /*for(let i=0;i<jns_retrieve.length;i++){
                          console.log(jns_retrieve[i].name);
                          console.log(jns_retrieve[i].gender);
                          console.log("************");
                        }*/

                        document.querySelector('#tblNames').innerHTML = html;