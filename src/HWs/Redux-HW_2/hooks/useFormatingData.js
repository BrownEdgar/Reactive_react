import parse from "html-react-parser";

const replaceTo = (data, words) => {
   let formatedData = data;
   const numbers = new Set(formatedData.match(/\d/g));

   for (const word of words) {
      formatedData = formatedData.replaceAll('"' + word + '":', `<span className='output__${word}'>${'"' + word + '":'}</span>`);
   }
   for (const number of numbers) {
      formatedData = formatedData.replaceAll(number, `<span className="output__number">${number}</span>`);
   }

   return formatedData;
};

export const useFormatingData = (data) => {
  let dataToString = JSON.stringify(data, null, 2);

   dataToString = replaceTo(dataToString, ["id", "name", "contact", "address", "phone", "email", "date"]);
  return parse(dataToString);
};
