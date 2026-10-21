# Tools & the workshop

[Hub](../README.md) · Engineering notebook · 21 October 2026

## Process at a glance

1. Identify gap
2. Declare contract
3. Build and test
4. Review activation
5. Verify task outcome

## Discover before building

I maintain the tool catalog and execution framework. Horatio selects capabilities for the task at hand and checks what is already available. When an investigation exposes a concrete capability gap, he can request workshop work to address it.

## A capability lifecycle

The workshop turns a defined gap into an extension proposal with declared inputs, allowed broker tools and bounded tests. Activation remains subject to operator controls. Only active capabilities become callable tools. The runtime preserves valid results when research resumes and uses revision checks to avoid replacing a newer management decision with stale work.

## Authority stays with the host

The host establishes request identity and evidence scope. Tool execution goes through the broker; a generated instruction cannot expand its own permissions. Horatio receives distinct outcomes for an empty result, a denied request and a transport failure so he can choose an appropriate next step.

## Execution limits

Executable extensions run in child processes with syntax restrictions and an allowed tool contract. The execution contract combines child processes, syntax checks and broker permissions. I keep activation and production changes under operator control.

## Completion needs evidence

Horatio is expected to check an action’s result before reporting success; I verify that behavior through workflow tests. Action outcomes are checked against the resulting state. I retired an earlier automatic self-update path.
