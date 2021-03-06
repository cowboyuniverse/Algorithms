function btNode(val){
	this.val = val;
	this.left = null;
	this.right = null;
}

  btNode.prototype.count = function(){
  	var left = 0, right = 0;
  	if(this.left !== null){ left = this.left.count(); }
  	if(this.right !== null){ right = this.right.count(); }
  	return 1 + left + right;
  };

  btNode.prototype.valid = function(){
  	var left = true, right = true;
  	if(this.left !== null){
  		if (this.left.val > this.val){ return false; }
  		left = left && this.left.valid();
  	}
  	if(this.right !== null){
  		if (this.right.val < this.val){ return false; }
  		right = right && this.right.valid();
  	}
  	return left && right;
  };

  btNode.prototype.height = function(){
  	var lKids = 0, rKids = 0;
  	if (this.left){ lKids += this.left.height();}
  	if (this.right){ lKids += this.right.height();}
  	return 1 + (lKids > rKids ? lKids : rKids);
  };


function BST(){
	this.root = null;
	var self = this;
}

	BST.prototype.isEmpty = function(){
		if (this.root === null){	return true; }
		return false;
	};

	BST.prototype.add = function(val, cur){
		if (this.isEmpty()){
			this.root = new btNode(val);
			return this;
		}
		if (cur === undefined){ cur = this.root; }
		if (val > cur.val){
			if(cur.right === null){
				cur.right = new btNode(val);
				return this;
			}
			cur = cur.right;
		} else if (val < cur.val){
			if(cur.left === null){
				cur.left = new btNode(val);
				return this;
			}
			cur = cur.left;
		} else { return val; }
		return this.add(val, cur);
	};

	BST.prototype.contains = function(val, cur){
		if (cur === undefined){ cur = this.root; }
		if (val == cur.val){ return true; }
		if (val > cur.val){
			if (cur.right !== null ){ cur = cur.right; }
			else { return false; }
		} else if (val < cur.val){
			if (cur.left !== null ){	cur = cur.left; }
			else { return false; }
		}
		return this.contains(val, cur);
	};

	BST.prototype.min = function(cur){
		if(this.isEmpty()){ return null; }
		if(cur === undefined){ cur = this.root; }
		while (cur.left !== null){ cur = cur.left; }
		return cur.val;
	};

	BST.prototype.max = function(cur){
		if(this.isEmpty()){ return null; }
		if(cur === undefined){ cur = this.root; }
		while (cur.right !== null){ cur = cur.right; }
		return cur.val;
	};

	BST.prototype.size = function(){
		if (this.isEmpty()){ return 0; }
		return this.root.count();
	};

	BST.prototype.isValid = function(){
		if (this.isEmpty()){ return true; }
		return this.root.valid();
	};

	BST.prototype.remove = function (val, cur, parent) {
		if (this.isEmpty()){ return; }
		if (this.root.val == val && cur === undefined){
			if (this.root.left && this.root.right){
				this.root.val = this.min(this.root.right);
				return this.remove(this.root.val, this.root.right, this.root);
			} else {
				this.root = this.root.left ? this.root.left : this.root.right;
				return this;
			}
		}
		if (cur === undefined){ cur = this.root;}
		if (cur === null){ return false; }
		if (val == cur.val){
			if (cur.left && cur.right){
				cur.val = this.min(cur.right);
				return this.remove(cur.val, cur.right, cur);
			} else if (parent.left == cur) {
				parent.left = cur.right ? cur.right : cur.left;
			} else if (parent.right == cur){
				parent.right = cur.right ? cur.right : cur.left;
			}
			return this;
		}
		parent = cur;
		cur = val < cur.val ? cur.left : cur.right;
		return this.remove(val, cur, parent);
	};

	BST.prototype.height = function(){
		return this.root ? this.root.height() : 0;
	};

	BST.prototype.isBalanced = function(){
		if (this.root){
			var left = this.root.left ? this.root.left.height() : 0;
			var right = this.root.right ? this.root.right.height() : 0;
			return left == right ? true : false;
		}
		return true;
	};

var bst = new BST();
bst.add(5).add(6).add(7);

console.log("false:", bst.contains(4));
console.log("true:", bst.contains(7));
console.log("5:", bst.min());
console.log("7:", bst.max());
console.log("3:", bst.size());
console.log("true:", bst.isValid());

bst.remove(5);

console.log("false:", bst.isBalanced());
bst.add(2).add(1);
console.log("true:", bst.isBalanced());
