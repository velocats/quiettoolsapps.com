#!/usr/bin/env python3
"""Download real app icons for Quiet Tools apps.

Run from the project root:

    python3 scripts/download-app-icons.py

This uses each app's public website logo/icon asset and writes icons to:

    public/assets/app-icons/
"""
from __future__ import annotations

import urllib.request
from pathlib import Path

ICON_URLS = {
    "aroundthehouse": "https://www.aroundthehouseapp.com/assets/icons/around-the-house-icon.png",
    "mealcost": "https://www.mealcostapp.com/MealCostAppIcon.png",
    "tripquest": "https://www.thetripquestapp.com/assets/tripquest-icon.png",
    "fixlog": "https://www.fixlogapp.com/assets/branding/fixlog-logo-1024.png",
    "homesteadkeeper": "https://homesteadkeeper.com/assets/homestead-keeper-logo.png",
}

OUT_DIR = Path("public/assets/app-icons")


def download(url: str, dest: Path) -> None:
    with urllib.request.urlopen(url, timeout=60) as response:
        dest.write_bytes(response.read())


def main() -> int:
    OUT_DIR.mkdir(parents=True, exist_ok=True)

    for slug, icon_url in ICON_URLS.items():
        dest = OUT_DIR / f"{slug}.png"
        print(f"Downloading {slug}...")
        download(icon_url, dest)
        print(f"  Saved {dest}")

    print("\nDone.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
