import React from 'react';


let lastId = 0;

function addNewCompany(companyData) {
  const newCompany = {
    id: ++lastId,
    name: companyData.name,
    contact: {
      address: companyData.address,
      phone: companyData.phone,
      email: companyData.email
    },
    дата: Date.now()
  };

  companiesArray.push(newCompany);
}

export default addNewCompany;