#!/usr/bin/env bash

cd "$(dirname "$0")"
cd ../semaphore/circuits/
http-server -p 8000 --cors
