try {
    let result = 10 / 0;
    if (!isFinite(result)) throw "Cannot divide by zero";
    console.log(result);
  } catch (error) {
    console.log("Error: " + error); // Output: Error: Cannot divide by zero
  }
  
  