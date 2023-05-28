
function update(body) {
  const { title, url, techs } = /* request. */body
  
  const updateRepository = { title, url, techs }
  
  for (let key in updateRepository) {
    if(!updateRepository[key]) {
      delete updateRepository[key]
    }
  }

  console.log(updateRepository)

  /*  */

 /*  const obj = new Map(Object.entries(props))
  console.log(obj) */
}

update({ title: "Ola", url: "bjdk"})