---
title: grlx.ingredients.cmd
description: cmd 
---
The cmd ingredient allows for us to run arbitrary shell commands against sprouts.
## **cmd.run**
Runs shell commands against a sprout
#### Parameters
| parameter | type | required | description |
|-----------|------|----------|-------------|
| _name_ | string | true | the command to run
| _runas_ | string | false | user who will run this command 
```yaml
cmd.run:
    - name: go version
    - runas: super-cool-user
```

