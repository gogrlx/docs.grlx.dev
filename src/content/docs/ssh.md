---
title: SSH
description: Open interactive shell sessions on sprouts over NATS
---

grlx provides a built-in remote shell that works entirely over the NATS message bus. No direct SSH access or network connectivity to the sprout is required — the farmer validates the request and the sprout spawns a PTY-backed shell process.

## Basic Usage

Connect to a sprout by name:

```bash
grlx ssh my-sprout
```

This opens an interactive terminal session. Press `Ctrl-D` or type `exit` to end it.

### Specifying a Shell

By default the sprout uses `/bin/sh`. Override with `--shell`:

```bash
grlx ssh my-sprout --shell /bin/bash
```

## Cohort Targeting

Instead of naming a sprout directly, target a cohort with `-C` / `--cohort`:

```bash
grlx ssh -C webservers
```

If the cohort resolves to a single sprout, the connection opens immediately. If multiple sprouts match, an interactive picker is displayed so you can choose which one to connect to.

:::note
You cannot specify both a sprout name and `--cohort` at the same time.
:::

## How It Works

1. The CLI sends a shell request to the farmer over NATS.
2. The farmer validates the requesting user's identity and RBAC permissions.
3. The target sprout spawns a PTY-backed shell process.
4. Input and output are relayed through NATS in real time.

Because the connection runs over the message bus, sprouts behind firewalls or NAT are fully accessible — as long as they can reach the farmer's NATS server.

## RBAC

Shell access is governed by the `ssh` action in the RBAC permission model. Users without the `ssh` permission on the target sprout's cohort will be denied. See the [RBAC documentation](/rbac) for details on configuring permissions.
