---
title: grlx.ingedients.file.providers
description: grlx built-in file providers
---
`grlx` has a concept of file providers for different ways that you might obtain a file to be added to a given sprout. This uses a provider interface to keep this extensible and provide a standard way to use different file types. The `go` interface for File Providers looks like the following:
```go
type FileProvider interface {
    Download(context.Context) error
    Properties() (map[string]interface{}, error)
    Parse(id, source, destination, hash string, properties map[string]interface{}) (FileProvider, error)
    Protocols() []string
    Verify(context.Context) (bool, error)
}
```
By default, `grlx` has three built-in providers: local, HTTP, and S3. 

## Local
The local provider would be how you would use a file from your host system.
#### Example
```yaml
file.cached:
    - source: go1.21.3.src.tar.gz
    - hash: sha256=186f2b6f8c8b704e696821b09ab2041a5c1ee13dcbc3156a13adcf75931ee488
```

## HTTP
The HTTP provider allows you to download files via HTTP for use. The [example](/ingredients/file-providers/#example) below is using the HTTP provider to download Go from the Internet. This file then gets cached to the sprout. 
#### Example
```yaml
file.cached:
    - source: https://go.dev/dl/go1.21.3.src.tar.gz
    - hash: sha256=186f2b6f8c8b704e696821b09ab2041a5c1ee13dcbc3156a13adcf75931ee488
```

## TODO: S3
The S3 allows you to get a file from an S3 compatible bucket.
