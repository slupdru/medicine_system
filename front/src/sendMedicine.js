import fetchData from './fetchData';


async function sendMedicine(inputPhoto, inputName, inputPrice, selectedSymptoms, selectedСontraindications){
  const bodySend = {
    photo:inputPhoto,
    name: inputName,
    price: inputPrice,
    runny_nose: false,
    cough: false,
    pruritus: false,
    temperature: false,
    other_symptoms: false,
    pregnancy: false,
    under_12_years_old: false,
    allergy: false,
    heart_diseases: false,
    heart_gkt: false,
    other_contraindications: false
  };
  for (let symp of selectedSymptoms){
    bodySend[symp]=true;
  }
  for (let cont of selectedСontraindications){
    bodySend[cont]=true;
  }
  const result = await fetchData('/savemedicine', bodySend);
  return result;
}
export default sendMedicine;