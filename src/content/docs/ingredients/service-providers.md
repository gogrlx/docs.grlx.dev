---
title: grlx.ingredients.service.providers
description: grlx built-in service providers
---
grlx has a concept of service providers for different ways to interact with a sprout's various services. This uses a provider interface to keep this extensible and provide a standard way to interact with different service managers. The Go interface for Service Providers looks like the following:
```go
type ServiceProvider interface {
  Properties() (map[string]interface{}, error)
  Parse(id, method string, properties map[string]interface{}) (ServiceProvider, error)

  Start(context.Context) error
  Stop(context.Context) error
  Status(context.Context) (string, error)

  Enable(context.Context) error
  Disable(context.Context) error
  IsEnabled(context.Context) (bool, error)

  IsRunning(context.Context) (bool, error)
  Restart(context.Context) error

  Mask(context.Context) error
  Unmask(context.Context) error
  IsMasked(context.Context) (bool, error)

  InitName() string
  IsInit() bool
}
```

grlx automatically detects which init system is running on each sprout and selects the appropriate provider. The following providers are built in:

## systemd

The `systemd` provider manages services on Linux systems using systemd. This is the most common provider and is auto-detected on systems where `systemctl` is available.

#### Example
```yaml
service.enabled:
  - name: cronie.service
  - userMode: false
```

## rc.d (BSD)

The `rc.d` provider manages services on BSD systems (FreeBSD, NetBSD, OpenBSD, DragonFlyBSD) using the native rc.d init system. It is auto-detected on systems where `/etc/rc.d` or `/usr/local/etc/rc.d` is present.

The rc.d provider maps grlx service operations to the corresponding `service(8)` and `rc.conf` commands:
- **Start/Stop/Restart** — `service <name> start|stop|restart`
- **Enable/Disable** — adds or removes `<name>_enable="YES"` in `/etc/rc.conf`
- **Status** — `service <name> status`

#### Example
```yaml
service.running:
  - name: sshd
```

:::note
The `userMode` parameter is not applicable to rc.d services and is ignored if set.
:::

:::note
The `mask`/`unmask` operations are supported on rc.d but use `rc.conf` variables to prevent service startup, since BSD rc.d does not have a native mask concept like systemd.
:::
