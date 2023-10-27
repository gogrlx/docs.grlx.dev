---
title: Overview
description: The foundation of grlx
sidebar:
    order: 1
---
Recipe ingredients are how we build configurations with `grlx`. They can be thought of as the building blocks for completing various file, service, or management operations. Recipes rely on dependency injection via a provider system to provide extensible backends for various tasks. This also allows for users to develop [go plugins](https://pkg.go.dev/plugin) to extend ingredient providers. 
:::note
The [file ingredient](/ingredients/file) already supports a few different file providers. Check them out the list of file providers [here](/ingredients/file-providers).
