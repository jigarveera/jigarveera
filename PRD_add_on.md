Codex Add-On Implementation Prompt
JigarVeera.in — Contact, Service SEO, Mobile Navigation, Motion, 3D and Work Experience
Use this prompt together with `PRD.md`. It extends and clarifies the existing product requirements; it does not replace them. Preserve the original architecture, visual direction, accessibility rules, performance budgets and content-integrity requirements.
Existing requirements confirmed
The current PRD already includes:
A dedicated `/contact` route.
A detailed inquiry form with validation, lead storage, confirmation email and WhatsApp behavior.
A homepage contact CTA section.
Service-specific SEO metadata, canonical URLs, sitemap, robots, Open Graph and structured data.
A `/work` index and `/work/[slug]` case-study routes.
Implement the additions below to make those areas more complete, interactive and conversion-focused.
---
1. Primary objective
Upgrade JigarVeera.in into a polished, high-conversion 3D portfolio that feels active and technically impressive while remaining professional, fast, mobile-friendly, accessible and easy for international buyers to understand.
The implementation must:
Add a complete contact form section to the homepage as well as the dedicated contact page.
Fully optimize every service and project route for search discovery and sharing.
Fix the mobile navigation content appearing or bleeding into the page while scrolling.
Add purposeful scroll animations and project-related 3D scenes.
Rebuild the work section around expandable project listings and detailed project routes.
Add truthful live-feeling UI elements without fake activity, fake statistics or fabricated availability.
2. Non-negotiable implementation rules
Use the stack and folder structure already defined in `PRD.md`.
Use Server Components by default and Client Components only where interaction is required.
Keep every important heading, paragraph, service, project summary and CTA as semantic HTML, not WebGL text.
Do not hide required information behind hover. Hover effects must have keyboard, focus and touch equivalents.
Respect `prefers-reduced-motion` and the site's Reduce Effects control.
Do not introduce horizontal scroll, scroll hijacking or layout shifts.
Never fabricate clients, project metrics, reviews, availability, visitor counts or live-user indicators.
Reuse typed data objects for services, packages, projects and contact options. Do not duplicate content across routes.
Do not remove or regress any existing PRD requirement.
---
3. Homepage contact form section
Replace the small homepage form teaser with a complete, conversion-focused contact section near the end of the homepage.
Layout
Use a two-column layout on desktop and a single column on mobile.
Left column: headline, reassurance, contact methods, response expectation, location/time-zone note and contextual 3D visual.
Right column: complete inquiry form in an elevated but restrained panel.
Suggested heading: Let's build something that moves your business forward.
Suggested supporting copy: Tell me what you are building, where you are today and what success should look like. I will reply with the most useful next step.
Include visible links for domain email and WhatsApp.
Add a clear link to `/contact` for visitors who prefer the full contact experience.
Homepage fields
Use a shorter version of the canonical contact schema:
Full name — required.
Work email — required.
Company — optional.
Project type — required.
Services — multi-select.
Budget range — required.
Project summary — required, 100–2,000 characters.
Desired launch date — required or Flexible.
Consent to receive a response — required.
The homepage and `/contact` forms must share the same validation primitives and server endpoint. Do not maintain two unrelated form implementations.
Form behavior
Support preselection from `service`, `package`, `project` and `source` query parameters.
Preserve entered values after recoverable server errors.
Show accessible inline errors and an error summary.
Show pending, success and error states without changing the panel's overall dimensions dramatically.
Prevent duplicate submission while pending.
Include spam prevention, rate limiting and server-side validation as specified in the original PRD.
Send analytics events without names, email addresses or message content.
After success, show the expected next step and offer a user-initiated WhatsApp link as an optional faster follow-up.
Homepage contact visual
Create a lightweight 3D Connection Node related to the site's digital-workshop concept:
Small nodes representing Web, Mobile, Systems and 3D connect to a central JV node.
Subtle pulses can travel toward the center when the section enters view.
Pointer response is decorative and restrained.
Stop animation when offscreen or when the tab is hidden.
Use a static poster/CSS fallback on lite/static tiers.
Keep the form fully usable if the scene fails.
---
4. Dedicated `/contact` page
Keep the existing `/contact` route and expand it into the canonical lead-capture page.
Required page structure
Outcome-led hero with one H1.
Short explanation of the inquiry and response process.
Complete contact form.
Direct contact cards for email and WhatsApp.
Project-fit guidance: ideal projects, minimum practical scope and what information helps create an estimate.
Three-step next-process strip: Review request → Clarify scope → Proposal/discovery.
Compact FAQ covering response time, international clients, NDA/confidential work, budgets and project ownership.
Privacy reassurance with a link to `/privacy`.
Full contact fields
Retain all fields from `PRD.md`:
Full name.
Work email.
Company.
Existing website.
Country/time zone.
Project type.
Services.
Business goal/project description.
Budget range.
Desired launch date or Flexible.
Referral source.
Brief URL.
Consent to receive a response.
Contextual entry behavior
`/contact?service=web-development` preselects Web Development.
`/contact?package=business-website` preselects that package and its related service.
`/contact?project=<slug>` displays a removable context chip such as “Discussing: Project Name.”
A user must be able to change every preselected value.
Preserve only non-sensitive selection state in the URL. Never place names, email addresses or project descriptions in query parameters.
---
5. Service SEO implementation
Set up SEO for the service index and every individual service route. SEO must help buyers understand the page; do not create thin, repetitive or keyword-stuffed pages.
Indexable service routes
`/services`
`/services/web-development`
`/services/mobile-app-development`
`/services/business-systems`
`/services/3d-web-experiences`
`/services/seo-performance`
Add `/services/ecommerce-development` if e-commerce has enough unique content to support a useful standalone route; otherwise keep it within Web Development.
Add `/services/maintenance-support` if ongoing care has a real package and distinct content; otherwise keep it within the service index and pricing page.
Search intent mapping
Route	Primary intent	Supporting concepts
`/services`	freelance web and app development services	custom software developer, India, international clients
`/services/web-development`	custom website development	Next.js websites, business websites, landing pages, responsive development
`/services/mobile-app-development`	mobile app development	React Native apps, cross-platform MVP, Android and iOS
`/services/business-systems`	custom business software	admin panel, employee portal, HRMS, CRM, operations dashboard
`/services/3d-web-experiences`	3D website development	interactive product experience, React Three Fiber, WebGL portfolio
`/services/seo-performance`	technical SEO and website performance	Core Web Vitals, metadata, structured data, performance optimization
`/services/ecommerce-development`	e-commerce website development	product catalog, checkout, payments, order management
`/services/maintenance-support`	website and app maintenance	monitoring, updates, bug fixes, performance care
Treat this table as a content map, not an instruction to repeat exact phrases unnaturally.
Metadata
For each indexable service route:
Generate a unique, human-readable title and description from typed service data.
Use an absolute canonical URL on `https://jigarveera.in`.
Add Open Graph and X/Twitter metadata with a service-specific social image.
Set robots directives intentionally; drafts and incomplete service routes must be `noindex` and excluded from the sitemap.
Use a single descriptive H1 and a logical H2/H3 outline.
Avoid title/description truncation by keeping copy concise, but optimize for clarity rather than a rigid character count.
Suggested title pattern:
`{Service Name} for Businesses | Jigar Veera`
Suggested description pattern:
`Custom {service} designed around your brand, users and business goals. Explore deliverables, process, timelines and starting prices.`
On-page content requirements
Each service page must include:
Clear outcome and intended buyer.
Problems solved.
Understandable deliverables.
Relevant packages and starting-price language.
Typical process and timeline.
Related industries/use cases.
Related truthful case studies.
Inclusions and exclusions.
Visible FAQs based on genuine buyer questions.
Internal links to relevant work, pricing, process and contact routes.
Contact CTA that passes the service slug to `/contact`.
Structured data
Use `Person` and `ProfessionalService` data where appropriate and truthful.
Add `Service` structured data to individual service pages.
Add `BreadcrumbList` to service and project detail routes.
Add `FAQPage` only when the questions and answers are visibly rendered and the markup is valid for the actual page.
Keep business name, URL, email and service areas consistent across structured data and visible content.
Do not add review, rating or award schema without genuine visible evidence.
Technical SEO
Implement `generateMetadata` for typed service and project content.
Generate `sitemap.xml` only from complete, indexable routes.
Configure `robots.txt` for production and block indexing on preview deployments.
Create useful `not-found` behavior for invalid service and project slugs.
Ensure server-rendered content and links exist before client motion/3D hydration.
Include descriptive image alt text, explicit media dimensions and optimized social images.
Add canonical handling for `/work` filters so query-parameter combinations do not create duplicate indexable pages.
Verify no accidental `noindex`, duplicate H1, missing canonical, broken internal link or structured-data error remains before release.
Do not promise rankings or traffic results.
---
6. Mobile navigation bug fix
Bug
On mobile, menu/drawer content becomes visible or appears over the page while the user scrolls, even when the menu should be closed.
Required diagnosis
Inspect the current header, drawer, animation and stacking-context implementation. Check for:
A closed drawer that remains translated just outside the viewport and becomes visible during overscroll.
Missing `overflow-x: clip` or safe overflow containment.
Incorrect `position: absolute` instead of a viewport-level fixed overlay.
A transformed parent creating an unexpected fixed-position containing block.
Incorrect `z-index` or new stacking contexts created by transforms, filters or isolation.
Drawer content remaining focusable or visible while opacity is zero.
Animation exit state not being unmounted after completion.
Body scrolling underneath the open drawer.
Desktop/mobile navigation variants overlapping at a breakpoint.
Required solution behavior
Render the open mobile drawer in a viewport-level portal or an equivalent root overlay not trapped by a transformed header ancestor.
Use `position: fixed; inset: 0` for the overlay and a documented z-index layer token.
Mount drawer content only while opening/open/closing, then unmount it after the exit animation.
When closed, content must be absent from the accessibility tree and must not accept focus or pointer input.
Lock body scrolling while open and restore the previous scroll position on close.
Trap focus while open; support Escape, backdrop click and close button.
Return focus to the menu trigger after closing.
Add `aria-expanded`, `aria-controls` and an accessible drawer label.
Prevent horizontal overflow without clipping intentionally positioned focus outlines.
Respect safe-area insets on iOS.
Close the drawer when a route is selected or the viewport crosses into the desktop breakpoint.
Do not solve the bug by globally applying `overflow: hidden` in a way that breaks sticky sections or focus visibility.
Regression tests
Add Playwright coverage that:
Opens and closes the drawer at 320×568, 360×800 and 390×844.
Scrolls from hero to footer with the drawer closed and confirms no menu item is visible or focusable.
Opens the drawer after the page is scrolled and confirms it fills the viewport.
Verifies background scroll is locked while open.
Verifies Escape, link selection and backdrop click close it.
Verifies focus returns to the trigger.
Repeats the test with reduced motion enabled.
---
7. Scroll animation system
Create a reusable motion system instead of writing unrelated animation logic inside each section.
Components and hooks
`Reveal`: opacity plus small translate/scale reveal.
`StaggerGroup`: controlled child sequencing.
`TextReveal`: line/word reveal used sparingly for large headings only.
`ParallaxLayer`: small bounded movement for decorative elements.
`ScrollProgress`: subtle route or page progress indicator.
`useReducedEffects`: combines OS preference and site-level Reduce Effects setting.
`useSectionActivity`: pauses expensive effects when a section is outside the viewport.
Motion rules
Animate transform and opacity wherever possible.
Sections should remain readable before animation initializes.
Do not replay every animation whenever a visitor slightly re-enters the viewport.
Avoid large pinned sequences on mobile.
Never delay links or form controls to complete an entrance animation.
Use spring motion for direct interactions and restrained easing for editorial reveals.
Use shared motion tokens for durations, easing, distance and stagger.
Reduced-motion mode should use instant state changes or short opacity fades.
Suggested scroll moments
Hero: JV Core assembles while the copy remains stable and readable.
Services: modules align with their corresponding service cards.
Process: a progress path activates as each step enters view.
Work: the selected project row gains depth while its information expands.
Contact: connection nodes converge gently as the section becomes active.
Limit complex scroll-scrubbed 3D sequences to the hero/services transition and one featured-work moment.
---
8. Project-related 3D components
Build 3D components that express the actual project categories and process rather than generic floating shapes.
Required concepts
JV Core — signature hero object from the original PRD.
Service Modules — browser frame, mobile device and dashboard/data panel represented as one coherent modular system.
Project Artifact Viewer — a lightweight 3D stack of screens, cards or device frames showing selected project imagery.
System Map — restrained animated nodes/paths for admin panels, employee systems and connected business workflows.
Connection Node — compact contact-section visual described above.
Integration rules
3D visuals must use project poster images/screenshots as textures only when permission exists.
Each scene needs an HTML description or equivalent adjacent content when it conveys meaningful information.
Dynamically import scenes and display a deliberate poster/CSS fallback before they load.
Reuse one canvas where practical; do not create multiple always-running WebGL contexts down the homepage.
Pause rendering when offscreen and dispose of resources on unmount.
Cap DPR and select the full/balanced/lite/static tier from the original PRD.
Disable expensive post-processing on mobile and low-power tiers.
Do not require dragging, precise pointer gestures or device orientation to access content.
---
9. Work index redesign
Rebuild `/work` as a modern editorial project index with expandable rows/cards.
Page structure
Hero with H1, short positioning statement and truthful project count derived from published data.
Sticky or wrapping filter bar for All, Web, Mobile, Business Systems, 3D and Experiments.
Optional sector filter only when enough projects exist.
Featured project with larger media treatment.
Expandable project listing.
Clear empty state for selected/private work.
Project inquiry CTA.
Expandable listing behavior
Each project entry has a compact state containing:
Project title.
Category/type.
Sector.
Year.
One-line outcome or goal.
Status label: Live, Prototype, Archived or Private.
On hover or keyboard focus on desktop, expand the row to reveal:
Larger project poster or short muted preview.
Challenge and solution summaries.
Jigar's role.
Services and technology tags.
Duration.
Qualified outcome/metric when available.
Links to View case study, Visit live project and Discuss a similar project.
Interaction requirements:
Hover is an enhancement, never the only access method.
Use `focus-within` and an explicit Expand details button for keyboard users.
On touch devices, tapping Expand details opens an accordion-style panel; a separate clear link opens the case study.
Only one row may be expanded automatically at a time on small screens.
Use smooth layout animation without causing the next project to jump unpredictably.
Preserve focus and announce expanded/collapsed state with `aria-expanded` and `aria-controls`.
Do not auto-play audio. Video previews must be muted, short, optional and paused offscreen.
Filtering
Filter from typed project metadata.
Update the visible result count.
If shareable filters are enabled, use a normalized `type` query parameter.
Preserve focus on the selected filter and announce the result count through a polite live region.
Do not index every filter combination as a separate page.
---
10. Project detail route: `/work/[slug]`
Every published project must have a clear, story-led detail page generated from typed project content.
Required structure
Breadcrumbs.
Project hero with title, type, sector, year, role, status and concise outcome.
Large visual/3D Project Artifact Viewer with static fallback.
Project facts rail: services, role, collaborators, duration, platform and technology.
Challenge.
Constraints.
Approach and key decisions.
Solution walkthrough with screenshots/video.
System or user-flow explanation when relevant.
Deliverables.
Outcomes with explicit labels: Measured, Client-reported or Project goal.
Testimonial only when verified and approved.
Live URL/repository links only when public and current.
Previous/next project navigation.
CTA: Discuss a similar project, passing the project slug to `/contact`.
Project-route UX
Add a compact reading-progress indicator.
Highlight the active case-study section in a sticky table of contents on large screens.
Collapse the table of contents into an accessible disclosure on mobile.
Use scroll reveals for supporting media, not for critical text.
Add image zoom/lightbox only if keyboard, focus, touch and Escape behavior are complete.
Handle missing/private media with a designed placeholder, not a broken image.
Return `notFound()` for unknown or unpublished slugs.
Project SEO
Unique metadata, canonical URL and project-specific social image.
`BreadcrumbList` structured data.
Clear indexability flag in project data; private/draft projects must be excluded from metadata discovery and sitemap.
Descriptive alt text and captions for meaningful screenshots.
Internal links to related services and the next relevant case study.
Do not present unverified outcomes as facts.
---
11. Live-feeling site elements
Add active, responsive details that make the site feel alive without faking business activity.
Allowed elements:
Real local time derived from a configured time zone.
Manually configured availability state with a last-updated value.
Subtle animated availability indicator only when the availability statement is true.
Scroll-progress indicator.
Active navigation state.
Filtered-project result count.
Pointer-reactive lighting or depth on capable non-touch devices.
Technology or service labels that react to the active section.
Current year derived at render time.
Small “system online” visual only if labeled as the website experience status, not as business availability or client activity.
Prohibited elements:
Fake live visitor count.
Fake project bookings or recent sales.
Fake real-time notifications.
Fake client logos, testimonials, metrics or awards.
Randomized availability.
Motion that implies functionality where no action exists.
---
12. Content models
Extend the typed project model to support the redesigned work experience:
```ts
type ProjectStatus = "live" | "prototype" | "archived" | "private";
type ProjectType = "web" | "mobile" | "business-systems" | "3d" | "experiment";
type OutcomeKind = "measured" | "client-reported" | "project-goal";

interface Project {
  title: string;
  slug: string;
  excerpt: string;
  type: ProjectType;
  sector: string;
  year: number;
  status: ProjectStatus;
  featured: boolean;
  published: boolean;
  indexable: boolean;
  clientLabel?: string;
  role: string[];
  collaborators?: string[];
  services: string[];
  technologies: string[];
  duration?: string;
  challenge: string;
  constraints?: string[];
  approach: string;
  decisions?: string[];
  deliverables: string[];
  outcomes?: Array<{
    label: string;
    value: string;
    kind: OutcomeKind;
    sourceNote?: string;
  }>;
  media: Array<{
    type: "image" | "video" | "model";
    src: string;
    alt?: string;
    caption?: string;
    poster?: string;
  }>;
  liveUrl?: string;
  repositoryUrl?: string;
  ogImage?: string;
}
```
Validate content at build time. Reject duplicate slugs, missing required alt text, invalid URLs, invalid project/service references and contradictory states such as `published: false` with `indexable: true`.
---
13. Suggested component structure
```text
src/components/
  contact/
    ContactSection.tsx
    ContactForm.tsx
    ContactMethods.tsx
    ProjectContextChip.tsx
  layout/
    MobileNav.tsx
    MobileNavPortal.tsx
    ScrollProgress.tsx
  motion/
    Reveal.tsx
    StaggerGroup.tsx
    TextReveal.tsx
    ParallaxLayer.tsx
    useReducedEffects.ts
    useSectionActivity.ts
  work/
    WorkFilters.tsx
    ProjectList.tsx
    ExpandableProjectRow.tsx
    ProjectMedia.tsx
    ProjectFacts.tsx
    ProjectTableOfContents.tsx
  three/
    JVCoreScene.tsx
    ServiceModulesScene.tsx
    ProjectArtifactScene.tsx
    SystemMapScene.tsx
    ConnectionNodeScene.tsx
    SceneFallback.tsx
  seo/
    JsonLd.tsx
    BreadcrumbJsonLd.tsx
    ServiceJsonLd.tsx
```
Names may be adapted to the existing codebase, but responsibilities should remain separated.
---
14. Implementation order
Audit the existing routes, content models, mobile navigation and motion code.
Reproduce the mobile menu bug and add a failing regression test.
Fix mobile navigation, accessibility and scroll locking; make the regression test pass.
Normalize service and project data schemas.
Implement service/project metadata, canonical URLs, sitemap rules and structured data.
Build the shared contact form and server-side submission flow.
Add the homepage contact section and expand `/contact`.
Build the semantic `/work` and `/work/[slug]` experience without 3D dependency.
Add the reusable scroll-motion system.
Add 3D scenes progressively with fallbacks and performance tiers.
Add truthful live-feeling elements.
Complete accessibility, responsive, SEO, performance and cross-browser QA.
Do not begin by adding heavy 3D assets before the semantic routes, forms, navigation and content are stable.
---
15. Acceptance criteria
The add-on is complete only when all of the following are true:
The homepage contains a complete working contact form section.
`/contact` contains the full form, direct email/WhatsApp options, process guidance, FAQ and privacy reassurance.
Service/package/project CTAs preselect the correct contact context and the user can change it.
Contact validation works on client and server and handles success/error states accessibly.
Every complete service route has unique metadata, canonical URL, internal links and valid relevant structured data.
Sitemap and robots behavior are correct for production, previews, drafts and private work.
The mobile menu never appears, bleeds into content or remains focusable while closed at supported viewport sizes.
Opening the menu locks background scroll; closing it restores scroll and trigger focus.
Scroll effects work without hiding content and respect reduced motion.
Project-related 3D visuals have fallbacks, pause offscreen and do not block interaction.
`/work` supports accessible filters and expandable project content for mouse, keyboard and touch.
Every published project has a valid `/work/[slug]` page with a structured case-study narrative.
Unknown, draft and private project routes cannot leak unpublished content.
No meaningful information is hover-only.
No fake live data, client proof or project outcome is present.
There is no horizontal overflow at 320px width.
Lighthouse and Core Web Vitals targets from the original PRD remain the release targets.
Automated tests cover contact submission, mobile navigation regression, work filtering/expansion, metadata generation, unknown slugs and reduced-motion behavior.
16. Codex completion response
After implementation, report:
Files and routes created or changed.
The root cause of the mobile menu bug and the exact fix.
SEO features implemented and how incomplete/private routes are handled.
Contact submission flow and required environment variables.
Motion and 3D fallbacks by performance tier.
Tests run and their results.
Any real content, credentials, project media or decisions still required from Jigar.