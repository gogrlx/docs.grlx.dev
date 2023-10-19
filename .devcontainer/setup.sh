#!/usr/bin/env bash
set -euo pipefail
export HUGO_VERSION="0.119.0"
export GO_VERSION="1.21.3"

pushd /tmp
curl -LO "https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_Linux-64bit.tar.gz"
tar -xvf hugo_extended_${HUGO_VERSION}_Linux-64bit.tar.gz
sudo mv hugo /usr/local/bin/
rm hugo_extended_${HUGO_VERSION}_Linux-64bit.tar.gz
curl -LO "https://dl.google.com/go/go${GO_VERSION}.linux-amd64.tar.gz"
sudo tar -C /usr/local -xzf go${GO_VERSION}.linux-amd64.tar.gz
rm go${GO_VERSION}.linux-amd64.tar.gz
export PATH=$PATH:/usr/local/go/bin
echo PATH="/usr/local/share/nvm/current/bin:/usr/local/share/npm-global/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/local/go/bin" |sudo tee -a /etc/environment
echo "PATH=$PATH:/usr/local/go/bin" >> ~/.bashrc
source ~/.bashrc
go version
popd
hugo version
yarn install