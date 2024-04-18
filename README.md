# Wayback Finder

Wayback Finder is a command-line utility designed to help users find the closest archived snapshot of a given URL on a specific target date using the Wayback Machine. This tool is perfect for researchers, historians, and anyone interested in exploring historical web pages.

## Installation

To install Wayback Finder, you need to have Node.js installed on your system. If you don't have Node.js installed, you can download it from [nodejs.org](https://nodejs.org/).

Once Node.js is installed, you can install Wayback Finder globally on your system via npm:

```sh
npm install -g wayback-finder
```

## Usage

To use Wayback Finder, run the following command in your terminal:

```sh
wayback-finder --url <URL> --date <TARGET_DATE>
```

### Options

- `--url, -u`: URL to download from the Wayback Machine.
- `--date, -d`: Target date to return the closest snapshot in `YYYYMMDD` format.

### Example

```sh
wayback-finder --url https://example.com --date 20210101
```

This command will find the closest snapshot of `https://example.com` on or before January 1, 2021.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you have any ideas or feedback.

## License

Wayback Finder is open-source software licensed under the MIT license. See the [LICENSE](LICENSE) file for more details.

## Acknowledgments

- This project utilizes the [Wayback Machine API](https://archive.org/help/wayback_api.php) to retrieve archived snapshots.
