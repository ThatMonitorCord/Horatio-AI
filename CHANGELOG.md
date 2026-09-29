# My release log

I record the changes I shipped and their original release times.

## Horatio AI 1.14.1

Released: 2026-09-28T22:59:12-04:00

### Telemetry discovery

I added telemetry endpoint discovery and coordinated companion response behavior.

## Minecraft Companion 3.5.1

Released: 2026-09-28T22:54:26.672902-04:00

### Companion discovery and integration

I improved query discovery and companion integration, and coordinated response handling across the connected services.

## Horatio AI 1.14.0

Released: 2026-09-28T22:29:09-04:00

### Minecraft telemetry

I added direct Minecraft telemetry and player-statistics tools.

## Minecraft Companion 3.5

Released: 2026-09-28T22:24:29.469938-04:00

### Authenticated player queries

I expanded authenticated player-statistics queries and sampled activity reporting.

## Horatio AI 1.13.2

Released: 2026-09-28T21:07:09-04:00

### Stale-decision invalidation

I prevented stale skip decisions from vetoing new work.

## Horatio AI 1.13.1

Released: 2026-09-28T20:49:29-04:00

### Community and relationship queries

I broadened existing guild questions and relationship responses.

## Horatio AI 1.13.0

Released: 2026-09-28T20:01:56-04:00

### Shared tools for background agents

I exposed the shared answer tool catalog to background agents.

## Horatio AI 1.12.2

Released: 2026-09-28T19:09:34-04:00

### Voice-visit scheduling and retry

I repaired voice-visit scheduling and retry.

## Horatio AI 1.12.1

Released: 2026-09-28T18:48:05-04:00

### Manual voice-visit eligibility

I repaired manual voice-visit eligibility.

## Horatio AI 1.12.0

Released: 2026-09-28T18:29:39-04:00

### Voice visits and intentions

I added scripted voice visits, intention controls and capability-gap tracking.

## Horatio AI 1.11.0

Released: 2026-09-28T16:38:31-04:00

### Web retrieval and tool workshop

I added local web access, a bounded public tool workshop and an operator web workflow.

## Horatio AI 1.10.1

Released: 2026-09-28T00:49:23-04:00

### Objective investigation, evidence and rejection feedback

I improved objective investigation, evidence and rejection feedback.

## Horatio AI 1.10.0

Released: 2026-09-28T00:22:07-04:00

### Controlled engineering and memory consolidation

I retired automatic self-updating/generated-tool installation; add adviser-only catch-up and belief, prediction, intention and relationship consolidation.

## Horatio AI 1.9.4

Released: 2026-09-27T22:48:17-04:00

### Consultant workspace CLI arguments

I repaired consultant workspace CLI arguments.

## Horatio AI 1.9.3

Released: 2026-09-27T22:18:49-04:00

### Unique job leases

I repaired duplicate-job ownership with a unique lease.

## Horatio AI 1.9.2

Released: 2026-09-27T22:06:25-04:00

### Response schema handling

I repaired response schema handling.

## Horatio AI 1.9.1

Released: 2026-09-27T21:09:29-04:00

### Consultant request sizing and progress reporting

I repaired consultant request sizing and progress reporting.

## Horatio AI 1.9.0

Released: 2026-09-27T20:05:11-04:00

### Reviewed update workflow

I added a reviewed build-and-update workflow and permission inbox. I subsequently retired this update path.

## Horatio AI 1.8.1

Released: 2026-09-27T15:01:36-04:00

### Configuration migration/path handling

I repaired configuration migration/path handling.

## Horatio AI 1.8.0

Released: 2026-09-27T14:31:21-04:00

### Private operator chat

I added private operator chat, directives and engineering consultation.

## Horatio AI 1.7.0

Released: 2026-09-27T13:12:04-04:00

### After-action learning

I added post-response adaptive learning, after-action investigations, and dashboard and consultation workflows.

## Horatio AI 1.6.0

Released: 2026-09-27T01:58:14-04:00

### Persistent operator objectives

I added durable private operator objectives with status tracking and cancellation.

## Horatio AI 1.5.1

Released: 2026-09-27T01:22:03.709576-04:00

### Voice preset migration

I applied the new voice preset once and migrate obsolete configuration fields.

## Horatio AI 1.4.0

Released: 2026-09-26T23:34:41-04:00

### Living memory

I added persistent retrieval, relationships, moods, rumors and newest-first learning to the memory system.

## Horatio AI 1.3.5

Released: 2026-09-26T21:36:29-04:00

### Continuous audio playback

I restored the earlier voice base and used one continuous audio player. I shipped this repair after the voice shutdown update.

## Horatio AI 1.3.4

Released: 2026-09-26T20:53:27-04:00

### Voice-filter rollback

I rolled back overly aggressive voice filtering/background behavior.

## Horatio AI 1.3.3

Released: 2026-09-26T20:13:45-04:00

### Wake window, background pausing and voice budgets

I adjusted wake window, background pausing and voice budgets.

## Horatio AI 1.3.2

Released: 2026-09-26T19:40:34-04:00

### Wake-word false-positive reduction

I reduced false wake-word activations.

## Horatio AI 1.3.1

Released: 2026-09-26T19:25:18-04:00

### Ordered speech playback

I serialized speech chunks to preserve playback order.

## Horatio AI 1.3.0

Released: 2026-09-26T16:50:58-04:00

### Natural speech synthesis

I added natural speech synthesis to spoken replies.

## Horatio AI 1.2.6

Released: 2026-09-26T16:17:56-04:00

### Personality/lore controls and voice acknowledgements

I refined personality/lore controls and voice acknowledgements.

## Horatio AI 1.2.5

Released: 2026-09-26T14:15:24-04:00

### Voice configuration handling

I made the separate voice-model settings effective.

## Horatio AI 1.2.4

Released: 2026-09-26T13:42:01-04:00

### Voice shutdown and switching behavior

I recovered voice shutdown and switching behavior.

## Horatio AI 1.2.3

Released: 2026-09-26T02:24:11-04:00

### Streamed sentence playback

I began speech from validated streamed answer sentences.

## Horatio AI 1.2.2

Released: 2026-09-26T01:43:19-04:00

### Active voice priority

I prioritized the active voice conversation over typed and overlapping requests.

## Horatio AI 1.2.1

Released: 2026-09-26T01:28:27-04:00

### Voice filtering and playback

I refined wake filtering, playback queues and voice shutdown.

## Horatio AI 1.2.0

Released: 2026-09-26T00:48:27-04:00

### Discord voice conversations

I added wake words, speaker identity and spoken replies for Discord voice conversations.

## Horatio AI 1.1.2

Released: 2026-09-25T23:31:15-04:00

### Summary formatting repair

I enforced strict summary JSON and added bounded repair of malformed output.

## Horatio AI 1.1.1

Released: 2026-09-25T20:51:02-04:00

### Verified account-link parsing

I parsed verified account-linking embeds correctly.

## Horatio AI 1.1.0

Released: 2026-09-25T20:32:04-04:00

### Profiles and account linking

I expanded profiles and context and added Minecraft chat mirroring and Discord-to-Minecraft account linking.

## Horatio AI 1.0.0

Released: 2026-09-25T18:17:31-04:00

### Standalone Discord application

I shipped a standalone Windows Discord assistant with local inference, conversation history, profiles, retrieval and optional Minecraft telemetry.

## Minecraft Companion 3.4

Released: 2026-09-25T18:07:19.142740-04:00

### Application telemetry integration

I added Minecraft telemetry for integration with the standalone application.

## Minecraft Companion 3.3

Released: 2026-09-24T23:46:32.020575-04:00

### Reference-document retrieval

I added forum and reference-document evidence to the knowledge workflow.

## Minecraft Companion 3.2

Released: 2026-09-24T00:15:11.083951-04:00

### Persistent conversation memory

I added persistent conversation memory.

## Minecraft Companion 3.1

Released: 2026-09-23T23:10:06.929614-04:00

### Operator controls and conversation history

I expanded operator controls and conversation-history handling.

## Minecraft Companion 3.0

Released: 2026-09-23T22:04:22.775634-04:00

### Local inference and Discord integration

I added local inference, Discord connectivity, personality controls and retrieval.

## Minecraft Companion 2.3

Released: 2026-09-12T23:02:17.948799-04:00

### Webhook integration

I added webhook integration.

## Minecraft Companion 2.2

Released: 2026-09-12T22:49:40.890091-04:00

### Response cooldowns

I added cooldowns to control repeated helper responses.

## Minecraft Companion 2.1

Released: 2026-09-12T22:42:32.158965-04:00

### Server compatibility and chat filtering

I improved server compatibility, chat filtering and mute behavior.
