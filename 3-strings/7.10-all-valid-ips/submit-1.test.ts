import { getValidIpAddress } from "./submit-1";

test("it works", () => {
  const result = getValidIpAddress("19216811");

  expect(result).toEqual([
    "1.92.168.11",
    "19.2.168.11",
    "19.21.68.11",
    "19.216.8.11",
    "19.216.81.1",
    "192.1.68.11",
    "192.16.8.11",
    "192.16.81.1",
    "192.168.1.1",
  ]);
});
