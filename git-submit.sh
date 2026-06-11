#!/usr/bin/env bash
set -euo pipefail

MSG="${1:-Update Quiet Tools website}"

echo "==> Repository root: $(pwd)"

if [ ! -d .git ]; then
  echo "ERROR: This directory is not a git repository. Run git init or move this script to your repo root."
  exit 1
fi

echo "==> Current branch: $(git branch --show-current)"

echo "==> Checking for files larger than 50 MB"
large_files=$(find . -type f -not -path './.git/*' -size +50M -print || true)
if [ -n "$large_files" ]; then
  echo "WARNING: Large files found:"
  echo "$large_files"
  echo "Consider removing or using Git LFS before pushing."
fi

echo "==> Git status before commit"
git status --short

echo "==> Adding changes"
git add .

if git diff --cached --quiet; then
  echo "No staged changes to commit."
else
  echo "==> Committing: $MSG"
  git commit -m "$MSG"
fi

echo "==> Pulling latest changes with rebase"
git pull --rebase --autostash

echo "==> Pushing"
git push

echo "==> Done"
