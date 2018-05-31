import fetchData from './fetchData';
export default async (sliderValue, selectedSymptoms, selectedСontraindications)=>{
  const params = [];
  for (let sympt of selectedSymptoms){
    params.push(sympt);
  }
  for (let contr of selectedСontraindications){
    params.push(contr);
  }
  const bodySend = {
    params:params,
    bottom_price:sliderValue.min,
    top_price:sliderValue.max
  };
  console.log(bodySend,'bodysend');
  const result = await fetchData('/getmedicine', bodySend);
  return result;
};