# Memory & continuity

[Hub](../README.md) · My engineering notebook · 21 October 2026

## Several kinds of memory

The memory system separates primary conversation records from Horatio’s derived memories, relationship assessments, working notes and research outcomes. A remembered event has different evidential weight from a belief inferred from it. Stored provenance lets Horatio revisit the underlying observation in a later investigation.

## Retrieval before generation

The retrieval pipeline assembles a bounded selection of history, reference material, profiles and persistent memory for Horatio’s current request. It preserves attribution when reducing context and applies the caller’s allowed-channel scope to evidence selection; a persuasive sentence in a retrieved message cannot grant access to another conversation.

## Consolidation and correction

Horatio develops and revises memories within a system that applies deduplication, decay and bounded context construction. Feedback can change his stored assessments and later retrieval. This is application-level learning: records and decisions change, without each conversation retraining model weights. A correction is useful only if later behavior reflects it.

## Working state and reflection

Each investigation receives a bounded working packet. Horatio develops working notes and reflections; the runtime validates revisions before accepting updates and retains private reflection records for operator inspection. I keep these records out of the public development journal. Opening a dashboard view must not authorize indefinite background reflection.

## Where memory can fail

Horatio needs to distinguish missing evidence from evidence of absence. Incomplete imports, stale indexes and context limits can all hide a relevant record. My current maintenance work includes invalidating old indexed content when a reference becomes empty. I have reproduced that defect in a fixture; I have not presented it as fixed.
