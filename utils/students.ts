import { Factory } from "rosie";
import { name, datatype, random, internet, date, address, phone } from "faker";
import axios from "axios";

const studentFactory = new Factory().attrs({
  name: () => name.findName(),
  dateOfBirth: () => date.past(4),
  gender: () => random.arrayElement(["male", "female"]),
  address: () => address.streetName(),
  contactNo: () => phone.phoneNumber(),
  email: () => encodeURIComponent(internet.email()),
  joinDate: () => date.past(),
  classGroupId: "Nursery",
  sectionId: "A",
  rollNo: () => datatype.number(),
  referenceCode: () => random.alphaNumeric(5).toUpperCase(),
  createdAt: () => new Date(),
  updatedAt: () => new Date(),
  test: () => "myname at hotmail com",
});

export default async function seedStudents() {
  return studentFactory.buildList(300);
}
