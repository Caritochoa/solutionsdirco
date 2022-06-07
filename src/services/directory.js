const fs = require('fs');

class Directory {

  constructor(folderName) {
    this.folderName = folderName;
  }

  readInput() {
    fs.readFile('/home/caro/Desktop/solutionsdirco/lambdas/common/mock.txt', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(data);
    });
  }
  create() {
    if (!fs.existsSync(this.folderName)) {
      fs.mkdirSync(this.folderName);
    }
  }

  delete() {
    fs.rmdir(dir, { recursive: true }, err => {
      if (err) {
        throw err;
      }
    });
  }

  move() {
    //figure out how to delete from one place and create in the other 
    this.delete()
    this.create()
  }

  list() {
    let list;
    this.readInput();
    return this.list;
  }

}

module.exports = {
  Directory
}