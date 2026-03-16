---
title: Cohorts
description: Group sprouts for targeted operations
---

Cohorts let you organize sprouts into named groups for targeting with `cook`, `cmd run`, `ssh`, and other operations. They replace ad-hoc glob patterns with reusable, manageable groupings.

## Cohort Types

### Static

A fixed list of sprout names:

```toml
[cohorts.webservers]
type = "static"
members = ["web-01", "web-02", "web-03"]
```

### Dynamic

Membership is determined by matching a sprout property at evaluation time:

```toml
[cohorts.linux-hosts]
type = "dynamic"
match_prop = "os"
match_value = "linux"
```

Dynamic cohorts automatically include any sprout whose property matches the condition. Use `grlx cohorts refresh` to re-evaluate membership against currently connected sprouts.

### Compound

Combine other cohorts with boolean logic:

```toml
[cohorts.prod-linux]
type = "compound"
operator = "AND"
operands = ["production", "linux-hosts"]
```

Supported operators:

| Operator | Description                                      |
| -------- | ------------------------------------------------ |
| `AND`    | Sprouts that belong to **all** listed cohorts    |
| `OR`     | Sprouts that belong to **any** listed cohort     |
| `EXCEPT` | Sprouts in the first cohort but **not** the rest |

Compound cohorts can reference other compound cohorts (nesting), with a depth limit to prevent cycles.

## CLI Commands

### List all cohorts

```bash
grlx cohorts list
```

### Show cohort details

```bash
grlx cohorts show webservers
```

Displays the cohort type, configuration, and resolved member list.

### Refresh dynamic membership

```bash
# Refresh a specific cohort
grlx cohorts refresh webservers

# Refresh all cohorts
grlx cohorts refresh
```

Re-evaluates dynamic cohort membership against currently connected sprouts and their properties.

### JSON output

All cohort commands support `--out json` for machine-readable output:

```bash
grlx cohorts list --out json
grlx cohorts show webservers --out json
```

## Using Cohorts

Cohorts can be used anywhere you target sprouts:

```bash
# Cook a recipe against a cohort
grlx cook nginx-setup -C webservers

# Run a command on a cohort
grlx cmd run "uptime" -C linux-hosts

# SSH with cohort picker
grlx ssh -C webservers
```

## RBAC Integration

RBAC permissions are assigned per-cohort. A user might have `cook` and `view` permissions on the `staging` cohort but only `view` on `production`. See the [RBAC documentation](/rbac) for details.
