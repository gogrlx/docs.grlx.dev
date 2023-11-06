---
title: Overview
description: A brief description of the grlx architecture
---
At a high level our architecture looks like the following:

We can boil down the `grlx` into three different parts: the farmer, the sprout, and the CLI.

## Farmer

The farmer is your control server. This has analogs in other similar configuration platforms. In SaltStack, this is your Salt Master, or in Chef, your Chef Server. `grlx` utilizes the farmer for things like authentication, job processing, and [ingredients](/architecture/overview#ingredients).

## Sprout

The sprout is what the farmer manages. This is similar to a Salt Minion in SaltStack or a Chef Client in Chef. Jobs are received from the farmer over the NATS message bus for actions to be performed on the sprout itself.

## CLI

## Ingredients