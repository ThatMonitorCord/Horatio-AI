# Verification & development

[Hub](../README.md) · My engineering notebook · 21 October 2026

## My current baseline

I record application release 1.47.2 as the latest deployed baseline. I version the Minecraft companion separately. I publish dated release notes here, rather than presenting this site as a live service-health display.

## Build evidence · 21 October 2026

I built the application in a fresh pinned environment without retained bytecode inputs and compared the entry point and 152 audited first-party packaged modules with the deployed application. Their code structures matched; I did not claim identical executable bytes. I did not launch or deploy that verification build.

## Bounded workflow checks

I recorded 17 passing checks and two expected failures during the latest core work. The checks used synthetic inputs and disposable state, including cancellation, retrieval boundaries and voice callbacks. The expected failures reproduce defects; they do not count as successful behavior. These checks did not exercise live Discord, speech playback or gameplay.

## Open engineering work

I am tracking stale indexing after a reference becomes empty, cleanup during early startup failure, and diagnostics that can label a generated answer as sent before transport delivery. I also need broader end-to-end media validation. I keep fixes separate from documentation and behavior-preserving source work so each change can be reviewed on its own.

## My release process

I implement in staging, run focused checks, compare packaged behavior where applicable, and keep a verified rollback path. I distinguish source changes, packaged builds and actual deployment. I back up persistent state consistently, accounting for database journals, and avoid duplicating unchanged bulk data with each update.

## My public record

I publish architecture, behavior, dated evidence and sanitized changes. I keep application source, model identities, operational addresses, private records and packaged downloads out of this repository. I review the proposed files and their history before publication. I welcome specific behavior reports without credentials or private conversation excerpts.
