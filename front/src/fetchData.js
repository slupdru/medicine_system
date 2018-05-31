export default async (path, body)=>{
  try{
    const result = await fetch(path, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      credentials:'same-origin',
      body: JSON.stringify(body)
    });
    return result.json();
  }
  catch(err){
    console.log(err.message);
  }
  return false;
};
