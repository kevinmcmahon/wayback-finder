#!/bin/bash

# Print usage information
function print_usage() {
    echo -e "\nUsage: $0 --url <URL> --date <TARGET_DATE>\n"
    echo "Options:"
    echo "  --url, -u       URL to download from the Wayback Machine"
    echo "  --date, -d      Target date to return the closest snapshot in YYYYMMDD format"
    echo ""
}

# Default date to today's date in YYYYMMDD format if not provided
DEFAULT_DATE=$(date +%Y%m%d)

# Parse command line arguments
while [[ "$#" -gt 0 ]]; do
    case $1 in
        -u|--url) URL="$2"; shift ;;
        -d|--date) DATE="$2"; shift ;;
        *) echo "Unknown parameter: $1"; print_usage; exit 1 ;;
    esac
    shift
done

# Check if URL is provided
if [ -z "$URL" ]; then
    echo -e "Error: Need to provide a url\n"
    print_usage
    exit 1
fi

# Use the provided date or default to today's date
DATE=${DATE:-$DEFAULT_DATE}

# Query the Wayback Machine API and parse response
RESPONSE=$(curl -s "https://archive.org/wayback/available?url=${URL}&timestamp=${DATE}")
CLOSEST_SNAPSHOT=$(echo $RESPONSE | jq -r '.archived_snapshots.closest.url')

# Output the closest snapshot URL or nothing if null
[ "$CLOSEST_SNAPSHOT" != "null" ] && echo "$CLOSEST_SNAPSHOT" 
