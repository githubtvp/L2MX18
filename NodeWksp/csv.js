const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const data = [
    { name : 'John', age : 26, gender : 'M'},
    { name : 'Peter', age : 33, gender : 'F'},
    { name : 'Nancy', age : 78, gender : 'F'}
];

const csvWriter = createCsvWriter({
    path : 'out.csv',
    header :[
        {id : 'name', title : 'Name'},
        {id : 'age', title : 'Age'},
        {id : 'gender', title : 'Gender'},
    ]
});

csvWriter.writeRecords(data).then(res =>
    console.log('The csv file was written successfully')
    ).catch(err =>
        console.log('Failed to write csv file')
);
