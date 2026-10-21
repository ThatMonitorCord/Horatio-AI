# Development & operations

[Hub](../README.md) · Engineering notebook · 21 October 2026

## Release baseline

Application release 1.47.2 is the current baseline. The Minecraft companion follows its own version sequence.

## Repeatable builds

A pinned build environment produces the application from source. The latest build comparison matched the entry point and 152 first-party packaged modules against the deployed application.

## Workflow testing

Focused checks cover cancellation, retrieval boundaries, voice callbacks and state handling. Disposable fixtures make failures reproducible and keep development work separate from production data.

## Engineering priorities

Current work focuses on index freshness, startup cleanup, media handling and delivery diagnostics. Each fix stays small enough to review and trace through a release.

## Release process

Changes move through staging, focused checks and packaging before deployment. Rollback material is retained, and consistent database backups account for journals without duplicating unchanged bulk data.

## Development record

Architecture guides explain how the system fits together. The release log records shipped changes, while the roadmap tracks upcoming work.
