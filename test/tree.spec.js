const { buildDirTree, TreeNode } = require('./../src/services/tree');
const path = require('path');
const fs = require('fs');

describe('buildDirTree', () => {
  const initialPath = path.join(__dirname, 'food');

  it('should return root node', () => {
    const rootNode = buildDirTree(initialPath);
    expect(rootNode).not.toBeNull();
    expect(rootNode).toHaveProperty('path', initialPath);
    expect(rootNode).toHaveProperty('children');
  });
});



