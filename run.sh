#!/bin/bash
 rm -rf ~/htdocs/juriy.com/*
node ./node_modules/docpad/out/bin/docpad generate --env static
