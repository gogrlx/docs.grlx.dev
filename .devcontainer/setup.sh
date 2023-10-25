#!/usr/bin/env bash
set -euo pipefail
npm install
git lfs install
git lfs fetch
git lfs pull