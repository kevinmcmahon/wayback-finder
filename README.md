# Wayback Machine Snapshot Finder

This shell script queries the Wayback Machine API to find the closest available snapshot for a given URL and date. It's designed to be minimalistic, outputting only the URL of the closest snapshot without any additional text.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- `curl`: Command-line tool for transferring data with URLs.
- `jq`: Lightweight and flexible command-line JSON processor.

These tools are available on most Unix-like operating systems. Use your package manager to install them if not already installed.

For example, on Ubuntu:

```bash
sudo apt update
sudo apt install curl jq
```

or Homebrew:

```bash
brew install curl jq
```

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/kevinmcmahon/wayback-finder.git
   cd wayback-finder
   ```

2. **Make the script executable:**

   ```bash
   chmod +x wayback_finder.sh
   ```

## Usage

To use the script, you need to provide a URL and optionally a date. If no date is provided, the script defaults to the current date formatted as YYYYMMDD.

### Syntax

```bash
./wayback_finder.sh --url <URL> [--date <DATE>]
```

### Parameters

- `--url, -u`: Mandatory. The URL to query in the Wayback Machine.
- `--date, -d`: Optional. The target date for the snapshot in YYYYMMDD format. Defaults to today's date if not provided.

### Example

To find the closest snapshot of `example.com` on January 1, 2021:

```bash
./wayback_finder.sh --url example.com --date 20210101
```

This will output the URL of the closest available snapshot from that date, or nothing if no snapshot is available.

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues to suggest improvements or add new features.

## License

This script is released under the MIT License. See the `LICENSE` file in the repository for more details.
