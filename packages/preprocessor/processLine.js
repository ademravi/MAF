var applyStep=require('./applyStep')
async function processLine (line) {
  line=line
  if(line.trim().startsWith("Apply ")) {
    return await applyStep(line.trim().substring("Apply ".length))
  } else {
    return line
  }
}
module.exports=processLine
