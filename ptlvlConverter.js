function ptlevels(config, features){

  const lvls = config.columns
  const debug = config.debug

  var pt = features

  var ptlvl={}

  for(var key in pt) {
    var value  = lvls[key].indexOf(pt[key])
    if(value!=-1) {
      ptlvl[key]= value
    } else {
      var indextoins = getIndexToIns(lvls[key], pt[key])
      ptlvl[key]=Math.min(lvls[key].length-1, indextoins)
    }
  }

  return ptlvl
}

function getIndexToIns(arr, num) {
  return arr.concat(num).sort((a, b) => a - b).indexOf(num);
}

module.exports=ptlevels
