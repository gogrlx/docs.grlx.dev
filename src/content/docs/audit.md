---
title: Audit Logging
description: Track all farmer actions with per-user attribution
---

grlx records every significant action performed through the farmer in an append-only audit log. Each entry captures who did what, when, on which target, and whether it succeeded.

## What Gets Logged

- Recipe executions (`cook`)
- Command dispatch (`cmd.run`)
- SSH sessions
- Key accept and reject operations
- Configuration changes

Each entry includes:

| Field     | Description                            |
| --------- | -------------------------------------- |
| Timestamp | When the action occurred               |
| Username  | The authenticated user who acted       |
| Action    | The type of operation                  |
| Target    | The sprout or cohort affected          |
| Result    | Success or failure with detail         |

## Storage

Audit logs are stored as JSONL (one JSON object per line) in the farmer's data directory, partitioned by date. This makes them easy to process with standard tools like `jq`, `grep`, or any log aggregation system.

## CLI Commands

### List available dates

```bash
grlx audit dates
```

Shows all dates that have audit log entries, along with entry counts and file sizes.

### Query audit entries

```bash
# All entries for today
grlx audit list

# Filter by date
grlx audit list --date 2026-03-15

# Filter by action type
grlx audit list --action cook

# Filter by user
grlx audit list --pubkey UABC...XYZ

# Show only failures
grlx audit list --failed

# Limit results
grlx audit list --limit 50
```

### JSON output

```bash
grlx audit list --out json
```

## API Access

The audit log is also available through the farmer's API at `GET /api/v1/audit`, supporting the same query parameters as the CLI. This endpoint requires at least `view` permission.
