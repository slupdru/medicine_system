export default (medicines)=>{
  const ListData=[];
  for (let med of medicines){
    const symptmass = [];
    med.runny_nose && symptmass.push('насморк');
    med.cough && symptmass.push('кашель');
    med.pruritus && symptmass.push('зуд');
    med.temperature && symptmass.push('температура');
    med.other_symptoms && symptmass.push('другие');

    const contmass = [];
    med.pregnancy && contmass.push('Беременность');
    med.under_12_years_old && contmass.push('Возраст до 12 лет');
    med.allergy && contmass.push('Аллергия');
    med.heart_diseases && contmass.push('Болезни сердца');
    med.heart_gkt && contmass.push('Болезни ЖКТ');
    med.other_contraindications && contmass.push('Другие');

    ListData.push({
      price: med.price,
      title: med.name,
      photo: med.photo,
      symptoms: symptmass,
      contraindications:contmass,
    });
  }
  return ListData;
};