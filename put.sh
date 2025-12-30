#!/bin/bash
curl -X PUT -i http://localhost:3000/profiles/01KDQPM4VHSH68SHP4M2D1NGDV \
  -H "Content-Type: application/json" \
  -d '{
    "name": "test2",
    "description": "iiiiiiiiiiiiiii"
}'
