export default async ()=>{
  try{
    const result = await fetch('/checklogin', {
      method: 'GET',
      credentials: 'same-origin'
    });
    const resultJson = await result.json();
    if (resultJson.auth===true){
      return true;
    }
    else return false;
  }
  catch(err){
    console.log(err.message);
  }

};
