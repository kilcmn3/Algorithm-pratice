//https://leetcode.com/problems/valid-parentheses/

//Method 1.

var isValid = function(s) {   
    const stack = [];
    const map = {
      '(': ')',
      '[': ']',
      '{': '}'
    }
    
    for (let i = 0 ; i < s.length ; i++) {
        let c = s[i];
        console.log(c)
        console.log(stack)
        if (map[c]) {
          stack.push(map[c])

        } else if (c !== stack.pop()) {

          return false;
        } 
    }
    return !stack.length;
};

console.log(isValid("()[]}{"))

//Method 2.

var isValid = function(s) {   
    const stack = [];
    
    for (let i = 0 ; i < s.length ; i++) {
        let c = s.charAt(i);
        switch(c) {
            case '(': stack.push(')');
                break;
            case '[': stack.push(']');
                break;
            case '{': stack.push('}');
                break;
            default:
                if (c !== stack.pop()) {
                    return false;
                }
        }
    }
    
    return stack.length === 0;
};