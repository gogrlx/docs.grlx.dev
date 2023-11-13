---
title: grlx.ingredients.group
desc: An overview of grlx.ingredients.group
---
The group ingredient handles group operations on sprouts.
## **group.absent**
Removes a group
#### Parameters
| parameter | type | required | description |
|-----------|------|----------|-------------|
| _name_ | string | no | The name of the group to remove
```yaml
group.absent:
  - name: sproutgroup
```

## **group.exists**
Validates if a group exists
#### Parameters
| parameter | type | required | description |
|-----------|------|----------|-------------|
| _name_ | string | yes | The group name to check
```yaml
group.exists:
  - name: sproutgroup
```

## **group.present**
Creates a group if it does not exist
#### Parameters
| parameter | type | required | description |
|-----------|------|----------|-------------|
| _name_ | string | yes | The name of the group to create
| _gid_ | string | no | The GID of the group to create
```yaml
group.present:
  - name: sproutgroup
  - gid: "1107"
```
