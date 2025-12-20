#!/bin/bash
curl -X PUT -i http://localhost:3000/profiles/2b891d6c-42d2-474c-9e1d-0fc8443e8722 \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Ka",
    "description": "aaaaaaaaaaaaaaaaa"
}'
