---
title: Managing Sprouts
description: List, inspect, and monitor connected sprouts
---

The `grlx sprouts` command provides visibility into all sprouts known to the farmer — their connection status, key state, and properties.

## List Sprouts

```bash
grlx sprouts list
```

Shows all known sprouts sorted by connection status (connected first, then alphabetical). The output includes each sprout's name, connection state, and key state.

### Filter by state

```bash
# Only show sprouts with accepted keys
grlx sprouts list --state accepted

# Only show currently connected sprouts
grlx sprouts list --online
```

### JSON output

```bash
grlx sprouts list --out json
```

## Inspect a Sprout

```bash
grlx sprouts show my-sprout
```

Displays detailed information about a single sprout, including its properties, connection history, and current status.

## Key Management

Before a sprout can receive commands, the farmer must accept its key. This is handled through the `grlx auth` subcommands rather than the sprouts command — see the [Authentication section](/glossary#authentication) for details.

## Connection Model

Sprouts connect to the farmer's embedded NATS server on startup. The farmer tracks which sprouts are currently connected and their last-seen timestamps. Sprouts behind firewalls or NAT work fine — they only need outbound access to the farmer's NATS port.
