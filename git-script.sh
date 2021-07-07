#!/bin/bash

# execute: ./git-script.sh some commit message
# bash git-script.sh some commit message
# "$*" takes in all the input after the script call
# and uses it as the commit message
# commit message doesn't need any quotes

git add .
git commit -m "$*"
git pull origin main
git push origin main