---
title: grlx.ingredients.file
description: file 
---
The file ingredient handles all file operations on various [file providers](/ingredients/file-providers) (such as local files, HTTP, etc.)
## **file.absent**
Deletes a file or directory
#### Parameters
| parameter | type | required | description |
|-----------|------|----------|-------------|
| _name_ | string | yes | the name/path of the file to delete
#### Example
```yaml
file.absent:
    name: ~/.config/sytemd/user/backup.service
```

## **file.append**
Appends content to a file. Only appends the content if it doesn't exist.
#### Parameters
| parameter | type | required | description |
|-----------|------|----------|-------------|
| _name_ | string |required| the name/path of the file to delete
| _text_ | string |required| the text to append to a file
#### Example
```yaml
file.append:
  - name: /etc/profile
  - text: |
      export PATH=$PATH:/usr/local/go/bin
```

## **file.cached**
Validates if a file is cached in the sprout's cache. If it isn't the file will be cached.
#### Parameters
| parameter | type | required | description |
|-----------|------|----------|-------------|
| _source_ | string | yes | a file source (such as HTTP, file, etc.) to reference
| _hash_ | string | no | a valid hash of the `source` file
| _skip_verify_ | boolean | no | whether to skip hash validation, false by default
#### Example
```yaml
file.cached:
    - source: https://go.dev/dl/go1.21.3.src.tar.gz
    - hash: sha256=186f2b6f8c8b704e696821b09ab2041a5c1ee13dcbc3156a13adcf75931ee488
```

## **file.content**
Copies content into a given file
#### Parameters
| parameter | type | required | description |
|-----------|------|----------|-------------|
| _name_ | string | yes | the name of the file to add content to 
| _makedirs_ | bool | no | whether or not to create parent directories for the file
| _skip_verify_ | bool | no | whether to skip the verification of the source hash
| _source_ | string | no | the source to copy content for
| _hash_ | string | no | the hash for the source 
| _sources_ | list | no | a list of sources to to copy content for
| _hash_sources_ | string | no | a list of hashes for the provided sources
| _text_ | string | no | the text to copy into a file
#### Example
```yaml
file.content:
    - name: /srv/ngnix/nginx.conf
    - makdirs: true
    - text: |
        server {
            listen 8080;
            root /data/up1;

            location / {
            }
        }
```

## **file.contains**
Checks if a file contains a given selection. If multiple sources are provided, all must be satisfied.
#### Parameters
| parameter | type | required | description |
|-----------|------|----------|-------------|
| _name_ | string | yes | the name/path of the file to check
| _text_ | string | no |the item to search for
| _source_ | string | no | a file source (such as HTTP, file, etc.) to reference
| _source_hash_ | string | no | a hash for a given source
| _sources_ | list | no | a list of sources to check against
| _source_hashes_ | list | no | a list of source hashes
| _skip_verify_ | boolean | no | whether to skip hash validation, false by default


## **file.directory**
Handles many directory operations. Ensures that a directory exists with the given permissions.
#### Parameters
| parameter | type | required | description |
|-----------|------|----------|-------------|
| _name_ | string | yes | the name/path of the directory
| _makedirs_ | bool | no |option to make directory if it doesn't exist, defaults to true
| _user_ | string | no |the user who will own the directory
| _group_ | string | no |the group who will own the directory
| _dir_mode_ | string | no |the directory mode
| _file_mode_ | string | no |the file mode to set
| _recurse_ | bool | no |whether to recurse the directories and apply permissions
#### Example
```yaml
file.directory:
    - name: /tmp/item
    - makdirs: false
    - user: grlx
    - group: grlx
    - dir_moode: 755
    - recurse: false
```

## **file.exists**
Checks if a file exists.
#### Parameters
| parameter | type | required | description |
|-----------|------|----------|-------------|
| _name_ | string | yes | the name/path of the file
#### Example
```yaml
file.exists:
    - name: /tmp/exists
```

## **file.missing**
Checks if a file is missing.
#### Parameters
| parameter | type | required | description |
|-----------|------|----------|-------------|
| _name_ | string | yes | the name/path of the file
#### Example
```yaml
file.missing:
    - name: /tmp/missing
```

## **file.symlink**
Creates a symlink at `name` that points to `target`
#### Parameters
| parameter | type | required | description |
|-----------|------|----------|-------------|
| _name_ | string | yes | the name/path of the file
| _target_ | string | yes | the target path to link to
#### Example
```yaml
file.symlink:
    - name: ~/localbash
    - target: /usr/bin/bash
```
