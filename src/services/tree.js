const fs = require('fs');

class TreeNode {

  constructor(path) {
    this.path = path;
    this.children = [];
  }
}

function buildDirTree(rootPath) {
  const root = new TreeNode(rootPath);

  const stack = [root]; //add the root of the tree to the stack 

  while (stack.length) {
    const currentNode = stack.pop();

    if (currentNode) {
      const children = fs.readFile('/home/caro/Desktop/solutionsdirco/lambdas/common/mock.txt', 'utf-8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(data);
      });

      for (let child of children) {
        const childPath = `${currentNode.path}/${child}`;
        const childNode = new TreeNode(childPath);
        currentNode.children.push(childNode);

        if (fs.statSync(childNode.path).isDirectory()) {
          stack.push(childNode);
        }
      }
    }
  }
  return root;
}

module.exports = {
  buildDirTree,
  TreeNode
}