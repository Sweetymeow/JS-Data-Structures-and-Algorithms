var Node = function(key){
    this.key = key;
    this.left = null;
    this.right = null;
}
  
function BinarySearchTree(){
  // A binary search tree is a binary tree, but it only allows you to store nodes
  // with lesser values on the left-hand side and nodes with greater values on the right-hand side.
  // left < root < right
  this.root = null;

  this.insert = function(key){
    var newNode = new Node(key);

//    console.log(newNode);
     if(root === null){
       root = newNode;
     }else{
       insertNode(root, newNode);
     }
  };
}

BinarySearchTree.prototype.insertKeys = function(){
    var that = this;
    var args = Array.prototype.slice.call(arguments);
    console.log(args);
    
    args.forEach(function(element){
        var newNode = new Node(element);

        if(that.root === null){
          that.root = newNode;
        }else{
          that.insertNode(that.root, newNode);
        }
    });
};

BinarySearchTree.prototype.insertNode = function(root, newNode){
  if(newNode.key < root.key){
    if(root.left === null){
      root.left = newNode;
    }else{
      this.insertNode(root.left, newNode);
    }
  }else{
    if(root.right === null){
      root.right = newNode;
    }else{
      this.insertNode(root.right, newNode);
    }
  }
}; // insertNode()

BinarySearchTree.prototype.search = function(rootNode, value){    
    if(rootNode === null){
        return false;
    }
        
    if(value > rootNode.key){
        return this.search(rootNode.right, value); // 注意这里必须有return，否则迭代返回false之后，没有被返回到调用的参数
    }else if(value < rootNode.key){
        return this.search(rootNode.left, value); // 注意这里必须有return  
    }else{
        console.log("Search find node;");
        return true;
    }

};

BinarySearchTree.prototype.minNode = function(node){
    if(node){
        while(node && node.left !== null){
            console.log(node.left);
            node = node.left;
        }
        return node;
    }
    return null;
};

BinarySearchTree.prototype.maxNode = function(node){
    if(node){
        while(node && node.right){
            node = node.right;
        }
        return node;
    }
    return null;
}

// 深度优先（先访问子节点，再访问父节点，最后是第二个子节点）
// 根节点放在左节点的左边，称为前序（pre-order）
BinarySearchTree.prototype.preOrderTraverse = function( node, callback) {
    if(node !== null){
        callback(node);
        this.preOrderTraverse(node.left, callback);
        this.preOrderTraverse(node.right, callback);
    }
};

// 深度优先： 根节点放在左节点和右节点的中间，称为中序（in-order）
BinarySearchTree.prototype.inOrderTraverse = function(node, callback){
    if(node !== null){
        this.inOrderTraverse(node.left, callback);
        callback(node);
        this.inOrderTraverse(node.right, callback);        
    }
};

// 深度优先： 根节点放在右节点的右边，称为后序（post-order）
BinarySearchTree.prototype.postOrderTraverse = function(node, callback) {
    if(node !== null){
        this.inOrderTraverse(node.left, callback);
        this.inOrderTraverse(node.right, callback);
        callback(node);
    }
};

function printNode(node){
    console.log("Node Value: " + node.key + " # Left: " + 
                (node.left?node.left.key:"null") + " # Right: " +
                (node.right?node.right.key:"null"));
}

var binarySearchTree = new BinarySearchTree();
binarySearchTree.insertKeys(23,56,6,1,8,4,5,82,3,7);
console.log(binarySearchTree);

console.log("Pre Order");
binarySearchTree.preOrderTraverse(binarySearchTree.root, printNode);
//console.log("In Order");
//binarySearchTree.inOrderTraverse(binarySearchTree.root, printNode);
//console.log("Post Order");
//binarySearchTree.postOrderTraverse(binarySearchTree.root, printNode);

var maxTreeNode = binarySearchTree.maxNode(binarySearchTree.root);
console.log(maxTreeNode);
console.log(binarySearchTree.search(binarySearchTree.root, 7));