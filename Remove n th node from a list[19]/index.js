let newNode = new ListNode(0, head);
let dummy = newNode;

for (let i = 0; i < n; i++) {
  head = head.next;
}

while (head) {
  head = head.next;
  dummy = dummy.next;
}

dummy.next = dummy.next.next;
return newNode.next;
