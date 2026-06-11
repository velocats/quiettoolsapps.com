#!/bin/bash
set -e

echo "📁 Repo:"
pwd

echo
echo "🔎 Git status:"
git status

echo
echo "➕ Adding files..."
git add .

echo
read -p "Commit message: " msg

if [ -z "$msg" ]; then
  msg="Update website"
fi

echo
echo "💾 Committing..."
git commit -m "$msg" || echo "Nothing to commit."

echo
echo "🚀 Pushing to GitHub..."
git push

echo
echo "✅ Done."
