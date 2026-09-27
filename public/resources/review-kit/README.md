# AI-assisted change review kit

An illustrative review exercise by Mike Dabydeen. It can be used independently or as a discussion exercise with a team. It is not a report of an employer incident or a complete production integration.

## The decision

A partner can send a shipment request with `shipmentId` and an optional `countryCode`. A downstream shipping request requires a country. The proposed mapper supplies `CA` when the field is absent.

The partner contract does **not** say that a missing country means Canada. For this exercise, the agreed downstream requirement is: do not produce a shipping request unless the country is explicitly present and belongs to the small supported set, `CA` or `US`.

The two original fixture cases contain a valid country. They therefore do not test what should happen when the partner omits the field.

```javascript
function proposedMap(payload) {
  return {
    shipmentId: payload.shipmentId,
    countryCode: payload.countryCode || "CA",
  };
}
```

Would you approve this change? Write down:

1. What do the existing fixtures establish?
2. Which assumption changes the meaning of the request?
3. What evidence or code change would you require?
4. What should the system do with an incomplete request?

Read the [worksheet](WORKSHEET.md) before comparing with the [worked answer](ANSWER.md).

## Run the demonstration

The [example](example.mjs) uses Node.js and its built-in assertions; it has no package dependencies and makes no network calls. Run it from this directory:

```sh
node example.mjs
```

It checks the original fixtures, exposes the unsupported default, and checks a bounded alternative. The deliberately problematic mapper is included for review practice; do not copy it into a production integration.

## What this exercise teaches

Passing examples support the cases they cover. A review also needs to examine assumptions introduced by the change and whether the tests cover the decision being made. The AI-assisted framing describes a relevant review setting; this particular defect could be written by a person or a tool. Nothing in the exercise establishes that AI causes the defect more often.

The answer, code, and worksheet are all provided. A team can run the exercise without booking a session or subscribing to a newsletter.
