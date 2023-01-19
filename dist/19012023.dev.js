"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// creating a node
var Node = function Node(val) {
  _classCallCheck(this, Node);

  this.val = val;
  this.next = null;
};

var Stack =
/*#__PURE__*/
function () {
  function Stack() {
    _classCallCheck(this, Stack);

    this.first = null;
    this.last = null;
    this.size = 0;
  }

  _createClass(Stack, [{
    key: "push",
    value: function push(val) {
      var newNode = Node(val);

      if (!this.first) {
        this.first = newNode;
        this.last = newNode;
      } else {
        var current = this.first;
        this.first = newNode;
        newNode.next = current;
      }

      this.size++;
      return this;
    }
  }, {
    key: "pop",
    value: function pop() {
      if (!this.first) return null;
      var temp = this.first;

      if (this.first == this.last) {
        this.tail = null;
      } else {
        this.first = temp.next;
      }

      this.size--;
      return this;
    }
  }]);

  return Stack;
}();

var stack = new Stack();
stack.push(6);
stack.push(5);
console.log(stack);