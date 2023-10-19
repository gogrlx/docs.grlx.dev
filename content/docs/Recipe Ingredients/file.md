---
title: grlx.ingredients.file
---
## file.absent
Deletes a file or directory
### Parameters
* _name_ (string,required): the name/path of the file to delete
### Example
```yaml
file.absent:
    name: ~/.config/sytemd/user/backup.service
```

## file.append
Appends content to a file. Only appends the content if it doesn't exist.
### Parameters
* _name_ (string,required): the name/path of the file to delete
* _text_ (string,required): the text to append to a file
### Example
```yaml
file.append:
  - name: /etc/profile
  - text: |
      export PATH=$PATH:/usr/local/go/bin
```

## file.contains
Checks if a file contains a given selection. If multiple sources are provided, all must be satisfied.
### Parameters
* _name_ (string,required): the name/path of the file to check
* _text_ (string): the item to search for
* _source_ (string): a file source (such as HTTP, file, etc.) to reference
* _source_hash_ (string): a hash for a given source
* _sources_ (list): a list of sources to check against
* _source_hashes_ (list): a list of source hashes
* _skip_verify_ (boolean): whether to skip hash validation, false by default


## file.directory
Handles many directory operations. Ensures that a directory exists with the given permissions.
### Parameters
* _name_ (string,required): the name/path of the directory
* _makedirs_ (bool): option to make directory if it doesn't exist, defaults to true
* _user_ (string): the user who will own the directory
* _group_ (string): the group who will own the directory
* _dir_mode_ (string): the directory mode
* _file_mode_ (string): the file mode to set
* _recurse_ (bool): whether to recurse the directories and apply permissions
### Example

