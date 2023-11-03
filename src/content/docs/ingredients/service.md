---
title: grlx.ingredients.service
description: service
---

The `service` ingredient handles the management of system services. Currently, this only supports `systemd` services.

## **service.masked**

Checks if a service is masked and masks it if it is not

#### Parameters

| parameter  | type   | required | description                                      |
| ---------- | ------ | -------- | ------------------------------------------------ |
| _name_     | string | yes      | the name of the `systemd` unit                   |
| _userMode_ | bool   | no       | to use `systemd` in user mode, defaults to false |

```yaml
service.masked:
  - name: ssd-backup
  - userMode: true
```

## **service.unmasked**

Checks if a service is unmasked and unmasks it if it is not

#### Parameters

| parameter  | type   | required | description                                      |
| ---------- | ------ | -------- | ------------------------------------------------ |
| _name_     | string | yes      | the name of the `systemd` unit                   |
| _userMode_ | bool   | no       | to use `systemd` in user mode, defaults to false |

```yaml
service.unmasked:
  - name: ssd-backup
  - userMode: true
```

## **service.running**

Checks if a service is running and starts it if it is not

#### Parameters

| parameter  | type   | required | description                                      |
| ---------- | ------ | -------- | ------------------------------------------------ |
| _name_     | string | yes      | the name of the `systemd` unit                   |
| _userMode_ | bool   | no       | to use `systemd` in user mode, defaults to false |

```yaml
service.running:
  - name: docker.service
  - userMode: false
```

## **service.stopped**

Checks if a service is stopped and stops it if it is not

#### Parameters

| parameter  | type   | required | description                                      |
| ---------- | ------ | -------- | ------------------------------------------------ |
| _name_     | string | yes      | the name of the `systemd` unit                   |
| _userMode_ | bool   | no       | to use `systemd` in user mode, defaults to false |

```yaml
service.stopped:
  - name: docker.service
  - userMode: false
```

## **service.enabled**

Checks if a service is enabled and enables it if it is not

#### Parameters

| parameter  | type   | required | description                                      |
| ---------- | ------ | -------- | ------------------------------------------------ |
| _name_     | string | yes      | the name of the `systemd` unit                   |
| _userMode_ | bool   | no       | to use `systemd` in user mode, defaults to false |

```yaml
service.enabled:
  - name: cronie.service
  - userMode: false
```

## **service.disabled**

Checks if a service is disabled and disables it if it is not

#### Parameters

| parameter  | type   | required | description                                      |
| ---------- | ------ | -------- | ------------------------------------------------ |
| _name_     | string | yes      | the name of the `systemd` unit                   |
| _userMode_ | bool   | no       | to use `systemd` in user mode, defaults to false |

```yaml
service.disabled:
  - name: cronie.service
  - userMode: false
```

## **service.restarted**

Restarts a service

#### Parameters

| parameter  | type   | required | description                                      |
| ---------- | ------ | -------- | ------------------------------------------------ |
| _name_     | string | yes      | the name of the `systemd` unit                   |
| _userMode_ | bool   | no       | to use `systemd` in user mode, defaults to false |

```yaml
service.restarted:
  - name: cronie.service
  - userMode: false
```
