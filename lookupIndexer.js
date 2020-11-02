const path = require('path')

function lookupindex(datasrc, config, age, ptlvl){
  const factors = config.factors
  const debug = config.debug
  const hasHeader = config.csv_with_header_row
  const filename =age+'.csv'
  var csvfileIndex = config.files.findIndex(file=>file.name===filename)
  if(csvfileIndex!=-1){
    var fileoffset = config.files[csvfileIndex].offset

    var idx = indexbuilder(ptlvl, factors, fileoffset, hasHeader)

    var resultObj ={}
    resultObj.tableid=path.join(datasrc, filename)
    resultObj.index=idx
    return resultObj
  } else {
    return {}
  }
}

function indexbuilder(ptlvl, factors, offset, hasHeader){
  var n = hasHeader ? 1 : 0       // The CSV file has the first row as header
  for (var key in ptlvl) {
    n=n+ptlvl[key]*factors[key]
  }
  return n-offset
}

module.exports=lookupindex
