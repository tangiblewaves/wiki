const {promises: fs} =  require('fs')
const {plugin} = require('../docs/js/pmmarkup.js')
const path = require('path')

function execute_pmm_conversions(content){
  let bob = ''
  plugin({
    beforeEach: (fn) => {bob = fn(content)},
    afterEach: () => {}
  })
  return bob
}



async function traverseDir(folder) {
  const dir = await fs.readdir(folder, {withFileTypes: true})
  for (const entry of dir) {
    if (entry.isDirectory()) {
      await traverseDir(path.join(folder, entry.name))
    } else {
      if (entry.name.endsWith('.md') && !entry.name.startsWith('_')) {
        const content = await fs.readFile(path.join(entry.path, entry.name), 'utf-8')
        const converted = execute_pmm_conversions(content)
        await fs.writeFile(path.join(entry.path, entry.name), converted)
      }
    }
  }
}

console.log(traverseDir('docs/').then())
