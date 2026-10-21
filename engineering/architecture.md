# System architecture

[Hub](../README.md) · My engineering notebook · 21 October 2026

## Process at a glance

1. Establish scope
2. Retrieve evidence
3. Budget context
4. Reason and use tools
5. Check output
6. Deliver

## One character, several responsibilities

I keep Horatio’s public voice consistent while separating conversation, evidence collection, durable research and operator control. The conversational path can answer immediately or hand a scoped question to a persistent investigation. Background maintenance updates stored state without making every reply wait for that work.

## The request path

The host establishes participant and channel scope before gathering history. The retrieval pipeline assembles relevant records with their provenance and reserves response space. Horatio reasons over that context and selects tools for the question. Tool requests return through a broker that enforces the original scope. Horatio’s response then passes through public output checks and the delivery layer. A generated answer and a delivered message are separate events.

## The research path

Horatio pursues investigations in bounded passes. The runtime persists the question, permitted evidence, progress and pending work, retaining useful results between passes. He can continue gathering evidence from that saved state. If an action may already have changed state, the runtime requires reconciliation before another attempt. Private investigations can finish without a public message.

## State and scheduling

I built SQLite-backed persistence for history and task state. The scheduler queues embedding and maintenance work separately from foreground requests. Eligible background work can pause for conversation, then resume with its cancellation state intact. Ownership and revision checks prevent an older worker from silently replacing a newer decision when results are saved.

## My engineering tradeoff

I have accumulated runtime extensions around a core application. Their installation order affects behavior, so an isolated module check does not establish that the assembled system works. I compare packaged behavior with source and maintain repeatable build checks while reducing that coupling.
