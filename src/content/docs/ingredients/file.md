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
    name: ~/.config/systemd/user/backup.service
```

## **file.append**
Appends content to a file. Only appends the content if it doesn't exist.
#### Parameters
| parameter | type | required | description |
|-----------|------|----------|-------------|
| _name_ | string | yes| the name/path of the file to append to
| _text_ | string | no | the text to append to a file
| _makedirs_ | bool | no | create parent directories if they do not exist
| _source_ | string | no | append lines from a file sourced from this path/URL
| _source_hash_ | string | no | hash to verify the file specified by source
| _template_ | bool | no | treat this file as a template and render it before placing it (experimental)
| _sources_ | string/list | no | list source, but in list format
| _source_hashes_ | string/list | no | corresponding hashes for sources
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
| _name_ | string | yes | the path describing where to save the cached file
| _source_ | string | yes | a file source (such as HTTP, file, etc.) to reference
| _hash_ | string | conditional (required if `skip_verify` is false) | a valid hash of the `source` file
| _skip_verify_ | boolean | no | whether to skip hash validation, false by default
#### Example
```yaml
file.cached:
    - name: /tmp/cachedfile
    - source: https://go.dev/dl/go1.21.3.src.tar.gz
    - hash: sha256=186f2b6f8c8b704e696821b09ab2041a5c1ee13dcbc3156a13adcf75931ee488
```

## **file.contains**
Checks if a file contains a given selection. If multiple sources are provided, all must be satisfied.
#### Parameters
| parameter | type | required | description |
|-----------|------|----------|-------------|
| _name_ | string | yes | the name/path of the file to check
| _text_ | string | no |the item to search for
| _source_ | string | no | a file source (such as HTTP, file, etc.) to reference
| _source_hash_ | string | conditional (required if `source` provided) | a hash for a given source
| _sources_ | list | no | a list of sources to check against
| _source_hashes_ | list | conditional (required if `sources` provided) | a list of source hashes
| _template_ | bool | no | treat this file as a template and render it before placing it (experimental)


## **file.content**
Copies content into a given file
#### Parameters
| parameter | type | required | description |
|-----------|------|----------|-------------|
| _name_ | string | yes | Represents the name of a file or directory
| _makedirs_ | bool   | no (default: `false`) | Determines whether directories should be created if they don't exist
| _source_ | string | no | Represents a source file's path or name
| _source_hash_ | string | conditional (required if `source` is provided and `skip_verify` is `false`) | Represents the hash of a source file, used for verification
| _text_ | string/list | no | Represents the content of a file. Can be a single string or a list of items
| _sources_ | list   | no | Represents multiple source files
| _template_ | bool | no | treat this file as a template and render it before placing it (experimental)
| _source_hashes_ | list | conditional (required if `sources` is provided and `skip_verify` is `false`) | Represents the hashes for the multiple source files mentioned in `sources`
#### Example
```yaml
file.content:
    - name: /srv/nginx/nginx.conf
    - makdirs: true
    - text: |
        server {
            listen 8080;
            root /data/up1;

            location / {
            }
        }
```

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
    - dir_mode: 755
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


## **file.managed**
Manage many properties of a file concurrently, safely
#### Parameters
| parameter | type | required | description |
|-----------|------|----------|-------------|
| _name_ | string | yes | Represents the name of a file or directory
| _source_ | string | no | Represents a source file's path or name
| _source_hash_ | string | conditional (required if `source` is provided) | Represents the hash of a source file, used for verification
| _user_ | string | no |the user who will own the directory
| _group_ | string | no |the group who will own the directory
| _mode_ | string | no |the file's mode
| _template_ | bool | no | treat this file as a template and render it before placing it (experimental)
| _makedirs_ | bool   | no (default: `false`) | Determines whether directories should be created if they don't exist
| _dir_mode_ | string | no |the directory mode
| _text_ | string/list | no | Represents the content of a file. Can be a single string or a list of items
| _sources_ | list   | no | Represents multiple source files
| _source_hashes_ | list | conditional (required if `sources` is provided) | Represents the hashes for the multiple source files mentioned in `sources`
#### Example
```yaml
file.managed:
    - name: /srv/nginx/nginx.conf
    - makdirs: true
    - user: pi
    - group: wheel
    - text: |
        server {
            listen 8080;
            root /data/up1;

            location / {
            }
        }
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

## **file.prepend**
Prepends content to a file. Only prepends the content if it doesn't exist.
#### Parameters
| parameter | type | required | description |
|-----------|------|----------|-------------|
| _name_ | string | yes| the name/path of the file to prepend to
| _text_ | string | no | the text to prepend to a file
| _makedirs_ | bool | no | create parent directories if they do not exist
| _source_ | string | no | prepend lines from a file sourced from this path/URL
| _source_hash_ | string | no | hash to verify the file specified by source
| _template_ | bool | no | treat this file as a template and render it before placing it (experimental)
| _sources_ | string/list | no | list source, but in list format
| _source_hashes_ | string/list | no | corresponding hashes for sources
#### Example
```yaml
file.prepend:
  - name: /etc/profile
  - text: |
      export PATH=$PATH:/usr/local/go/bin
```

## **file.symlink**
Creates a symlink at `name` that points to `target`
#### Parameters
| parameter | type | required | description |
|-----------|------|----------|-------------|
| _name_ | string | yes | the name/path of the file
| _target_ | string | yes | the target path to link to
| _makedirs_ | string | no | make parent directories if missing
| _user_ | string | no | the user who should own the symlink
| _group_ | string | no | the group who should own the symlink
| _mode_ | string | no | the desired filemode of the symlink
#### Example
```yaml
file.symlink:
    - name: ~/localbash
    - target: /usr/bin/bash
    - user: pi
    - group: wheel
    - mode: "655"
```

## **file.touch**
Performs a `touch` on a file
| parameter | type | required | description |
|-----------|------|----------|-------------|
| _name_ | string | yes | the name/path of the file
| _atime_ | time (RFC339) | no | the access time to set the file to, set to the current time by default
| _mtime_ | time (RFC339) | no | the modified time to set the file to, sets to the current time by default
| _makedirs_ | bool | yes | whether or not to create any provided parent directories, false by default
```yaml
file.touch:
  - name: /tmp/parent/new-file
  - atime: Mon, 06 Nov 2023 00:00:00 +0000
  - mtime: Mon, 06 Nov 2023 00:00:00 +0000
  - makedirs: true 
```
