---
title: RBAC
description: Role-based access control for users and cohorts
---

grlx includes a role-based access control (RBAC) system that governs who can perform actions on which sprouts. Permissions are tied to public keys, so every CLI user has an auditable identity.

## Concepts

- **User**: Identified by their CLI public key. Each key maps to a username and role.
- **Role**: A named set of permissions. Roles define which actions a user can perform on which cohorts.
- **Action**: An operation type — `cook`, `cmd`, `ssh`, or `view`.
- **Cohort scope**: Permissions are granted per-cohort. A user may have different permissions on different cohorts.

## Configuration

Roles and users are defined in the farmer configuration file:

```toml
[rbac.roles.operator]
actions = ["cook", "cmd", "ssh", "view"]
cohorts = ["*"]

[rbac.roles.deployer]
actions = ["cook", "view"]
cohorts = ["staging", "production"]

[rbac.roles.viewer]
actions = ["view"]
cohorts = ["*"]
```

Users are mapped to roles by their public key:

```toml
[[rbac.users]]
name = "alice"
pubkey = "UABC...XYZ"
role = "operator"

[[rbac.users]]
name = "bob"
pubkey = "UDEF...UVW"
role = "deployer"
```

### Built-in Viewer Role

Users with only the `view` action can:

- List sprouts, jobs, props, cohorts
- Read job details and audit logs

They **cannot** cook recipes, run commands, or open SSH sessions.

## Actions

| Action | Description                          |
| ------ | ------------------------------------ |
| `cook` | Execute recipes on sprouts           |
| `cmd`  | Run arbitrary commands via `cmd run` |
| `ssh`  | Open interactive shell sessions      |
| `view` | Read-only access to all resources    |

## Validation

The farmer validates the RBAC configuration at startup:

- Referenced cohorts must exist in the cohort configuration
- Public keys must be unique across all users
- Role names must be unique

If validation fails, the farmer will not start and will report the configuration errors.

## CLI Commands

### Check your identity

```bash
grlx auth whoami
```

Shows the current CLI user's public key and assigned role.

### List users

```bash
grlx auth users
```

### List roles

```bash
grlx auth roles
```

### Explain effective permissions

```bash
grlx auth explain
```

Shows the current user's effective permissions across all cohorts — which actions are allowed where.

## Enforcement

Every request to the farmer is checked against RBAC before execution. If the requesting user lacks the required action on the target cohort, the request is denied with a clear error message.

The enforcement middleware covers:

- `cook` — recipe execution
- `cmd.run` — arbitrary command dispatch
- `ssh` — interactive shell sessions
- Read endpoints — restricted to users with at least `view` permission

## `dangerously_allow_root`

For development or single-user setups, the farmer supports a `dangerously_allow_root` flag that bypasses RBAC checks:

```toml
[farmer]
dangerously_allow_root = true
```

:::caution
This disables all permission checks. Do not use in production environments. The farmer logs a startup warning when this flag is enabled.
:::

## Audit Logging

All actions are recorded in the audit log with the acting user's identity. See [Audit Logging](/audit) for details.
