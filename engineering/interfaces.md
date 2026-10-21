# Conversation, media & Minecraft

[Hub](../README.md) · My engineering notebook · 21 October 2026

## Discord text

The Discord integration checks message eligibility and conversation scope, ingests eligible history and retrieves context. Horatio interprets the request, uses tools when needed and composes a response through the public output path. Horatio can be opinionated about coffee; a factual report still needs support.

## Voice

The voice pipeline connects received audio and speech recognition to Horatio’s reasoning, then synthesis and queued playback. It supports wake-word handling and voice-specific response limits, and serializes speech chunks to preserve their order. I measure transcription and audible delivery separately; a successful transcript is only one stage.

## Images and video

The media pipeline bounds attachment size and decoded dimensions before Horatio analyzes the content. Video input uses sampled frames, without continuous perception of every moment or guaranteed understanding of the soundtrack. The system records content analysis separately from each attachment occurrence, so a cached analysis does not erase where the media appeared.

## Context accounting

The context-budget system excludes encoded image transport from text accounting and estimates visual cost separately. It reserves output space and safety headroom before admitting input. This prevents a large encoded image string from consuming the conversation allowance. I have local image and frame checks; real Discord attachment receipt-to-reply validation remains outstanding.

## Server evidence and gameplay

Horatio investigates server events using timestamped telemetry, player history, server-health observations and bounded historical queries. Evidence carries freshness and coverage information: an empty query during incomplete ingestion proves little. Access controls restrict private evidence, with reduced summaries for public replies. In separate operator-started gameplay experiments, Horatio chooses actions within the session’s controls and checks observed state after navigation, crafting or other actions.
