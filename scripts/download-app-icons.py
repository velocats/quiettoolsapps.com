#!/usr/bin/env python3
"""Download real App Store icons for Quiet Tools apps.

Run from the project root:

    python3 scripts/download-app-icons.py

This uses Apple's public iTunes Lookup API and writes icons to:

    public/assets/app-icons/

Homestead Keeper is coming soon, so add `homesteadkeeper.png` manually when you have the final app icon.
"""
from __future__ import annotations

import json
import sys
import urllib.request
from pathlib import Path

APP_IDS = {
    "mealcost": "6757403777",
    "tripquest": "6760669535",
    "fixlog": "6767683534",
}

OUT_DIR = Path("public/assets/app-icons")


def fetch_json(url: str) -> dict:
    with urllib.request.urlopen(url, timeout=30) as response:
        return json.loads(response.read().decode("utf-8"))


def download(url: str, dest: Path) -> None:
    with urllib.request.urlopen(url, timeout=60) as response:
        dest.write_bytes(response.read())


def main() -> int:
    OUT_DIR.mkdir(parents=True, exist_ok=True)

    for slug, app_id in APP_IDS.items():
        lookup_url = f"https://itunes.apple.com/lookup?id={app_id}"
        print(f"Looking up {slug} ({app_id})...")
        data = fetch_json(lookup_url)
        results = data.get("results", [])
        if not results:
            print(f"  No lookup results for {slug}", file=sys.stderr)
            continue

        result = results[0]
        art_url = result.get("artworkUrl512") or result.get("artworkUrl100")
        if not art_url:
            print(f"  No artwork URL for {slug}", file=sys.stderr)
            continue

        # Request the larger 1024 artwork when Apple provides a 512 URL.
        art_url = art_url.replace("512x512bb", "1024x1024bb")
        dest = OUT_DIR / f"{slug}.png"
        download(art_url, dest)
        print(f"  Saved {dest} from {result.get('trackName', slug)}")

    print("\nDone. Add Homestead Keeper manually as public/assets/app-icons/homesteadkeeper.png when ready.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
