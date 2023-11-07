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
By default, grlx only has a `systemd` provider. 

## systemd
The [`systemd` provider](/ingredients/service) allows for control over a sprout's `systemd` services.
#### Example
```yaml
service.disabled:
  - name: cronie.service
  - userMode: false
```
