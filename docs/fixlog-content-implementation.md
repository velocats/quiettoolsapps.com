# FixLog content implementation brief

Prepared September 10, 2026, after inspecting the local FixLog source at `/Users/ecross/Documents/personal/websites/fixlogapp`. This is the next content workstream in the Quiet Tools SEO plan. No FixLog files were changed in this pass.

## Existing pages and distinct roles

| Existing route | Primary role | Next improvement |
| --- | --- | --- |
| `/cmms-alternative/` | Help an owner decide whether a personal record app fits | Replace broad assumptions about all CMMS products with specific selection criteria and show the actual workflow |
| `/equipment-repair-log/` | Demonstrate equipment-specific records | Add one complete illustrative service record and connect it to history, costs, and reminders |
| `/qr-codes.html` | Explain creating and using asset labels | Add real label-generation screenshots and clarify which devices can open the record |
| `/repair-log-app/` | General repair-record product entry point | Preserve this role; avoid creating another generic repair-log landing page |
| `/maintenance-log-app/` | Recurring maintenance | Keep scheduling details here and link from equipment examples |
| `/repair-history/` | Reviewing previous work | Link from the completed service-record example |
| `/repair-cost-tracking/` | Costs and reporting | Link from example expense totals |
| `/resources/what-to-include-in-a-repair-log/` | Explain log fields | Extend with a downloadable template rather than publishing a near-duplicate guide |

## 1. CMMS alternative page

Suggested title: `Simple CMMS Alternative for Owner-Operated Businesses | FixLog`

Suggested H1: `Maintenance records for a business you run yourself.`

Suggested introduction:

> Keep each asset's repairs, reminders, documents, and costs together on iPhone, iPad, and Mac. FixLog suits an owner who needs dependable equipment records and does not need technician dispatch or separate user permissions.

Add a decision table:

| Need | Fit |
| --- | --- |
| Keep a searchable record of work performed and its cost | FixLog workflow |
| Attach receipts, photos, and warranty documents to equipment | FixLog workflow |
| Review records on your supported Apple devices | Explain and link the verified sync workflow |
| Assign work orders to separate technicians | Team CMMS |
| Control individual access or maintain per-user audit trails | Team CMMS |
| Use Android or a browser dashboard | Compare products supporting those platforms |

Remove unsupported generalizations such as all CMMS products assuming a large maintenance department or taking months to implement. Acknowledge that some CMMS products offer free plans. Retain verified FixLog limitations. Link to current pricing instead of repeating prices throughout the page.

Add a three-step example: create an asset, record completed work, review its history and next reminder. Use actual screenshots. Avoid a separate Maintainly comparison until keyword demand and current competitor facts have been checked.

## 2. Equipment repair log page

Keep the existing asset-detail screenshot and add a clearly labelled illustrative record. Do not present the following as a customer story or actual repair advice:

| Field | Illustrative entry |
| --- | --- |
| Asset | Workshop compressor A-014 |
| Location | Main workshop |
| Service date | September 8, 2026 |
| Work performed | Recorded a scheduled service completed by the service provider |
| Parts cost | $35 |
| Labor cost | $90 |
| Total | $125 |
| Documents | Service invoice and equipment manual |
| Next step | Record the next service date specified by the provider or manufacturer |

Explain how the same asset record connects previous work, expense history, supporting documents, and reminders. Do not invent supported import behavior, automatic maintenance intervals, or technician assignment.

Existing verified screenshot candidate: `assets/screenshots/appstore/ipad/04-keep-asset-details-complete.webp`.

## 3. QR page

The current page already has a six-step explanation. Improve its evidence instead of adding more generic benefits.

Existing screenshot candidates:

- `assets/screenshots/appstore/iphone/08-print-qr-labels-for-fast-access.webp`
- `assets/screenshots/appstore/ipad/06-print-qr-codes-for-equipment.webp`
- `assets/screenshots/appstore/macos/05-print-qr-codes-for-equipment.webp`

Inspect those images before selecting and captioning them. Show label creation and printing, then demonstrate opening the matching asset and adding a record. Verify the app's QR payload and scanner behavior before stating that another device or person can access it. A label must not imply a public web record, team sharing, or authentication capabilities the product does not provide.

Add concise answers to: which app/device opens a label, whether the asset must already exist on that device, what happens with an unknown label, and which Pro features are required. These answers require app verification and must not be guessed from marketing copy.

## 4. Downloadable resource

Extend the existing repair-log field guide with an ungated CSV template and a completed example. Include asset ID, name, location, service date, work performed, provider, parts cost, labor cost, total cost, document reference, and next due date. Keep spreadsheet compatibility separate from claims about importing into FixLog; no import claim is authorized without verification.

## Acceptance and measurement

- Preserve the existing site's design, navigation, routes, and working App Store links.
- Keep each page's title, H1, description, and content focused on its distinct role.
- Review product facts and screenshot captions against the current app.
- Validate local links, image paths, phone layouts, and downloadable files.
- Publish through FixLog's existing workflow only after the changes are reviewable and checked.
- Measure non-brand impressions and clicks for the affected pages when Search Console access is available. No search-volume or ranking estimate has been assigned to these candidate topics.
