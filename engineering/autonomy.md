# Autonomy & research

[Hub](../README.md) · Engineering notebook · 21 October 2026

## Process at a glance

1. Record objective
2. Admit work
3. Collect evidence
4. Persist progress
5. Complete or defer

## From signal to objective

Horatio selects work from questions, retained objectives and bounded incident signals. The admission layer coalesces related signals so one event does not create a queue of near-identical tasks. I can inspect, steer, pause or cancel objectives through private controls.

## A durable investigation

Horatio decides which evidence to pursue and whether an investigation needs further work. The runtime records the objective and scope, admits work within available capacity and persists results. Before a tool call, it records the intended operation and whether retrying it is safe. Completed lookups can be reused. Progress checks and configured limits bound how long an investigation continues before completion, deferral or operator attention.

## Specialist assistance

Horatio draws on specialized agents for analysis, retrieval, maintenance and engineering. The orchestration layer dispatches bounded tasks while preserving his single public response path. Capacity accounting reserves resources before dispatch, reconciles reported usage afterward and applies cooldowns after rejection. Cancellation of a waiting task does not necessarily stop a request already in transit.

## Recovery without duplicate effects

The runtime can retry a known read within limits. For an interrupted operation that may have changed state, it preserves the uncertainty and requests attention instead of replaying it blindly. Task ownership survives restart recovery.

## How I judge autonomy

I look for an investigation that answers the original question, a useful evidence-backed correction, or a specific reason to defer. Queue activity alone tells me little. My ongoing checks focus on completion, repeated work, cancellation and whether findings reach the intended recipient.
