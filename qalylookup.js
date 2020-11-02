const fs = require('fs-extra')

function qalyears(config, lookupindex){

  const debug = config.debug
  const dataset_full = config.dataset_full
  const keylength = Object.keys(config.factors).length
  var csvfile = lookupindex.tableid
  var idx = lookupindex.index
  var columnoffset = keylength + 3
  var resultObj ={}

  try {
    var data = fs.readFileSync(csvfile)
    var array = data.toString().split("\n");
    var value = array[idx].replace("\r","").split(",")
    if(debug) {
      resultObj.index = dataset_full ? value[0] : idx
      resultObj.value = array[idx].replace("\r","")
    }
    resultObj.noscreening  =dataset_full ? value[columnoffset]:value[0]
    resultObj.screening = dataset_full ? value[columnoffset+2]:value[1]
    resultObj.gain = dataset_full ? value[columnoffset+4] : (value[1]-value[0]).toFixed(6)

  } catch(error){
    // console.error(error)
  }
  return resultObj
}

module.exports=qalyears
