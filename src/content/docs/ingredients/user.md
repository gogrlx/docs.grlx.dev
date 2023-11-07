---
title: grlx.ingredients.user
desc: An overview of grlx.ingredients.user
---
The user ingredient handles user operations on sprouts.
## **user.absent**
Removes a user if it exists
#### Parameters
| parameter | type | required | description |
|-----------|------|----------|-------------|
| _name_ | string | yes | the name of the user to be removed
```yaml
user.absent:
  - name: super-sprout
```

## **user.exists**
Validates if a user exists
#### Parameters
| parameter | type | required | description |
|-----------|------|----------|-------------|
| _name_ | string | yes | The username to check
```yaml
user.exists:
  - name: sprout-user
```

## **user.present**
Creates a new user if it does not exist
#### Parameters
| parameter | type | required | description |
|-----------|------|----------|-------------|
| _name_ | string | yes | The username of the user
| _uid_ | string | no | The UID assigned to the user
| _gid_ | string | no | The GID to the user
| _groups_ | list, string | no | A list groups the user is part of
| _shell_ | string | no | The user login shell, /bin/false by default
| _home_ | string | no | The path to the user's home directory if one is required
```yaml
user.present:
  - name: sprout-user
  - uid: "1003"
  - gid: "1003"
  - groups:
    - wheel
    - media
    - sudo
  - shell: /bin/bash
  - home: /var/sprout-user
```

