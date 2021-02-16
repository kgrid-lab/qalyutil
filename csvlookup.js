const fs = require('fs-extra')

function csvrowvalue(csvfile, rowindex){

  var resultObj ={}
  try {
    var data = fs.readFileSync(csvfile)
    var array = data.toString().split("\n");
    var headers = array[0].replace("\r","").split(",")
    var values = array[rowindex].replace("\r","").split(",")
    if(headers.length>=values.length){
      headers.forEach(function(header,index){
        if(index<values.length){
          resultObj[header]=values[index]
        } else {
          resultObj[header]="na"
        }
      })
    } else {
      values.forEach(function(value,index){
        if(index< headers.length){
          resultObj[headers[index]]=value
        } else {
          resultObj["Column"+index]=value
        }
      })
    }
  } catch(error){
    // console.error(error)
  }
  return resultObj
}

module.exports=csvrowvalue
