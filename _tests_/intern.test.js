// Import class constructors
const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");


describe("Intern", () => {
  
  
  describe("Intern object instantiation", () => {
    it("Creates an object with name, id, email, and school properties", () => {
      const intern = new Intern("Rick Mort", 1, "rickmort@gmail.com", "NCAT");

      expect(intern).toBeInstanceOf(Intern);
      expect(intern.name).toEqual("Rick Mort");
      expect(intern.id).toEqual(1);
      expect(intern.email).toEqual("rickmort@gmail.com");
      expect(intern.school).toEqual("NCAT");
    });
  });

  
  describe("getName", () => {
    it("Should return the object's name property", () => {
      const intern = new Intern("Rick Mort", 1, "rickmort@gmail.com", "NCAT");

      expect(intern.getName()).toEqual("Rick Mort");
    });
  });

 
  describe("getId", () => {
    it("Should return the object's id property", () => {
      const intern = new Intern("Rick Mort", 1, "rickmort@gmail.com", "NCAT");

      expect(intern.getID()).toEqual(1);
    });
  });

  
  describe("getEmail", () => {
    it("Should return the object's email property", () => {
      const intern = new Intern("Rick Mort", 1, "rickmort@gmail.com", "NCAT");

      expect(intern.getEmail()).toEqual("rickmort@gmail.com");
    });
  });

  describe("getSchool", () => {
    it("Should return the object's school property", () => {
      const intern = new Intern("Rick Mort", 1, "rickmort@gmail.com", "NCAT");

      expect(intern.getSchool()).toEqual("NCAT");
    });
  });

  
  describe("getRole", () => {
    it("Should return the string 'Intern", () => {
      const intern = new Intern("Rick Mort", 1, "rickmort@gmail.com", "NCAT");

      expect(intern.getRole()).toEqual("Intern");
    });
  });
});
