# Tools & the workshop

[Hub](../README.md) · My engineering notebook · 21 October 2026

## My process at a glance

1. Identify gap
2. Declare contract
3. Build and test
4. Review activation
5. Verify task outcome

## Discover before building

I maintain a shared catalog of tools and select capabilities for the task at hand. An investigation first checks what is already available. I use the workshop when a concrete missing capability prevents progress, rather than treating every difficult question as a reason to generate another extension.

## A capability lifecycle

I move from a defined gap to an extension proposal, declared inputs and allowed broker tools, bounded tests, and an activation decision. Only active capabilities become callable tools. I preserve valid results when research resumes and use revision checks to avoid replacing a newer management decision with stale work.

## Authority stays with the host

I establish request identity and evidence scope in the host. Tool execution goes through the broker; a generated instruction cannot expand its own permissions. I distinguish an empty result, a denied request and a transport failure because each requires a different next step.

## Execution limits

I run executable extensions in child processes with syntax restrictions and an allowed tool contract. I do not treat those checks as operating-system isolation or promise that arbitrary untrusted programs are safe to run. I keep activation and production changes under operator control.

## Completion needs evidence

I check the result of an action before reporting success. A plan, submitted command or passing extension test does not establish that the original task finished. I retired an earlier automatic self-update path; workshop development does not imply unrestricted production self-modification.
