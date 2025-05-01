let person = {
    name: "Ali",
    greet: function() {
      console.log("Hi, I'm " + this.name);
    }
  };
  person.greet(); // Output: Hi, I'm Ali
  