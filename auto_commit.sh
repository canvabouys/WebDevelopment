#!/bin/bash

while true; do
  # Check if there are any changes (tracked or untracked)
  if [ -n "$(git status --porcelain)" ]; then
    echo "🔄 Changes detected. Committing..."
    git add -A
    git commit -m "Auto-commit: $(date)"

    # Set up Git to push directly (force update the branch reference)
    git pull --rebase origin main  # Change 'main' to your branch name if different

    # Push the changes forcefully to ensure it updates the remote
    if git push origin main --force; then
      echo "✅ Changes pushed successfully."
    else
      echo "❌ Push failed. Retrying after conflict resolution..."
      git pull --rebase origin main  # Resolve any conflicts and retry
      git push origin main --force
    fi
  else
    echo "⚠️ No changes to commit."
  fi

  sleep 5  # Commit every 5 seconds
done