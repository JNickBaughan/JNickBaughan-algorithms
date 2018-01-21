class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    add(data) {
        this.children.push(new Node(data));
    }

    remove(data) {
        this.children = this.children.filter(child => child.data !== data)
    }
}

class Tree {
    constructor(){
        this.root = null;
    }

    traverseDepthFirst(){
        const results = [];
        const getChildren = (node) => {
            results.push(node.data);
            node.children.forEach(child => getChildren(child))
        }

        getChildren(this.root);
        return results;

    }

    traverseBreathFirst(){
        let nodesToProcess = this.root.children;
        let results = [this.root.data];
        while(nodesToProcess.length){
            let temp = nodesToProcess.shift();
            nodesToProcess.push(...temp.children);
            results.push(temp.data)
        }
        return results;
    }
}


module.exports.Node = Node;
module.exports.Tree = Tree;