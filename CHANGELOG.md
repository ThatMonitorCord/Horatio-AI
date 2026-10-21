# My release log

I record application and companion releases separately. I use the original package or deployment dates for these entries.

## Horatio AI 1.47.2 — 2026-10-20

### Image and video-frame context budgeting

I fixed image and video-frame requests exhausting the context budget. I separated visual input from conversation text to preserve room for reasoning and the response.

I passed packaged checks and local image/frame recognition tests. I still need to verify end-to-end Discord attachment delivery.

## Horatio AI 1.47.1 — 2026-10-20

### Provider quota accounting repair

I added provider-specific allowances, reconciled rejected or uncertain usage, improved throttle handling, and distinguished paused reflection work from errors.

## Horatio AI 1.47.0 — 2026-10-20

### Server evidence integration

I connected bounded incident signals and scoped evidence retrieval to the main research workflow. I added UUID, name-history and first-join analytics to the dashboard, and moved independent investigation into the main application.

## Horatio AI 1.46.1 — 2026-10-19

### Working-memory retry repair

I added one bounded retry for truncated working-memory output, with a larger output reservation and fewer source records. I preserved prior state and cancellation behavior.

## Horatio AI 1.46.0 — 2026-10-19

### Private log research

I added host-issued internal read grants and persistent private research tasks. I projected bounded non-identifying observations into public replies and filtered private plugin names.

## Horatio AI 1.45.2 — 2026-10-19

### Research admission and access refinement

I refined idle-capacity research admission and archive coverage/access handling. I diagnosed missing records, connectors and authorization before starting engineering work.

## Horatio AI 1.45.0 — 2026-10-19

### Selective 64K research and workshop follow-through

I added selective 64K context for qualifying research while retaining ordinary 32K defaults. I kept more useful evidence and made workshop-built tools available on subsequent investigation passes. I repaired planner schemas and repetitive-source consolidation.

## Horatio AI 1.44.1 — 2026-10-19

### Working-memory context repair

I fitted persistent working-memory requests to the actual context budget, balanced source kinds, and allowed a bounded versioned retry of previously deferred work.

## Horatio AI 1.43.0 — 2026-10-19

### System awareness and tool discovery

I added scoped operational briefings, read-only status and purpose-based tool discovery. I cached provider-capacity observations and improved role-specific output budgets and actual-usage settlement.

## Horatio AI 1.42.0 — 2026-10-19

### Vision fallback and evidence access

I added a fallback route for visual analysis, retaining cached results and provenance. I extended queued attachment and web-evidence paths, improved historical-join queries, and repaired response parsing, cooldowns, request sizing and workshop validation.

## Horatio AI 1.41.1 — 2026-10-19

### Mindspace startup repair

I repaired startup closure, relationship and mood lookups in the Mindspace release.

## Horatio AI 1.40.2 — 2026-10-18

### Conversation and follow-up refinements

I refined code-example restrictions, follow-up cooldowns, capability/action wording, deferred-curiosity retries and personality instruction handling. I synchronized the bundled source.

## Horatio AI 1.40.1 — 2026-10-18

### Maintenance routing repair

I repaired maintenance fallback routing, separated byte sizing from token sizing, and clarified rejected-request errors.

## Horatio AI 1.40.0 — 2026-10-18

### Connected outcomes and conversational retrieval

I added permission-checked parent and neighboring conversation context. I connected completed research to follow-up hypotheses, flagged assessments affected by corrections, activated missing work-selection/outcome defaults, and exposed effective features and build identity.

## Horatio AI 1.36.5 — 2026-10-14

### Tool concurrency, delivery and numeric/evidence handling

I stabilized tool concurrency, delivery and numeric/evidence handling.

## Horatio AI 1.36.4 — 2026-10-13

### Question-grounded follow-ups

I grounded follow-ups in the original question.

## Horatio AI 1.36.3 — 2026-10-13

### Membership/permission handling

I repaired membership/permission handling.

## Horatio AI 1.36.2 — 2026-10-13

### Resumable investigation execution

I reused saved tool calls and separated planning/native execution to finish resumed investigations.

## Horatio AI 1.35.3 — 2026-10-13

### Tool-result retention

I preserved valid tool results and distinguished unknown players from transport failures.

## Horatio AI 1.35.2 — 2026-10-13

### Operator-chat restart recovery

I repaired Operator Chat recovery across application restart.

## Horatio AI 1.35.1 — 2026-10-13

### Account linking and objective targeting

I repaired duplicate account links, objective targeting and research routing, and reduced mistaken refusals.

## Horatio AI 1.35.0 — 2026-10-12

### Extension workshop and approvals

I added an executable-extension workshop interface, archived operator chats and persistent approval controls.

## Horatio AI 1.34.0 — 2026-10-11

### Persistent operator research

I added persistent operator research and chat, task steering, approvals and controlled transfer of server evidence.

## Horatio AI 1.33.1 — 2026-10-09

### Prestige-suffix parsing and gameplay income planning

I repaired prestige-suffix parsing and gameplay income planning.

## Horatio AI 1.33.0 — 2026-10-09

### Crafting and inventory goals

I added recipe-book crafting and inventory goal actions.

## Horatio AI 1.32.3 — 2026-10-09

### Command-feedback filtering

I filtered unrelated chat from command-feedback records.

## Horatio AI 1.32.2 — 2026-10-09

### Gameplay planning recovery

I changed failed gameplay planning to pause or retry instead of silently switching to another execution path.

## Horatio AI 1.32.1 — 2026-10-09

### Combat, death recovery and failed gameplay-tool handling

I repaired combat, death recovery and failed gameplay-tool handling.

## Horatio AI 1.32.0 — 2026-10-09

### Bounded gameplay delegation

I separated gameplay planning from execution and added bounded delegation and menu tooltips.

## Horatio AI 1.31.2 — 2026-10-09

### Construction checks for doors/beds, sleeping and sign reading

I expanded construction checks for doors/beds, sleeping and sign reading.

## Horatio AI 1.31.1 — 2026-10-09

### Schema refresh and pending-action state

I refreshed stale schemas and distinguished pending actions from blocked gameplay.

## Horatio AI 1.31.0 — 2026-10-09

### Construction planning and verification

I added generated schematics, material bills and verification of navigation-assisted construction.

## Horatio AI 1.30.5 — 2026-10-08

### Reconnect recovery and book reading within existing gameplay

I improved reconnect recovery and book reading within existing gameplay.

## Horatio AI 1.30.4 — 2026-10-08

### Inventory, navigation and command completion

I repaired SellGUI/navigation, command completion and requested-block equipment.

## Horatio AI 1.30.3 — 2026-10-08

### Game feedback and claim context

I improved game-interface and command feedback and added claim context. I followed this with a separate bridge-startup repair.

## Horatio AI 1.30.2 — 2026-10-08

### Game observation and command feedback

I expanded existing game observation/control with bossbars and command completion.

## Horatio AI 1.30.1 — 2026-10-08

### Client-log selection, rank/name parsing and suppressed game replies

I repaired client-log selection, rank/name parsing and suppressed game replies.

## Horatio AI 1.30.0 — 2026-10-08

### Gameplay memory

I persisted observed gameplay and made it available to in-game conversation.

## Horatio AI 1.29.0 — 2026-10-08

### Gameplay recovery and economy tools

I connected gameplay planning to death recovery, economy actions and menu control.

## Horatio AI 1.28.0 — 2026-10-08

### Durable gameplay plans

I added persistent gameplay plans and operator-started survival objectives.

## Horatio AI 1.27.1 — 2026-10-08

### Server-aware gameplay planning

I used existing server knowledge in game plans and quiet join behavior.

## Horatio AI 1.27.0 — 2026-10-08

### Structured game-control skills

I added structured client-bridge skills and background navigation actions.

## Horatio AI 1.26.1 — 2026-10-07

### Minecraft account-name recognition

I recognized the configured Minecraft account name in chat addressing.

## Horatio AI 1.26.0 — 2026-10-07

### Operator-started gameplay

I added screenshot-based Minecraft control, in-game arrival handling and chat integration for operator-started sessions.

## Horatio AI 1.25.1 — 2026-10-07

### Tool routing and cache persistence

I repaired tool routing, workshop authentication and advice delivery, and vector-cache persistence. I restored the previous inference configuration.

## Horatio AI 1.25.0 — 2026-10-07

### Background engineering consultation

I integrated background engineering advice and coordinated a separate inference-configuration change.

## Horatio AI 1.24.2 — 2026-10-06

### Bounded HTTPS retrieval

I expanded the new extension runner's bounded public HTTPS retrieval.

## Horatio AI 1.23.1 — 2026-10-06

### Single-instance activation and voice packaging

I allowed the enable command through the single-instance guard, and repaired voice packaging.

## Horatio AI 1.23.0 — 2026-10-06

### Player-activity history

I added access to 90-day player-activity evidence.

## Horatio AI 1.22.1 — 2026-10-06

### Question-specific tool routing

I improved question-specific tool routing and existing warp-tool use.

## Horatio AI 1.22.0 — 2026-10-06

### Multi-round evidence queries

I added multiple tool rounds, multi-player statistics and UUID fallback.

## Horatio AI 1.21.1 — 2026-10-06

### Conversational repetition and continuity

I repaired conversational repetition and continuity.

## Horatio AI 1.21.0 — 2026-10-05

### Server-performance history

I persisted server tick-performance history and added graphs with improved dashboard readability.

## Horatio AI 1.20.1 — 2026-10-05

### Embedding queue accounting

I excluded inactive summary chunks from pending-embedding counts.

## Horatio AI 1.20.0 — 2026-10-05

### Historical moderation research

I added background profiling of notable bans and access to historical moderation evidence.

## Horatio AI 1.19.0 — 2026-10-05

### Player moderation evidence

I added named-player moderation-evidence queries through the evidence service.

## Horatio AI 1.18.0 — 2026-10-05

### Operator dashboard

I rebuilt the dashboard around activity graphs, agent state and persistent status and navigation.

## Horatio AI 1.17.0 — 2026-10-05

### Work queues and development history

I separated pending work from development history, and archived reviewed work and exposed work queues/guidance.

## Horatio AI 1.16.3 — 2026-10-05

### Dashboard request timeouts

I repaired dashboard request timeouts.

## Horatio AI 1.16.2 — 2026-10-04

### Evidence-service status display

I improved the evidence service overview/status presentation.

## Horatio AI 1.16.1 — 2026-10-04

### Administration-report integration

I expanded the server-evidence administration reports.

## Horatio AI 1.16.0 — 2026-10-02

### Server-evidence connection

I connected administration, player-activity and location-evidence tools to the server-evidence service.

## Horatio AI 1.15.0 — 2026-10-02

### Administration metrics and investigations

I added server-administration metrics and deeper private operator investigation and planning.

## Horatio AI 1.14.9 — 2026-09-29

### Dynamic personality responses

I generated rants dynamically rather than repeating canned text.

## Horatio AI 1.14.8 — 2026-09-29

### Repeated probing and personalized rant behavior

I refined repeated probing and personalized rant behavior.

## Horatio AI 1.14.7 — 2026-09-29

### Conversational continuity, Bedrock roster handling and wake words

I repaired conversational continuity, Bedrock roster handling and wake words.

## Horatio AI 1.14.6 — 2026-09-29

### Follow-up context and tool reuse

I limited same-user follow-up context, enforced writing style and checked existing tools before proposing duplicates.

## Horatio AI 1.14.5 — 2026-09-29

### Responsive voice retrieval

I avoided synchronous search-index refreshes during voice replies, and restored audible acknowledgements.

## Horatio AI 1.14.4 — 2026-09-29

### Alternate-account privacy handling

I repaired alternate-account privacy handling.

## Horatio AI 1.14.3 — 2026-09-29

### Public-output privacy

I prevented internal output from leaking into public replies.

## Minecraft Companion 3.5.1 — 2026-09-28

### Companion discovery and integration

I improved query discovery and companion integration, and coordinated response handling across the connected services.

## Minecraft Companion 3.5 — 2026-09-28

### Authenticated player queries

I expanded authenticated player-statistics queries and sampled activity reporting.

## Horatio AI 1.14.2 — 2026-09-28

### Public-web result parsing

I repaired public-web result parsing.

## Horatio AI 1.14.1 — 2026-09-28

### Telemetry discovery

I added telemetry endpoint discovery and coordinated companion response behavior.

## Horatio AI 1.14.0 — 2026-09-28

### Minecraft telemetry

I added direct Minecraft telemetry and player-statistics tools.

## Horatio AI 1.13.2 — 2026-09-28

### Stale-decision invalidation

I prevented stale skip decisions from vetoing new work.

## Horatio AI 1.13.1 — 2026-09-28

### Community and relationship queries

I broadened existing guild questions and relationship responses.

## Horatio AI 1.13.0 — 2026-09-28

### Shared tools for background agents

I exposed the shared answer tool catalog to background agents.

## Horatio AI 1.12.2 — 2026-09-28

### Voice-visit scheduling and retry

I repaired voice-visit scheduling and retry.

## Horatio AI 1.12.1 — 2026-09-28

### Manual voice-visit eligibility

I repaired manual voice-visit eligibility.

## Horatio AI 1.12.0 — 2026-09-28

### Voice visits and intentions

I added scripted voice visits, intention controls and capability-gap tracking.

## Horatio AI 1.11.0 — 2026-09-28

### Web retrieval and tool workshop

I added local web access, a bounded public tool workshop and an operator web workflow.

## Horatio AI 1.10.1 — 2026-09-28

### Objective investigation, evidence and rejection feedback

I improved objective investigation, evidence and rejection feedback.

## Horatio AI 1.10.0 — 2026-09-28

### Controlled engineering and memory consolidation

I retired automatic self-updating/generated-tool installation, and added adviser-only catch-up and belief, prediction, intention and relationship consolidation.

## Horatio AI 1.9.4 — 2026-09-27

### Consultant workspace CLI arguments

I repaired consultant workspace CLI arguments.

## Horatio AI 1.9.3 — 2026-09-27

### Unique job leases

I repaired duplicate-job ownership with a unique lease.

## Horatio AI 1.9.2 — 2026-09-27

### Response schema handling

I repaired response schema handling.

## Horatio AI 1.9.1 — 2026-09-27

### Consultant request sizing and progress reporting

I repaired consultant request sizing and progress reporting.

## Horatio AI 1.9.0 — 2026-09-27

### Reviewed update workflow

I added a reviewed build-and-update workflow and permission inbox. I subsequently retired this update path.

## Horatio AI 1.8.1 — 2026-09-27

### Configuration migration/path handling

I repaired configuration migration/path handling.

## Horatio AI 1.8.0 — 2026-09-27

### Private operator chat

I added private operator chat, directives and engineering consultation.

## Horatio AI 1.7.0 — 2026-09-27

### After-action learning

I added post-response adaptive learning, after-action investigations, and dashboard and consultation workflows.

## Horatio AI 1.6.0 — 2026-09-27

### Persistent operator objectives

I added durable private operator objectives with status tracking and cancellation.

## Horatio AI 1.5.1 — 2026-09-27

### Voice preset migration

I applied the new voice preset once and migrated obsolete configuration fields.

## Horatio AI 1.4.0 — 2026-09-26

### Living memory

I added persistent retrieval, relationships, moods, rumors and newest-first learning to the memory system.

## Horatio AI 1.3.5 — 2026-09-26

### Continuous audio playback

I restored the earlier voice base and used one continuous audio player. I shipped this repair after the voice shutdown update.

## Horatio AI 1.3.4 — 2026-09-26

### Voice-filter rollback

I rolled back overly aggressive voice filtering/background behavior.

## Horatio AI 1.3.3 — 2026-09-26

### Wake window, background pausing and voice budgets

I adjusted wake window, background pausing and voice budgets.

## Horatio AI 1.3.2 — 2026-09-26

### Wake-word false-positive reduction

I reduced false wake-word activations.

## Horatio AI 1.3.1 — 2026-09-26

### Ordered speech playback

I serialized speech chunks to preserve playback order.

## Horatio AI 1.3.0 — 2026-09-26

### Natural speech synthesis

I added natural speech synthesis to spoken replies.

## Horatio AI 1.2.6 — 2026-09-26

### Personality/lore controls and voice acknowledgements

I refined personality/lore controls and voice acknowledgements.

## Horatio AI 1.2.5 — 2026-09-26

### Voice configuration handling

I made the separate voice-model settings effective.

## Horatio AI 1.2.4 — 2026-09-26

### Voice shutdown and switching behavior

I recovered voice shutdown and switching behavior.

## Horatio AI 1.2.3 — 2026-09-26

### Streamed sentence playback

I began speech from validated streamed answer sentences.

## Horatio AI 1.2.2 — 2026-09-26

### Active voice priority

I prioritized the active voice conversation over typed and overlapping requests.

## Horatio AI 1.2.1 — 2026-09-26

### Voice filtering and playback

I refined wake filtering, playback queues and voice shutdown.

## Horatio AI 1.2.0 — 2026-09-26

### Discord voice conversations

I added wake words, speaker identity and spoken replies for Discord voice conversations.

## Minecraft Companion 3.4 — 2026-09-25

### Application telemetry integration

I added Minecraft telemetry for integration with the standalone application.

## Horatio AI 1.1.2 — 2026-09-25

### Summary formatting repair

I enforced strict summary JSON and added bounded repair of malformed output.

## Horatio AI 1.1.1 — 2026-09-25

### Verified account-link parsing

I parsed verified account-linking embeds correctly.

## Horatio AI 1.1.0 — 2026-09-25

### Profiles and account linking

I expanded profiles and context and added Minecraft chat mirroring and Discord-to-Minecraft account linking.

## Horatio AI 1.0.0 — 2026-09-25

### Standalone Discord application

I shipped a standalone Windows Discord assistant with local inference, conversation history, profiles, retrieval and optional Minecraft telemetry.

## Minecraft Companion 3.3 — 2026-09-24

### Reference-document retrieval

I added forum and reference-document evidence to the knowledge workflow.

## Minecraft Companion 3.2 — 2026-09-24

### Persistent conversation memory

I added persistent conversation memory.

## Minecraft Companion 3.1 — 2026-09-23

### Operator controls and conversation history

I expanded operator controls and conversation-history handling.

## Minecraft Companion 3.0 — 2026-09-23

### Local inference and Discord integration

I added local inference, Discord connectivity, personality controls and retrieval.

## Minecraft Companion 2.3 — 2026-09-12

### Webhook integration

I added webhook integration.

## Minecraft Companion 2.2 — 2026-09-12

### Response cooldowns

I added cooldowns to control repeated helper responses.

## Minecraft Companion 2.1 — 2026-09-12

### Server compatibility and chat filtering

I improved server compatibility, chat filtering and mute behavior.

