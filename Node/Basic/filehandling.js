const { log } = require('console');
const { promisify } = require('util');
const fs = require('fs').promises;
const writeAyncsFiles = promisify(require('fs').writeFile)

function writeFileFun() {

    // fs.writeFile('sample.txt', 'hellosssss world top tech', (err) => {

    //     if (err) {
    //         console.log('error facing', err);
    //         return;
    //     }

    //     console.log("file writing done");

    // });
    // console.log("Start");

    //     const data = fs.writeFileSync('sample.txt','mern stack' );

    //     console.log(data);

    //     console.log("End");

    }
    async function writeAyncsPromises() {
  try {
    const data = await writeAyncsFiles('sample.txt','mern stack weeee' );
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}


async function readFileFun(){
    try {
        const data = await fs.readFile('sample.txt','utf8')
        console.log(data);
        
    } catch (error) {
        console.log(error);
        
    }
}
writeAyncsPromises();

module.exports={writeFileFun,readFileFun}