# Horatio AI

<img src="assets/horatio.webp" alt="Horatio with yellow and turquoise goggles" width="420">

I’m the sole developer of Horatio, an autonomous AI companion for The Jazz Cafe. I build the systems behind his persistent memory, independent research, tool use and conversations across Discord and Minecraft. I want him to be a recognizable member of the community, with enough continuity to remember people and enough initiative to follow a question beyond the first answer.

**[Meet Horatio in The Jazz Cafe](https://discord.com/invite/thejazzcafe)** — I invite you to join the server and ping **Horatio** to talk to him.

[Project website](https://thatmonitorcord.github.io/Horatio-AI/) · [Release notes](CHANGELOG.md) · [Roadmap](ROADMAP.md) · [Development journal](UPDATES.md) · [Discussions](https://github.com/ThatMonitorCord/Horatio-AI/discussions)

## Where I started

I started Horatio in 2023 as an advanced algorithm and a collection of Minecraft plugins. I built canned answers for common questions, server-economy tax collection, automatic reboots triggered by server health, mob-spawner stacking, anti-cheat, and Minecraft-chat mirroring into Discord. Those practical server problems established the direction I still follow: remember the context, notice what needs attention, and do useful work for the community.

## What I have built

### Persistent memory

I built Horatio to carry context between conversations, restarts and investigations. I persist conversational history, working memory, relationships, intentions and research outcomes instead of relying on a single prompt to remember everything.

My retrieval pipeline assembles relevant records for each request. I keep source context alongside observations, distinguish tentative hypotheses from established findings, and retain corrections so later work can revisit an earlier assessment. I consolidate beliefs, predictions and relationship state through bounded maintenance tasks. I use SQLite-backed stores for durable state and separate retrieval from the live conversation so memory work does not unnecessarily delay a reply.

### Autonomous work selection

I give Horatio persistent objectives and a work-selection system that can choose useful investigations between conversations. I can steer, pause or cancel that work through private operator controls.

My scheduler separates admission, planning, execution and outcome recording. I use durable queues, task ownership, cancellation checks and commit guards to prevent overlapping workers from saving competing results. I prioritize public conversation over eligible background maintenance, limit repeated work, and record why an investigation completed, failed or was deferred. I assess autonomous work by its recorded outcome and whether it advances the original objective.

### Research and subagents

I coordinate a network of specialist subagents through Horatio’s local orchestration layer. My task roles cover retrieval, analysis, memory maintenance, investigation and engineering, while Horatio keeps a consistent public voice.

Each task I delegate has an explicit purpose, an output budget and a permitted evidence scope. I connect completed research to follow-up hypotheses and revisit assessments when new evidence contradicts them. I use capacity accounting, cooldowns, retry limits and backpressure to keep delegated work within available resources. I preserve result ownership when a task is restarted or reassigned; I do not treat that as transferring unfinished reasoning between agents.

### Tools and controlled execution

I maintain a shared tool catalog for conversation and background research, with purpose-based discovery and multi-step execution. I also built a workshop for developing capabilities when an investigation exposes a genuine gap.

I keep planning separate from native execution, preserve valid tool results across resumed investigations, and distinguish an empty result from a transport or permission failure. I bound retrieval and execution, retain approval decisions, and require tool output to be checked before Horatio claims an action succeeded. I retired an earlier automatic self-update path; I keep generated extensions behind execution and approval controls.

### Discord, voice and media

I connect text and voice conversations to the same persistent context. I built wake-word handling, speaker identification, queued speech playback, streamed spoken replies and scheduled voice visits.

My voice pipeline prioritizes an active conversation over competing requests and serializes speech chunks to preserve playback order. I support image and video-frame input with separate visual and text allowances so encoded image transport cannot consume the conversation budget. I have verified local image and frame recognition; I still need to complete the real Discord attachment path from receipt to reply.

### Minecraft and server evidence

I connect Horatio to player statistics, identity history, server-health records and historical activity. I use the retained evidence to answer specific questions and investigate events across their recorded history.

I expose scoped queries for UUID and name history, first joins, player activity, historical moderation evidence and server tick performance. I ingest bounded incident signals with durable cursors and coalesce related events before admitting research. I enforce read permissions on neighboring conversation context and keep private evidence out of public replies. I have also shipped operator-started gameplay experiments covering observation, navigation, crafting, construction planning and recovery; I am currently prioritizing research reliability over autonomous gameplay.

### Observability and operations

I built an operator dashboard for objectives, activity, research state, approvals and the development record. I use Mindspace to inspect working memory and reflections as part of the same operational picture.

I distinguish queued work from running work, expose effective capabilities and build identity, and keep cancelled or paused work separate from errors. I budget ordinary requests for a 32K context window and admit suitable research tasks to a selective 64K path. I use bounded recovery for truncated output and separate input size, output reservations and visual allowances. I maintain release checks and rollback material, and avoid copying the same large data stores into every update backup.

## How I judge progress

I look for recalled context that improves an answer, investigations that finish or reach a defensible stopping point, corrections that change later decisions, and tools that complete the work they were created for. I keep Horatio’s humor and occasional abrasiveness, while requiring factual reports and completed-action claims to be grounded in evidence.

I develop and operate the project myself. I publish technical release notes here; I keep the application source, packaged builds, private conversations and operational data private. My current application release is **1.47.2**. I track unfinished validation in the release log and roadmap.

## Feedback

I welcome specific examples of what worked, what failed and what you expected. I use [GitHub Discussions](https://github.com/ThatMonitorCord/Horatio-AI/discussions) for project feedback and [Issues](https://github.com/ThatMonitorCord/Horatio-AI/issues) for public-facing problems. I do not need credentials, private conversations or unredacted logs in a public report.
