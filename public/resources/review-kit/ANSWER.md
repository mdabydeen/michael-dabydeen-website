# Worked answer

The proposed mapper should not be approved against the stated exercise requirement. It invents a country when that information is absent. The partner allows omission, but the downstream workflow requires an explicit supported value.

The original fixtures establish that the mapper preserves `CA` and `US` when supplied. They do not establish correct behaviour for a missing country, an empty value, a value outside the supported set, or an invalid type.

The runnable example shows that an omitted country becomes `CA`. This is an observable result of the provided code, not an inference about a production system.

## One bounded alternative

Reject the incomplete or unsupported input before constructing the downstream request. The provided alternative accepts only the exercise's supported country strings and requires a non-empty shipment identifier. It intentionally does not infer geography or silently normalise an unknown value.

In a real workflow, rejection may route the request to a correction queue, return a validation response, or pause for review. The exercise does not establish which of those behaviours the business needs. The team must decide and test the surrounding workflow.

## What to assess

- Did the reviewer distinguish what the source allows from what the destination requires?
- Did they find the added default and its effect?
- Did they propose a missing test tied to that requirement?
- Did they state the unresolved workflow decision instead of assuming rejection completes recovery?

The example does not address authentication, retries, concurrent state changes, idempotency, logging, data handling, or downstream effects already produced. Passing its checks supports only its bounded mapping behaviour. A more complete integration needs further design and evidence.
