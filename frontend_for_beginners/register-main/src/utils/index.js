
const FieldHelper = {INPUT:1, SELECT:2};

const memberRoles = [
    {label:`Escolha...`, value:``},
    {label:"Designer", value:'Designer UX/UI'},
    {label:"Dev back-end", value:'Dev back-end'},
    {label:"Dev front-end", value:'Dev front-end'},
    {label:"Product Owne", value:'Product Owner'},
    {label:"Scrum Master", value:'Scrum Master'},
    {label:"Tech-lead", value:'Tech-lead'}
];

const memberInstitutions = [
    {label:`Escolha...`, value:``},
    {label:`Escolar Sandy`, value:'Escolar Sandy'},
    {label:`Faculdade Junior`, value:'Faculdade Junior'},
    {label:`Universidade Whatever`, value:'Universidade Whatever'},
];


const sendRequest = async (body, uri, method, headers = {'Accept': 'application/json','Content-Type': 'application/json'}) =>{

    try{
        if(localStorage.getItem('IS_VALID')==='true'){
        const rawResponse = await fetch(uri, {method,headers,body});
    
        alert('Dados enviados com sucesso!')

        return await rawResponse.json();

        }else{
            alert('Inscrição não realizada. Os campos realçados em vermelho precisam ser preenchidos.');
            return false;
        }

    }catch(error){

        alert('Requisição não foi aceita!')
        console.log(error);
    }

}

const produceBody = (squad,
    members_name,
    members_id,
    members_email,
    members_role,
    members_institution,
    members_enrollment,
    moment)=>{

    let id=0;

    let number = 0;

    for(let i = 0; i < members_name.length; i++)
        number += members_name[i].value !== ''?1:0;

    let body = `{
                    "fields": {
                        "squad": {
                            "stringValue": "${squad.value}"
                        },
                        "head_name": {
                            "stringValue": "${members_name[id].value}"
                        },
                        "head_id": {
                            "stringValue": "${members_id[id].value}"
                        },
                        "head_email": {
                            "stringValue": "${members_email[id].value}"
                        },
                        "head_role": {
                            "stringValue": "${members_role[id].value}"
                        },
                        "head_institution": {
                            "stringValue": "${members_institution[id].value}"
                        },
                        "head_enrollment": {
                            "stringValue": "${members_enrollment[id++].value}"
                        },
                    
                
                        "member_two_name": {
                            "stringValue": "${members_name[id].value}"
                        },
                        "member_two_id": {
                            "stringValue": "${members_id[id].value}"
                        },
                        "member_two_email": {
                            "stringValue": "${members_email[id].value}"
                        },
                        "member_two_role": {
                            "stringValue": "${members_role[id].value}"
                        },
                        "member_two_institution": {
                            "stringValue": "${members_institution[id].value}"
                        },
                        "member_two_enrollment": {
                            "stringValue": "${members_enrollment[id++].value}"
                        },
                
                
                        "member_three_name": {
                            "stringValue": "${members_name[id].value}"
                        },
                        "member_three_id": {
                            "stringValue": "${members_id[id].value}"
                        },
                        "member_three_email": {
                            "stringValue": "${members_email[id].value}"
                        },
                        "member_three_role": {
                            "stringValue": "${members_role[id].value}"
                        },
                        "member_three_institution": {
                            "stringValue": "${members_institution[id].value}"
                        },
                        "member_three_enrollment": {
                            "stringValue": "${members_enrollment[id++].value}"
                        },
                
                        "member_four_name": {
                            "stringValue": "${members_name[id].value}"
                        },
                        "member_four_id": {
                            "stringValue": "${members_id[id].value}"
                        },
                        "member_four_email": {
                            "stringValue": "${members_email[id].value}"
                        },
                        "member_four_role": {
                            "stringValue": "${members_role[id].value}"
                        },
                        "member_four_institution": {
                            "stringValue": "${members_institution[id].value}"
                        },
                        "member_four_enrollment": {
                            "stringValue": "${members_enrollment[id++].value}"
                        },
                
                
                        "member_five_name": {
                            "stringValue": "${members_name[id].value}"
                        },
                        "member_five_id": {
                            "stringValue": "${members_id[id].value}"
                        },
                        "member_five_email": {
                            "stringValue": "${members_email[id].value}"
                        },
                        "member_five_role": {
                            "stringValue": "${members_role[id].value}"
                        },
                        "member_five_institution": {
                            "stringValue": "${members_institution[id].value}"
                        },
                        "member_five_enrollment": {
                            "stringValue": "${members_enrollment[id++].value}"
                        },
                
                
                        "member_six_name": {
                            "stringValue": "${members_name[id].value}"
                        },
                        "member_six_id": {
                            "stringValue": "${members_id[id].value}"
                        },
                        "member_six_email": {
                            "stringValue": "${members_email[id].value}"
                        },
                        "member_six_role": {
                            "stringValue": "${members_role[id].value}"
                        },
                        "member_six_institution": {
                            "stringValue": "${members_institution[id].value}"
                        },
                        "member_six_enrollment": {
                            "stringValue": "${members_enrollment[id++].value}"
                        },
                        "moment": {
                            "stringValue": "${moment}"
                        },
                        "number": {
                            "stringValue": "${number}"
                        },

        }
    }`;

    return body;

}


var objectToCSVRow = function(dataObject) {
    var dataArray = [];
    for (var o in dataObject) {
        var innerValue = dataObject[o]===null?'':dataObject[o].toString();
        var result = innerValue.replace(/"/g, '""');
        result = '"' + result + '"';
        dataArray.push(result);
    }
    return dataArray.join(' ') + '\r\n';
}

var exportToCSV = function(arrayOfObjects) {

    if (!arrayOfObjects.length) {
        return;
    }

    var csvContent = "data:text/csv;charset=utf-8,";

    // headers
    csvContent += objectToCSVRow(Object.keys(arrayOfObjects[0]));

    arrayOfObjects.forEach(function(item){
        csvContent += objectToCSVRow(item);
    }); 

    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "customers.csv");
    document.body.appendChild(link); // Required for FF
    link.click();
    document.body.removeChild(link); 
}

function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }

function formatDate(date) {
    return [padTo2Digits(date.getDate()),padTo2Digits(date.getMonth() + 1),date.getFullYear(),].join('/') 
    + ' - ' +
    [date.getHours(),date.getMinutes(),date.getSeconds()].join(':') 
    ;
  }

export {sendRequest, produceBody, FieldHelper, memberRoles, memberInstitutions, exportToCSV, formatDate};