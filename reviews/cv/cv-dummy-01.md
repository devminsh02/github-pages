---
title: Dummy CV Review 01 — Open-Vocabulary Detection for Embodied Perception
authors: A. Vision, B. System
venue: Archive Notes
year: 2026
date: 2026-04-04
section: cv
summary: Dummy markdown entry for testing the CV archive list and the shared review viewer.
tags:
  - Dummy
  - CV
  - Detection
---

# Core claim

This dummy review tests whether a **computer vision** entry can appear in the CV list and open inside the same article viewer.

## Why it is interesting

The paper claims that open-vocabulary detection can reduce manual relabeling when a robot must adapt to new objects.

## What I would check first

- Whether the benchmark has real long-tail categories.
- Whether latency is acceptable for embodied use.
- Whether the gain survives camera changes.

## Skeptical note

> Better labels are useful, but the result may still depend more on data curation than on the detection architecture itself.

## Practical takeaway

If I reuse the idea, I would isolate the detector from the downstream policy and validate both separately.
