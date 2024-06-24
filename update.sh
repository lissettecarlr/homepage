#!/bin/bash

log() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1"
}

log "-------------start-----------------"
log "Start git pull"

cd /root/homepage || { log "Failed to change directory to /root/homepage"; exit 1; }

# Reset any changes and pull latest code
if git checkout . && git pull; then
    log "Git pull completed successfully"
else
    log "Git pull failed"
    exit 1
fi

log "Start copying homepage"

# Backup existing homepage before removing
if [ -d /var/www/homepage ]; then
    mv /var/www/homepage /var/www/homepage.bak || { log "Failed to backup existing homepage"; exit 1; }
fi

# Copy new homepage
if /bin/cp -rf /root/homepage /var/www/; then
    log "Homepage copied successfully"
else
    log "Failed to copy homepage"
    exit 1
fi

log "Bash script completed"