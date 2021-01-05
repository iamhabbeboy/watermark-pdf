import FileUpload from "../js/file-upload";
jest.mock("../js/file-upload");

// beforeEach(() => {
//   // Clear all instances and calls to constructor and all methods:
//   FileUpload.mockClear();
// });
// jest.mock("../js/file-upload", () => {
//   return function () {
//     return { setFileProperty: ({}) => {} };
//   };
// });

it("We can check if the consumer called the class constructor", () => {
  // const soundPlayerConsumer = new FileUpload();
  expect(new FileUpload()).toHaveBeenCalledTimes(1);
});
test("file upload class", () => {
  expect(true).toBe(false);
});
