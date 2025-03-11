 #!/bin/bash

while true; do
  git add -A
  git commit -m "Auto-commit: $(date)"
  
  # Pull the latest changes with rebase to avoid conflicts
  git pull --rebase origin main  # Change 'main' to your branch name if different

  # Push the changes
  if git push origin main; then
    echo "✅ Changes pushed successfully."
  else
    echo "❌ Push failed. Retrying after conflict resolution..."
    git pull --rebase origin main  # Resolve any conflicts and retry
  fi

  sleep 10  # Commit every 5 seconds
done

#!/bin/bash

GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

while true; do
  echo -e "${CYAN}🔍 Checking for changes...${NC}"

  # Check if there are any changes (tracked or untracked)
  if [ -n "$(git status --porcelain)" ]; then
    echo -e "${GREEN}🔄 Changes detected. Committing...${NC}"
    git add -A
    git commit -m "Auto-commit: $(date)"

    # Pull the latest changes with rebase to avoid conflicts
    echo -e "${CYAN}⬇️  Pulling latest changes with rebase...${NC}"
    git pull --rebase origin main  # Change 'main' to your branch name if different

    # Push the changes
    echo -e "${CYAN}⬆️  Pushing changes to the remote repository...${NC}"
    if git push origin main; then
      echo -e "${GREEN}✅ Changes pushed successfully.${NC}"
    else
      echo -e "${RED}❌ Push failed. Retrying after conflict resolution...${NC}"
      git pull --rebase origin main  # Resolve any conflicts and retry
      git push origin main
    fi
  else
    echo -e "${YELLOW}⚠️  No changes to commit.${NC}"
  fi

  echo -e "${CYAN}⏳ Waiting for the next commit...${NC}"
  sleep 10  # Commit every 10 seconds
done
