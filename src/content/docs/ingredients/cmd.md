---
title: grlx.ingredients.cmd
description: cmd 
---
The cmd ingredient allows you to run arbitrary shell commands against sprouts.
## **cmd.run**
Runs shell commands against a sprout
#### Parameters
| parameter | type | required | description |
|-----------|------|----------|-------------|
| _name_ | string | true | the command to run
| _runas_ | string | false | user who will run this command (defaults to root)
| _path_ | string | false | the path to the binary, this is prepended to the name
| _cwd_ | string | false | the directory to run this command
| _env_ | list | false | environment variables to set should be specified like key1=value1
| _timeout_ | string | false | set a timeout for the command using [Go Duration](https://pkg.go.dev/time#ParseDuration) 
```yaml
cmd.run:
    - name: go version
    - runas: super-cool-user
    - path: /usr/local/bin
    - cwd: /tmp
    - env:
      - GOOS=linux
      - GOARCH=arm64
    - timeout: 10s
```

