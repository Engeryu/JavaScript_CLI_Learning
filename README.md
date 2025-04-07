# **README: JavaScript Function Explanations**

This document provides detailed explanations for three JavaScript functions: `charRepeats`, `palindrome`, and `morning_sunshine`. Each function is analyzed for its logic, functionality, and algorithmic complexity.

---

## **Isograms**

### **Code Explanation**

The `charRepeats` function checks if a string contains duplicate characters. Here's how it works:

1. **Input**: The function accepts a string (`str`) as its parameter.
2. **Iteration**: It loops through each character of the string using a `for` loop.
3. **Comparison**:
   - For each character `str[i]`, it finds the first occurrence (`indexOf`) and the last occurrence (`lastIndexOf`).
   - If the two indices are different, the character is repeated.
4. **Return Value**:
   - Returns `true` if duplicates are found; otherwise, returns `false`.

### **Algorithmic Complexity**

- **Time Complexity**: Quadratic \(O(n^2)\), where \(n\) is the length of the string. This is due to the repeated calls to `indexOf` and `lastIndexOf` for each character.
- **Space Complexity**: Constant \(O(1)\), as no additional memory is used beyond the input string.

### **Example Usage**

```javascript
charRepeats("hello"); // Returns true, as 'l' is repeated
charRepeats("world"); // Returns false, as there are no duplicate characters
```

---

## **palindrome.js**

### **Code Explanation**

The `palindrome` function checks whether a given string is a palindrome (reads the same backward as forward). Here's how it works:

1. **Sanitization**:

   - A regular expression `/[\W_]/g` is used to remove all non-alphanumeric characters (e.g., punctuation, spaces, underscores).
   - The `.toLowerCase()` method converts the entire string to lowercase to make the comparison case-insensitive.
2. **Reverse and Compare**:

   - The sanitized string is split into an array of characters using `.split('')`.
   - The array is reversed using `.reverse()`.
   - The reversed array is then joined back into a string using `.join('')`.
   - The function compares the original sanitized string (`lowRegStr`) with the reversed string (`reverseStr`).
3. **Return Value**:

   - Returns `true` if the reversed string matches the sanitized original string (indicating a palindrome).
   - Returns `false` otherwise.

### **Algorithmic Complexity**

- **Time Complexity**: \(O(n)\), where \(n\) is the length of the input string.
  - Sanitization, reversing, and comparison each traverse the string once, making the process linear.
- **Space Complexity**: \(O(n)\), because additional memory is used for the reversed string.

### **Example Usage**

```javascript
palindrome("A man, a plan, a canal, Panama"); // Output: true
palindrome("hello"); // Output: false
palindrome("racecar"); // Output: true
```

---

## **sunset_views.js**

### **Code Explanation**

The `sunset_views` function processes an array of numbers to remove elements that violate descending order. Here's how it works:

1. **Input**:
   - The function accepts an array of numbers (`numbers`) as its parameter.
2. **Reverse Iteration**:
   - The function loops through the array from the last element to the first element to prevent issues caused by removing elements while iterating forward.
3. **Comparison**:
   - Compares each number with the one preceding it.
   - If the current number is greater than or equal to the previous number, the previous number is removed using `.splice()`.
4. **Return Value**:
   - Returns the modified array where only valid numbers remain.

### **Algorithmic Complexity**

- **Time Complexity**: Quadratic \(O(n^2)\), where \(n\) is the length of the array. The `.splice()` method shifts elements in the array for each removal, which increases time complexity.
- **Space Complexity**: Constant \(O(1)\), as the operations are performed directly on the input array without creating new memory.

### **Example Usage**

```javascript
sunset_views([5, 3, 3, 2, 1]); // Output: [5, 3, 2, 1]
sunset_views([10, 5, 6, 7, 3]); // Output: [10, 7, 3]
```
