# Quiet Tools SEO and website redesign plan

Prepared September 10, 2026. Status: implementation in progress; first studio redesign and technical SEO pass published and verified.

Updated September 10, 2026: the user selected the Refero Awesomic style page as the visual basis for the redesign. The initial implementation is now live at https://quiettoolsapps.com/.

## Implementation log — September 10, 2026

Completed in the first pass:

- Rebuilt the shared studio styling around neutral surfaces, rounded cards, bold sans-serif type, and dark actions. DM Sans is now self-hosted with 400, 500, and 600 weights and preloaded for the primary layout.
- Replaced the duplicated, continuously animated carousel with six static app cards. The hero uses actual Hobby Tracker screenshots; other app cards retain their real icons until suitable screenshots are supplied.
- Added About and maintenance-app comparison pages, linked from the homepage and shared navigation.
- Updated homepage, directory, and Hobby Tracker metadata and added Organization structured data.
- Aligned Astro, generated canonicals, sitemap URLs, and the CNAME file with HTTPS non-www. Set consistent trailing slashes.
- Enabled HTTPS enforcement on the existing GitHub Pages site. Verified the host setting and a live HTTP 301 redirect to HTTPS.
- Created optimized WebP versions of the studio mark, six app icons, and nine Hobby Tracker screenshots. Optimized assets total approximately 552 KB. Original assets remain available.
- Preserved Hobby Tracker's feature content, App Store links, support form, and privacy disclosures while adapting its surrounding page styling.

Validation completed:

- Production build succeeded for nine HTML pages.
- Every built page has one H1 and a canonical on the intended domain.
- Built internal page links and image paths resolve to local output files.
- Desktop homepage reviewed at 1440px; phone homepage and Hobby Tracker inspected at 375px; comparison page reviewed at 768px. No horizontal overflow detected in those views.
- Mobile navigation opens and Escape closes it. Product and comparison navigation remain accessible.
- Git whitespace check passed.
- Published source commit `f527e4b` through the existing GitHub Pages workflow. [Deployment run](https://github.com/velocats/quiettoolsapps.com/actions/runs/34505710003) completed successfully.
- Live homepage, About, and maintenance comparison pages return the new content and HTTPS non-www canonicals. The live sitemap contains the new routes without www URLs, and the self-hosted font is accessible.
- Prepared [the FixLog content implementation brief](fixlog-content-implementation.md) after inspecting the local FixLog source and existing screenshot inventory. No FixLog source changes have been made yet.

Remaining before calling the complete studio milestone finished:

- Full accessibility, text-zoom, and reduced-motion review across every page; measured mobile performance and field Core Web Vitals have not been collected.
- Consider adding authentic screenshots for the remaining app cards; their real app icons are currently used as the visual identifier.
- Publication and initial live checks are complete through GitHub Pages. No Sites migration was performed.
- Search Console baseline, sitemap submission, and Google-selected canonical inspection require property access.
- FixLog content upgrades and the later resource/outreach work are still pending and belong to their respective product workspaces.

## Objective

Improve qualified organic discovery and app downloads across the Quiet Tools portfolio. Use FixLog to compete with Maintainly on maintenance-record searches that match FixLog's capabilities. Strengthen quiettoolsapps.com as the studio, product-selection, and Hobby Tracker website.

Ranking FixLog above Maintainly would benefit the business, but would not mean quiettoolsapps.com itself ranks above Maintainly. Ranking the studio domain for maintenance searches would require a separate content-consolidation decision. Do not migrate product domains before reviewing their traffic, backlinks, and indexed pages.

## Evidence and limits

The initial review inspected the user-supplied Ubersuggest report, public Quiet Tools and Maintainly pages, selected FixLog pages, and the Quiet Tools repository. Live HTTP checks covered the homepage variants, apps page, Hobby Tracker page, robots.txt, sitemap, and a nonexistent URL.

The audit did not include Search Console access, a complete backlink inventory, a full crawl of every product site, measured Core Web Vitals, or a controlled Google ranking baseline. Keyword opportunities below are hypotheses to validate, not verified low-difficulty terms. No traffic or ranking outcome is guaranteed.

The private report URL contains access and contact parameters and is intentionally not copied into this document. The report was identified as Maintainly.com, English, United States. Selecting its competitor-gap section redirected to registration; the individual SEO issues were not inspected.

### Competitor report snapshot

| Metric | Reported value | Interpretation |
| --- | ---: | --- |
| SEO score | 97 | Ubersuggest audit score, not a Google ranking signal |
| Organic traffic | 782 | Third-party estimate; period unclear in the displayed summary |
| Organic keywords | 504 | Estimated coverage |
| Backlinks | Approximately 6,000 | Links, not unique referring domains or verified quality |
| SEO issues | 15 | Details unavailable in this review |
| Positions 1–3 | 5 keywords | Limited top-three coverage |
| Positions 4–10 | 82 keywords | First-page presence |
| Positions 11–50 | 211 keywords | Outside top 10 |
| Positions 51–100 | 206 keywords | Weak rankings |

417 of 504 keywords, approximately 83%, were outside the top 10. This suggests potential opportunities but does not establish that Quiet Tools can easily win those searches. Report quick wins are recommendations for Maintainly itself, not confirmed competitor gaps.

Maintainly has active educational content, industry pages, team workflows, and a free tier. Generic claims about simplicity, small-business suitability, or being cheaper than paid CMMS products will not adequately distinguish FixLog.

## Verified Quiet Tools findings

| Priority | Finding | Evidence | Action |
| --- | --- | --- | --- |
| High | Canonicals disagree with the live host | Non-www homepage returns 200 and declares www canonical; www requests end at non-www. Apps and Hobby Tracker have the same mismatch. | Standardize on HTTPS non-www. |
| High | Sitemap uses www | Sitemap index and page entries use www; robots.txt references non-www. | Generate all URLs from one consistent site setting. |
| High | HTTP homepage serves content | HTTP homepage returned 200 without upgrading to HTTPS in the test. | Configure permanent HTTPS redirects and recheck deployment behavior. |
| High | Limited discovery-page coverage | Seven sitemap entries: homepage, apps, Hobby Tracker, and four support/privacy pages. | Add useful content according to domain ownership below. |
| Medium | Broad homepage and directory metadata | Current titles emphasize brand and general purpose. | Clarify categories and search intent. |
| Medium | Large source images | Hero illustration approximately 768 KB; logo mark 488 KB; Hobby Tracker hero screenshot 656 KB; several screenshots 470–790 KB. | Resize and compress, then measure performance. These are file sizes, not measured transfer totals. |
| Medium | Limited studio identity content | Existing site offers a short studio introduction and contact information. | Add a substantive About page and consistent publisher information. |
| Low | Repeated carousel content | Homepage renders duplicate app cards for looping. | Consider a static presentation for usability; do not treat repetition as an established ranking penalty. |

### Existing strengths to preserve

- Crawlable HTML, titles, descriptions, and canonical infrastructure.
- Accessible sitemap and permissive robots.txt.
- A real 404 response for the nonexistent URL tested.
- Hobby Tracker SoftwareApplication structured data.
- Lazy loading on many screenshots.

### Relevant source files

- `astro.config.mjs`: current `site` setting uses `https://www.quiettoolsapps.com`.
- `src/pages/robots.txt.ts`: sitemap reference already uses non-www.
- `src/components/Layout.astro`: generates canonical and social URLs.
- `src/pages/hobby-tracker.astro`: application schema and product content.
- `src/components/Hero.astro`: homepage heading and hero artwork.
- `src/pages/apps.astro`: directory metadata.
- `src/components/AppGrid.astro`: duplicate carousel markup.

## Domain and topic ownership

Retain existing product domains for now. This is a proposed editorial allocation, not a completed audit of every domain.

| Domain or section | Primary purpose |
| --- | --- |
| quiettoolsapps.com | Studio identity, portfolio discovery, product selection |
| quiettoolsapps.com/hobby-tracker/ | Hobby journals, activity records, hobby recaps |
| fixlogapp.com | Business equipment records and maintenance tracking |
| aroundthehouseapp.com | Household maintenance, warranties, and service history |
| homesteadkeeper.com | Homestead records and seasonal property planning |
| mealcostapp.com | Meal costs and household food spending |
| thetripquestapp.com | Family road-trip games |

Create a useful studio comparison explaining FixLog, Around The House, and Homestead Keeper, with concrete examples and links to the appropriate product. Avoid duplicating full product pages across domains. Validate overlapping terms before assigning new content.

## Competitive positioning

Proposed FixLog positioning: maintenance history, documents, reminders, and costs for an owner-operated business using Apple devices.

FixLog's reviewed website explicitly describes no technician assignment, user roles, Android app, or web dashboard. State these boundaries clearly. Do not describe FixLog as a full replacement for team CMMS workflows.

The reviewed pricing page advertised $0.99 monthly and a $7.99 lifetime unlock. Reverify prices, purchase terms, and features before publishing comparisons. A lifetime option is relevant to buyers seeking to avoid recurring subscriptions, but comparisons must acknowledge Maintainly's free tier.

## Candidate search opportunities

Prioritize using existing page impressions, actual Google results, search intent, and conversion relevance. Reuse existing pages when they already satisfy the same intent.

| Candidate theme | Destination | Required improvement |
| --- | --- | --- |
| Simple CMMS alternative for small businesses | Existing FixLog CMMS-alternative page | Decision criteria, real demonstration, accurate limitations |
| Equipment maintenance log app for iPhone | Existing FixLog repair-log content | Record creation, screenshots, costs, reminders, export example |
| QR-code equipment maintenance records | Existing FixLog QR page | Complete create–print–scan–record walkthrough |
| Maintenance tracker without subscription | FixLog pricing and supporting product copy | Lifetime option, included features, platform restrictions |
| Equipment maintenance log template | FixLog resource, after checking existing coverage | Ungated download, completed example, field explanations |
| Maintainly alternative for a solo operator | Focused comparison, if justified by demand | Current sourced comparison and suitability criteria |
| Farm equipment service records | FixLog or Homestead Keeper, according to verified workflow | Real agricultural example; no unverified automation claims |

Maintainly already has substantial agricultural content. Treat this as a narrower workflow opportunity, not an unoccupied topic. Do not promise meter-based scheduling unless the relevant product actually supports it.

## Visual direction — Refero Awesomic reference

Reference: [Awesomic design system on Refero](https://styles.refero.design/style/8512e28d-5385-4c20-a336-214568c4370c), reviewed September 10, 2026, including its preview and published design guidance. Use the showcased Awesomic design as inspiration, rather than the surrounding Refero documentation interface.

### Reference characteristics to adopt

Use a neutral editorial grid, generous rounded cards, fine borders, bold geometric typography, dark primary buttons, and restrained orange accents. Reference values: canvas `#f4f4f5`, cards `#ffffff`, main ink `#09090b`, body ink `#18181b`, muted ink `#52525b`, border `#ececee`, accent `#ff5a00`. Start with a 1200px container, 80px section spacing, 28px card padding, 36px card corners, and 14px control corners. Desktop display type is 56–64px at weight 600; section headings are 32–40px. The source names Cosmica with DM Sans as a substitute. Use borders rather than prominent card shadows.

### Quiet Tools adaptation

The following are project-specific design decisions, not claims about the reference site:

- Make the apps the visual focus. Replace the existing decorative gradient/illustration-led homepage with actual app imagery and concise explanations of what each app does.
- Retain recognizable Quiet Tools identity and original app icons. Product screenshots keep their real colors; the website chrome stays neutral. Do not recolor screenshots to force a monochrome appearance.
- Use DM Sans with a system sans-serif fallback as the initial implementation choice. Use Cosmica only if suitable licensed files are already available. Keep the required font weights small and avoid layout shifts during loading.
- Set reading copy to 16–18px with approximately 1.55 line height, and constrain long-form text to about 65 characters per line. Scale mobile hero headings to 36–44px.
- Use orange for occasional meaningful status markers, not every card or button. Pair orange fills with sufficiently contrasting dark text; do not assume small white lettering is readable on that color.
- Keep ordinary text links identifiable, with visible keyboard focus and hover states. Controls should provide at least a 44px interaction area. Use stronger borders wherever a control needs a clear boundary.
- On phones, use 20px page gutters, 20–24px card padding, and 48–56px section gaps. Let cards stack in reading order with no clipped text or horizontal page overflow.
- Prefer short color/border transitions. Respect reduced-motion preferences and avoid rotating headlines or automatic scrolling.
- Use verified product benefits as supporting evidence. Do not borrow client logos, testimonials, credentials, metrics, photography, or brand assets from the reference.

### Page composition

| Area | Planned composition | User purpose |
| --- | --- | --- |
| Header | Quiet Tools identity, Apps/About/Support links, and one prominent View apps action | Immediate orientation |
| Homepage hero | Descriptive heading and short introduction alongside a composed preview of actual apps | Explain the portfolio quickly |
| App collection | Static responsive grid: three columns where comfortable, two on tablets, one on phones | Make all six apps discoverable without waiting for a carousel |
| App card | App icon, readable screenshot preview, name, concise purpose, platform/status information, and a specific product link | Help visitors select an app |
| Product selection | Small comparison of overlapping maintenance apps, organized by household/business/homestead needs | Direct visitors to the right product |
| Studio introduction | Brief explanation of the maker and design principles, optionally in a contrasting dark section | Establish identity and trust |
| Footer | Grouped app, studio, support, and privacy links | Provide a useful final navigation point |
| Hobby Tracker | Matching website typography and controls, with its own authentic app imagery and feature demonstrations | Preserve product personality within the studio system |
| Guides, About, support, privacy | Readable article layout with clear headings and restrained callouts | Support reading and task completion |

Initial redesign scope is quiettoolsapps.com, including its existing pages and planned studio content. The separate product domains retain their identities; this reference can inform later coordinated work without automatically restyling them.

### Implementation and review criteria

Implement shared tokens in `src/styles/global.css` and update `Layout.astro`, `Header.astro`, `Footer.astro`, `Hero.astro`, `AppCard.astro`, `AppGrid.astro`, and the affected page styles. Retain the current Astro architecture; no framework migration is required for this direction.

- [x] Establish shared color, type, spacing, border, and radius tokens.
- [ ] Build the homepage and one app card first, then apply the system to the directory and remaining studio pages.
- [x] Replace the looping homepage carousel with the static app grid and remove redundant duplicate markup and animation code.
- [x] Replace decorative hero imagery with optimized, real app previews.
- [ ] Preserve meaningful headings, crawlable links, metadata, schema, support access, and canonical routes through the redesign.
- [ ] Finish text-zoom review; responsive layout and initial keyboard checks have passed at the reviewed widths.
- [ ] Check text and control contrast, focus visibility, image alternatives, reduced motion, and absence of unintended overflow.
- [ ] Confirm all six apps are discoverable, each product destination works, and App Store actions remain obvious on product pages.
- [ ] Run the production build and repeat representative mobile performance checks after styling changes.

Acceptance: the shared website surfaces visibly follow the selected reference, the app identities remain recognizable, and visitors can read, compare, navigate, and download without relying on animation. Evaluate this as a usability and presentation improvement; styling alone is not a ranking guarantee.

## Implementation backlog

### P1 — Canonical, sitemap, and HTTPS consistency

- [x] Set Astro's site origin to `https://quiettoolsapps.com`.
- [x] Align schema, social, sitemap, and canonical URLs with that origin.
- [ ] Configure HTTP and www variants to permanently redirect to the equivalent HTTPS non-www URL, preserving path and query where appropriate.
- [x] Use consistent trailing-slash behavior for canonical pages.
- [x] Build the site and inspect generated canonical and sitemap URLs.
- [ ] Verify deployed headers and final destinations on representative pages.
- [ ] Submit the corrected sitemap and inspect representative URLs in Search Console when access is available.

Acceptance: intended URLs return 200; alternate host/protocol variants permanently redirect without loops; canonical and sitemap URLs match final destinations; nonexistent URLs remain 404. Record Google-selected canonicals separately because Google may take time to recrawl.

### P2 — Refero-based redesign, studio metadata, and product selection

- [ ] Implement and review the visual-direction checklist above alongside the content changes below.

- [ ] Review these proposed titles against final page content:
  - Homepage: `Quiet Tools — Practical Apps for Hobbies, Home & Everyday Life`
  - Apps: `Explore Quiet Tools Apps — Hobbies, Maintenance, Meals & Travel`
  - Hobby Tracker: `Free Hobby Tracker App for iPhone, iPad & Mac | Quiet Tools`
- [ ] Consider Hobby Tracker H1: `A private hobby journal for iPhone, iPad, and Mac`; preserve existing emotional copy as supporting text.
- [x] Add a substantive About page using verified publisher details.
- [ ] Add accurate Organization information and validate existing application schema against current Google guidance.
- [x] Write a product-selection comparison for overlapping maintenance apps.
- [x] Link contextually to each product's most relevant page.

Acceptance: distinct page purposes and metadata; accurate claims; no invented ratings or testimonials; working links; valid structured data. Structured data is not a guarantee of rich results.

### P3 — Image and mobile performance

- [x] Generate small, appropriate logo variants.
- [ ] Resize and encode hero artwork and screenshots efficiently, using modern formats where suitable.
- [ ] Supply responsive image sizes and preserve image dimensions.
- [ ] Preserve lazy loading below the fold; prioritize visible hero content appropriately.
- [ ] Measure representative pages on mobile before and after changes.
- [ ] Verify the planned static app grid removes carousel duplication and automatic animation without reducing product discoverability.

Acceptance: visual quality and responsive layouts remain sound; image delivery is smaller; no introduced layout shift or interaction regressions. Where field data exists, target good Core Web Vitals: LCP ≤2.5 seconds, INP ≤200 ms, CLS ≤0.1 at the 75th percentile. Record lab results separately from field data.

### P4 — Improve three existing FixLog pages

- [ ] CMMS-alternative page: demonstrate the owner-operator workflow and explain when team software is preferable.
- [ ] Repair-log page: show a complete equipment record, work performed, expenses, next reminder, and export.
- [ ] QR page: show an actual label and scan sequence; explain device, app, and record-access requirements.

Each page should provide a direct answer, real screenshots, a completed example, verified pricing and platforms, limitations, a clear App Store link, and contextual links to related guides.

Acceptance: each page satisfies a distinct intent, demonstrates the real product, and offers a clear next action. Preserve existing URLs unless a verified reason requires a change.

### P5 — Useful resources and comparisons

- [ ] Check the existing resource inventory before creating overlapping pages.
- [ ] Publish a maintenance-log template with asset ID, model, serial number, service date, work performed, parts, cost, vendor, and next due date.
- [ ] Include a completed example and an ungated downloadable version.
- [ ] Publish one Maintainly comparison only if search demand and product fit justify it.
- [ ] Source and date competitive claims; acknowledge Maintainly's free tier and team capabilities.
- [ ] Prepare relevant outreach candidates among equipment-service businesses, independent-business publications, and Apple-focused reviewers.

Acceptance: resources are usable independently of downloading the app; comparisons are fair and current; pages receive relevant internal links. Outreach messages must be reviewed and explicitly authorized before sending. Do not buy bulk links or treat total backlink count as the objective.

## 90-day sequence

Timing begins when implementation starts; workstreams may overlap.

| Period | Work | Completion measure |
| --- | --- | --- |
| Days 1–7 | Canonical/HTTPS fixes, sitemap verification, Search Console baseline | Redirects and canonicals agree; baseline recorded where access permits |
| Days 8–21 | Refero-based studio redesign, metadata, publisher information, images, navigation | Shared visual system, responsive page review, clear page purposes, and measured mobile performance |
| Days 15–35 | Three existing FixLog page upgrades | Three demonstrated, distinct workflows |
| Days 30–60 | Maintenance-log resource and one justified comparison | Useful resource published and linked |
| Days 60–90 | Review queries and conversion evidence; improve pages with traction | Next work selected using observed demand |

This schedule is a delivery sequence, not a promised ranking timeline.

## Measurement and decision rules

Establish a dated baseline before publishing changes. Keep branded and non-branded performance separate, and segment by domain, landing page, country, and device where useful.

Track:

- Search Console impressions, clicks, CTR, and positions for relevant query groups.
- Google-selected versus declared canonicals and indexing status.
- Relevant queries entering the top 20 and top 10.
- App Store visits, downloads, and purchases where attribution is available.
- Resource downloads if measurement can respect the site's privacy commitments.
- Relevant referring domains and the pages they link to.
- Mobile performance, distinguishing field data from lab measurements.

Use consistent reporting windows, such as the latest 28 days against the preceding 28 days, while considering low sample sizes, seasonality, and release dates. Do not present average position as a stable universal ranking.

Decision rules:

- Impressions with weak CTR: review intent, title, snippet, and competing result formats.
- Rankings near page one: deepen relevant evidence and improve internal links before adding overlapping pages.
- Clicks without product engagement: inspect product fit, clarity, and download path.
- No impressions: verify discovery/indexing first, then reassess demand and intent.
- Multiple pages serving one intent: evaluate consolidation using actual query data.

Do not install tracking that conflicts with existing privacy claims. Search Console and available App Store reporting can establish an initial baseline without assuming new behavioral analytics.

## Dependencies and next decision

- Search Console access or exports are needed to prioritize using first-party search data.
- Hosting configuration access is needed for deployed redirect changes.
- FixLog repository access and current product facts are needed for its page improvements.
- Actual app screenshots, sample records, and export examples are needed for credible demonstrations.
- Review existing product-domain traffic and backlinks before any migration decision.

Recommended starting scope: implement the Quiet Tools canonical/HTTPS fixes, then the Refero-based studio redesign and metadata improvements, followed by the three existing FixLog page upgrades. No migration, broad blog expansion, or ranking guarantee is part of this plan.

## Sources

Public pages reviewed September 10, 2026; content and pricing may change.

- [User-selected visual reference: Awesomic on Refero](https://styles.refero.design/style/8512e28d-5385-4c20-a336-214568c4370c)

- [Quiet Tools](https://quiettoolsapps.com/)
- [Quiet Tools robots.txt](https://quiettoolsapps.com/robots.txt)
- [Quiet Tools sitemap index](https://quiettoolsapps.com/sitemap-index.xml)
- [Maintainly](https://maintainly.com/)
- [Maintainly articles](https://maintainly.com/articles)
- [Maintainly agriculture](https://maintainly.com/agriculture-cmms)
- [FixLog](https://www.fixlogapp.com/)
- [FixLog CMMS alternative](https://www.fixlogapp.com/cmms-alternative/)
- [FixLog QR workflow](https://www.fixlogapp.com/qr-codes.html)
- [FixLog pricing](https://www.fixlogapp.com/pricing.html)
- [Google canonical guidance](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
- [Google redirects guidance](https://developers.google.com/search/docs/crawling-indexing/301-redirects)
- [Google software application structured data](https://developers.google.com/search/docs/appearance/structured-data/software-app)
- [Google Core Web Vitals guidance](https://developers.google.com/search/docs/appearance/core-web-vitals)
- [Google helpful-content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
