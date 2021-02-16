
function computeFileIndex(config, features){
  var stepIndex = []
  var factors = []
  Object.keys(config.filenames).forEach(function(key){
    stepIndex.push(config.filenames[key].findIndex(value=>value===features[key]))
    factors.push(config.filenames[key].length)
  })
  let fileIndex = stepIndex[stepIndex.length-1]
  for(var i=stepIndex.length-2; i>=0; i--){
    fileIndex = fileIndex  + stepIndex[i] * factors[i+1]
  }
  return fileIndex
}

module.exports = computeFileIndex
