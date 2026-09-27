import assert from "node:assert/strict";

// Deliberately problematic teaching example: the absent country is invented.
function proposedMap(payload) {
  return {
    shipmentId: payload.shipmentId,
    countryCode: payload.countryCode || "CA",
  };
}

// Bounded alternative for the exercise, not a production integration library.
function explicitMap(payload) {
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    throw new Error("A request object is required");
  }
  if (typeof payload.shipmentId !== "string" || !payload.shipmentId.trim()) {
    throw new Error("A shipment identifier is required");
  }
  if (!["CA", "US"].includes(payload.countryCode)) {
    throw new Error("An explicit supported country is required");
  }
  return { shipmentId: payload.shipmentId, countryCode: payload.countryCode };
}

for (const countryCode of ["CA", "US"]) {
  const input = { shipmentId: `example-${countryCode}`, countryCode };
  assert.deepEqual(proposedMap(input), input);
  assert.deepEqual(explicitMap(input), input);
}
console.log("The original fixtures pass: both supply a supported country.");

const missingCountry = { shipmentId: "example-missing" };
assert.equal(proposedMap(missingCountry).countryCode, "CA");
assert.throws(() => explicitMap(missingCountry), /explicit supported country/);
console.log("Counterexample: the proposed mapper invents CA for an absent country.");

for (const countryCode of ["", "GB", "ca", null, 42]) {
  assert.throws(
    () => explicitMap({ shipmentId: "example-invalid", countryCode }),
    /explicit supported country/,
  );
}
for (const input of [null, undefined, [], "invalid"]) {
  assert.throws(() => explicitMap(input), /request object/);
}
for (const shipmentId of ["", "  ", null, 42]) {
  assert.throws(
    () => explicitMap({ shipmentId, countryCode: "CA" }),
    /shipment identifier/,
  );
}
console.log("The bounded alternative passes the stated acceptance and rejection checks.");
