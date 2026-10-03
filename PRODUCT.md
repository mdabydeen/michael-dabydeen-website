# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Engineering leaders, senior developers, event organisers, and prospective workshop buyers who want to assess Mike Dabydeen's thinking and public work. Mike is the initial content editor.

## Product Purpose

The site is Mike Dabydeen's durable public home for writing, public engineering artefacts, proposed speaking material, and a private-workshop enquiry path. It should help a visitor inspect the work, understand its limitations, and choose one relevant next step.

## Positioning

The site makes the engineering reasoning inspectable. Its public articles, code, review exercise, and workshop path distinguish implemented behaviour, illustrative examples, and proposed work instead of turning them into generic leadership claims.

## Operating Context

The public site is a Next.js application deployed on Netlify at michaeldabydeen.com. Content currently lives in repository MDX files. The former Astro site at new.michaeldabydeen.com contains visual and structural reference material, but its unverified client cases and historical archive are not migration sources.

## Capabilities and Constraints

- Keep `michaeldabydeen.com` as the canonical public host.
- Content changes must remain versioned in Git and support a reviewable branch before publication.
- A CMS needs authenticated production editing and should not depend on Netlify Git Gateway, which Netlify has deprecated for new configurations.
- Website copy must use supported facts, Canadian English, and distinguish public implementations from claims of outcome, adoption, or safety.
- Preserve the existing working review-kit download and workshop-interest paths.

## Brand Commitments

Mike writes as a considered practitioner and accessible educator. The experience should feel deliberate, useful, and factual rather than promotional. The requested visual reference set is Dribbble, Behance, UI8, and Pinterest, used for composition and craft rather than copied work.

## Evidence on Hand

- Verified public artefacts: Stopline, Metron, the review kit, and the current first-party articles.
- User-supplied biography: current Purolator Digital Lab, UREEQA, Sheridan, and Conestoga roles in Toronto.
- The content workspace's claim ledger and publication register are the evidence and publication sources of truth.
- The Astro repository contains unverified customer case studies and retrospective material. Do not publish or migrate them without supporting evidence.

## Product Principles

1. Curate evidence, do not manufacture proof.
2. Let writing and artefacts carry the portfolio.
3. Keep the route from free learning material to a relevant paid conversation clear and honest.
4. Make publishing controlled enough to review and simple enough to sustain.

## Accessibility & Inclusion

The public site must remain readable on narrow screens, keyboard-operable, and clear without decorative motion. Reading content, navigation, and contact paths must work without relying on hover or visual cues alone.
