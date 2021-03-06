// Import class constructors
const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");


describe("Engineer", () => {
  
  
  describe("Engineer object instantiation", () => {
    it("Creates an object with name, id, email, and github properties", () => {
      const engineer = new Engineer("Rick Mort", 1, "rickmort@gmail.com", "rickmort");

      expect(engineer).toBeInstanceOf(Engineer);
      expect(engineer.name).toEqual("Rick Mort");
      expect(engineer.id).toEqual(1);
      expect(engineer.email).toEqual("rickmort@gmail.com");
      expect(engineer.github).toEqual("rickmort");
    });
  });

  
  describe("getName", () => {
    it("Should return the object's name property", () => {
      const engineer = new Engineer("Rick Mort", 1, "rickmort@gmail.com", "rickmort");

      expect(engineer.getName()).toEqual("Rick Mort");
    });
  });

  
  describe("getId", () => {
    it("Should return the object's id property", () => {
      const engineer = new Engineer("Rick Mort", 1, "rickmort@gmail.com", "rickmort");

      expect(engineer.getID()).toEqual(1);
    });
  });

  
  describe("getEmail", () => {
    it("Should return the object's email property", () => {
      const engineer = new Engineer("Rick Mort", 1, "rickmort@gmail.com", "rickmort");

      expect(engineer.getEmail()).toEqual("rickmort@gmail.com");
    });
  });

 
  describe("getGithub", () => {
    it("Should return the object's github property", () => {
      const engineer = new Engineer("Rick Mort", 1, "rickmort@gmail.com", "rickmort");

      expect(engineer.getGithub()).toEqual("rickmort");
    });
  });

  
  describe("getRole", () => {
    it("Should return the string 'Engineer", () => {
      const engineer = new Engineer("Rick Mort", 1, "rickmort@gmail.com", "rickmort");

      expect(engineer.getRole()).toEqual("Engineer");
    });
  });
});