# Horatio AI

<img src="assets/horatio.webp" alt="Horatio with yellow and turquoise goggles" width="420">

I’m the sole developer of Horatio, an autonomous AI companion for The Jazz Cafe. I build the systems behind his persistent memory, independent research, tool use and conversations across Discord and Minecraft. I want him to be a recognizable member of the community, with enough continuity to remember people and enough initiative to follow a question beyond the first answer.

**[Meet Horatio in The Jazz Cafe](https://discord.com/invite/thejazzcafe)** — I invite you to join the server and ping **Horatio** to talk to him.

[Project website](https://thatmonitorcord.github.io/Horatio-AI/) · [Release notes](CHANGELOG.md) · [Roadmap](ROADMAP.md) · [Development journal](UPDATES.md) · [Discussions](https://github.com/ThatMonitorCord/Horatio-AI/discussions)

## Engineering notebook

Six engineering guides explain Horatio’s architecture, memory, research and tool execution.

- [System architecture](engineering/architecture.md) — How Horatio turns a conversation into useful work.
- [Memory & continuity](engineering/memory.md) — What Horatio remembers, infers and revisits.
- [Autonomy & research](engineering/autonomy.md) — Initiative with a stopping point.
- [Tools & the workshop](engineering/workshop.md) — How I add capability without handing over the keys.
- [Conversation, media & Minecraft](engineering/interfaces.md) — One companion across very different inputs.
- [Development & operations](engineering/verification.md) — Builds, releases and the work ahead.

## Where I started

I started Horatio in 2023 as an advanced algorithm and a collection of Minecraft plugins. I built canned answers for common questions, server-economy tax collection, automatic reboots triggered by server health, mob-spawner stacking, anti-cheat, and Minecraft-chat mirroring into Discord. Those practical server problems established the direction I still follow: remember the context, notice what needs attention, and do useful work for the community.

## What I have built

### Persistent memory

I built the persistence and retrieval systems that let Horatio carry context between conversations, restarts and investigations. He draws on stored history, working memory, relationships, intentions and research outcomes when deciding how to respond or what to pursue.

The retrieval pipeline assembles relevant records for each request, retaining source context and corrections. Horatio forms hypotheses, revisits assessments and updates beliefs, predictions and relationship state through bounded maintenance tasks. SQLite-backed stores preserve durable state, while separate maintenance scheduling keeps memory work from unnecessarily delaying a reply.

### Autonomous work selection

I built the objective and work-selection systems. Within their constraints, Horatio chooses investigations to pursue between conversations. I can steer, pause or cancel that work through private operator controls.

The scheduler separates admission, planning, execution and outcome recording. Durable queues, task ownership, cancellation checks and commit guards prevent overlapping workers from saving competing results. Scheduling rules prioritize public conversation over eligible background maintenance, limit repeated work and record investigation outcomes. I assess autonomous work by its recorded outcome and whether it advances the original objective.

### Research and subagents

Horatio coordinates specialist work through an orchestration layer I built. Task roles cover retrieval, analysis, memory maintenance, investigation and engineering, while he keeps a consistent public voice.

Delegated tasks carry an explicit purpose, output budget and permitted evidence scope. Horatio uses research results to develop follow-up hypotheses and revisit assessments when new evidence contradicts them. Capacity accounting, cooldowns, retry limits and backpressure keep that work within available resources. Result ownership is preserved when a task restarts or is reassigned.

### Tools and controlled execution

I maintain a shared tool catalog for conversation and background research, with purpose-based discovery and multi-step execution. I also built a workshop for developing capabilities when an investigation exposes a genuine gap.

Horatio plans tool use and interprets results; the runtime handles native execution, preserves valid results across resumed investigations and distinguishes empty results from transport or permission failures. Execution controls bound retrieval, retain approval decisions and require evidence for completed-action claims. I retired an earlier automatic self-update path; I keep generated extensions behind execution and approval controls.

### Discord, voice and media

Horatio draws on the same persistent context in text and voice conversations. I built wake-word handling, speaker identification, queued speech playback, streamed spoken replies and scheduled voice visits.

The voice pipeline prioritizes active conversation and serializes speech chunks to preserve playback order. Horatio can analyze images and sampled video frames; separate visual and text allowances prevent encoded image transport from consuming the conversation budget.

### Minecraft and server evidence

I built integrations for player statistics, identity history, server-health records and historical activity. Horatio uses that evidence to answer questions and investigate events across their recorded history.

Scoped tools expose UUID and name history, first joins, player activity, historical moderation evidence and server tick performance. The ingestion pipeline collects bounded incident signals with durable cursors and coalesces related events before research admission. Access checks enforce read permissions on neighboring conversation context, while public output controls restrict private evidence. I have also shipped operator-started gameplay experiments covering observation, navigation, crafting, construction planning and recovery; I am currently prioritizing research reliability over autonomous gameplay.

### Observability and operations

I built an operator dashboard for objectives, activity, research state, approvals and the development record. I use Mindspace to inspect working memory and reflections as part of the same operational picture.

The dashboard distinguishes queued, running, cancelled and paused work and exposes effective capabilities and build identity. The runtime budgets ordinary requests for a 32K context window and admits suitable research tasks to a selective 64K path. It applies bounded recovery for truncated output and separates input size, output reservations and visual allowances. I maintain release checks and rollback material, and avoid copying the same large data stores into every update backup.

## How I judge progress

I look for recalled context that improves an answer, investigations that finish or reach a defensible stopping point, corrections that change later decisions, and tools that complete the work they were created for. I keep Horatio’s humor and occasional abrasiveness, while requiring factual reports and completed-action claims to be grounded in evidence.

I develop and operate the project myself. I publish technical release notes here; I keep the application source, packaged builds, private conversations and operational data private. My current application release is **1.47.2**.

## Feedback

I welcome specific examples of what worked, what failed and what you expected. I use [GitHub Discussions](https://github.com/ThatMonitorCord/Horatio-AI/discussions) for project feedback and [Issues](https://github.com/ThatMonitorCord/Horatio-AI/issues) for public-facing problems.
