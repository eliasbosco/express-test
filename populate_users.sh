#!/bin/bash

for counter in $(seq ${1} ${2}); do
    NEW_UUID=$(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 16 | head -n 1)
    NEW_PASS=$(cat /dev/urandom | tr -dc '0-9' | fold -w 256 | head -n 1 | head --bytes 8)
    curl --location --request POST 'localhost:3000/api/v1/users' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "username": "'$NEW_UUID'",
        "email": "'$NEW_UUID'@gmail.com",
        "password": "'$NEW_PASS'"
    }'
done