const path = require('path')

function lookupindex(datasrc, config, csvfileIndex, ptlvl){
  const factors = computeFactors(config.columns)
  const hasHeader = config.csv_with_header_row

  if(csvfileIndex!=-1){
    var filename = config.files[csvfileIndex].name
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

function computeFactors(columns){
  var columntable = []

  for(var key in columns) {
    var obj = {}
    obj.name=key
    obj.levels = columns[key].length
    columntable.push(obj)
  }

  var factors = {}
  for( var key in columns){
    factors[key]=1
  }

  var imax = (columntable.length-1)
  for(var i = 0; i<=imax; i++){
    for(var j=i+1; j<columntable.length; j++){
      factors[columntable[i].name]= factors[columntable[i].name]*columntable[j].levels
    }
  }

  return factors
}

module.exports=lookupindex
