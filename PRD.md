# Product Requirements Document â€” JigarVeera.in 3D Freelance Portfolio

Version: 1.0  
Date: 16 August 2026  
Owner: Jigar Veera  
Implementation audience: Codex and contributing developers  
Status: Ready for design and implementation after content placeholders are confirmed

## 1. Product summary

Build a high-end, mobile-responsive portfolio and service website for Jigar Veera, an independent web, mobile and digital-product developer serving Indian and international clients.

The site must feel cinematic and technically distinctive through a custom 3D visual system, while remaining clear, professional, accessible, SEO-friendly and fast enough to convert business visitors. It must sell website development, mobile-app development, internal business systems, 3D web experiences, SEO/performance work and ongoing support.

The home page provides a complete overview. Dedicated routes provide detailed services, packages, case studies and contact information.

## 2. Product vision

Create the feeling of entering a premium digital workshop: precise, dimensional and alive. Visitors should understand within ten seconds:

1. Who Jigar is.
2. What he builds.
3. Who he builds it for.
4. Why the work is credible.
5. How to discuss a project.

The 3D experience should demonstrate capability, not obscure the sales message. Every critical action and piece of content must remain usable when WebGL, animation or JavaScript-heavy effects are reduced or unavailable.

## 3. Goals and success metrics

### Primary goals

- Generate qualified project inquiries from India and international markets.
- Establish Jigar as a product-minded developer rather than a commodity freelancer.
- Showcase real work through detailed, credible case studies.
- Make complex services and price expectations easy for non-technical buyers to understand.
- Demonstrate advanced frontend/3D capability through the site itself.
- Provide low-friction contact by form, email and WhatsApp.

### Initial success metrics

- At least 3% of relevant visitors click a project/contact CTA.
- At least 20% of visitors who open the contact form complete it.
- At least 40% of submitted leads include a budget and project type.
- Core Web Vitals at the 75th percentile: LCP â‰¤ 2.5 seconds, INP â‰¤ 200 ms and CLS â‰¤ 0.1.
- Lighthouse targets on production mobile runs: Performance â‰¥ 85 on the 3D home page, â‰¥ 90 on content routes; Accessibility â‰¥ 95; Best Practices â‰¥ 95; SEO â‰¥ 95.
- Zero critical accessibility violations in automated testing.
- Zero fake projects, testimonials, results or client claims.

### Non-goals for v1

- A client login or project-management portal.
- A self-service quote calculator that implies a binding price.
- Full blog publishing workflow unless real launch content is ready.
- E-commerce or direct checkout for development packages.
- A website-wide game mechanic that competes with business content.
- A custom CMS/admin panel for Jigar.
- Unmoderated public testimonials or reviews.
- Multilingual content beyond architecture readiness.

## 4. Target audiences

### Startup founder

Needs an MVP, landing page or app. Values speed, clarity, product thinking and a developer who can challenge unnecessary scope.

### Small or mid-sized business owner

Needs a credible website, commerce experience, booking flow or internal tool. Values trust, responsiveness, understandable pricing and post-launch support.

### Operations or HR leader

Needs an admin panel or employee-management workflow. Values role permissions, traceability, reporting and a staged rollout.

### Agency or design studio

Needs a white-label React/Next.js or mobile-development partner. Values dependable delivery, communication and clean handoff.

### International buyer

Needs evidence that remote collaboration will be structured. Values fluent project communication, clear milestones, overlap hours, professional documentation and secure payment/invoicing.

## 5. Brand and messaging

### Brand personality

- Precise
- Inventive
- Calmly confident
- Modern
- Business-aware
- Dependable

Avoid childish gaming aesthetics, generic neon cyberpunk, excessive glassmorphism, floating code logos, stock â€œdeveloper at laptopâ€ imagery and vague claims such as â€œI turn dreams into reality.â€

### Core message

**Digital products built to look remarkableâ€”and work reliably.**

### Supporting statement

**Websites, mobile apps, 3D experiences and internal tools designed around your brand and business goals.**

### Voice

- Direct, concise and jargon-light.
- Use outcomes before implementation details.
- Explain technical differentiators in buyer language.
- Use first person singular for accountability: â€œI design,â€ â€œI build,â€ â€œIâ€™ll respond.â€
- Mention collaborators only where true and clarify their role.

### Proof hierarchy

1. Real case studies and working links.
2. Clear process and deliverables.
3. Technical craft demonstrated by the site.
4. Testimonials only from verified clients.
5. Skills and tools as supporting proof, not the hero message.

## 6. Visual concept: The Digital Atelier

### Signature 3D object

Create a custom abstract **JV Core**: two precision-machined forms suggesting the letters J and V without becoming a literal spinning logo. Around the core, three modular panels represent website, mobile and operations products. As the visitor moves or scrolls, panels assemble, separate and reveal UI fragments.

The object communicates â€œsystems designed and assembled with care.â€ It must feel architectural and premium rather than playful.

### Hero composition

- Dark warm-black background with subtle depth and restrained atmospheric lighting.
- Copy and primary CTA occupy the left or central reading column.
- JV Core occupies the opposite field on desktop, with safe separation from text.
- Pointer movement creates a small parallax response; never require mouse interaction.
- A slow idle motion stops when the page is hidden and respects reduced-motion settings.
- Scroll cue transitions the three modules into the service overview.
- On mobile, use a simplified low-poly/low-draw-call version below the headline or an optimized poster fallback.

### Section-specific 3D language

- Services: three dimensional â€œproduct modulesâ€ for Web, Mobile and Systems.
- Work: case-study tiles arranged as a restrained spatial gallery; standard DOM links remain the interaction source.
- Process: a four-stage orbit/timelineâ€”Discover, Design, Build, Launch.
- CTA: the JV Core resolves into a calm, complete form rather than another intense effect.

### Visual tokens

Proposed direction; centralize tokens so they can be changed without component rewrites.

| Token | Proposed value | Purpose |
| --- | --- | --- |
| Canvas | `#08090B` | Main background |
| Surface | `#111318` | Cards and panels |
| Surface elevated | `#171A21` | Hover and raised areas |
| Text primary | `#F4F1E8` | Warm high-contrast text |
| Text secondary | `#A9AFBC` | Supporting copy |
| Accent primary | `#8BFF6A` | Key actions and 3D highlights |
| Accent secondary | `#6AC8FF` | Links, data and secondary light |
| Border | `rgba(255,255,255,.12)` | Subtle structure |
| Error | `#FF6B6B` | Validation |

### Typography

- Display: a distinctive variable sans such as Space Grotesk or Sora, self-hosted when licensing permits.
- Body: Inter or Geist Sans, self-hosted.
- Code/data labels: Geist Mono or IBM Plex Mono.
- Maintain comfortable reading width around 60â€“72 characters.
- Avoid oversized text that creates awkward mobile wrapping.

### Layout

- Desktop max content width: approximately 1280â€“1440px.
- Responsive grid: 12 columns desktop, 8 tablet, 4 mobile.
- Use generous vertical rhythm and large, calm surfaces around 3D moments.
- Keep paragraph copy in the DOM; do not render primary text inside WebGL.

## 7. Information architecture

### Required routes

| Route | Purpose |
| --- | --- |
| `/` | Complete overview and primary conversion page |
| `/services` | All service categories and package overview |
| `/services/web-development` | Websites, platforms, e-commerce and SEO foundations |
| `/services/mobile-app-development` | Cross-platform apps, MVPs and app support |
| `/services/business-systems` | Admin panels, employee portals and internal tools |
| `/services/3d-web-experiences` | 3D heroes, product showcases, configurators and immersive sites |
| `/services/seo-performance` | Technical SEO, performance and analytics |
| `/industries` | Sector-specific use cases without false experience claims |
| `/pricing` | Starting prices, inclusions, exclusions and engagement model |
| `/work` | Filterable case-study index |
| `/work/[slug]` | Individual case study |
| `/about` | Professional story, principles and capabilities |
| `/process` | Discovery-to-launch process and collaboration expectations |
| `/contact` | Detailed inquiry form and direct contact methods |
| `/privacy` | Privacy notice |
| `/terms` | Service/site terms |
| `/not-found` | Branded, accessible 404 experience |

Optional after launch: `/insights` and `/insights/[slug]` only when at least three useful articles are ready.

### Navigation

Primary: Work, Services, Pricing, About.  
Persistent CTA: Start a project.  
Secondary mobile navigation: Process, Industries, Contact, LinkedIn and GitHub.

Header is transparent in the hero, gains a compact surface after scroll and remains keyboard accessible. The active route is visibly indicated.

## 8. Home-page requirements

The home page must contain summaries of all major offerings while directing visitors to detailed routes.

### H01 â€” Announcement/status strip

- Show availability only when accurate, e.g. â€œBooking projects for Q4 2026.â€
- Optional timezone and typical reply window.
- Must be editable from a single configuration object.

### H02 â€” Hero

- Eyebrow, H1, supporting copy and two CTAs.
- Signature 3D JV Core.
- Compact service line: Web Â· Mobile Â· Business Systems Â· 3D.
- Optional trust facts: based in India, working worldwide, remote-first.
- Primary CTA opens/navigates to contact with project type unset.
- Secondary CTA scrolls/navigates to featured work.
- Critical hero copy is server-rendered and visible before the 3D bundle loads.

### H03 â€” Selected proof

- Three to six truthful proof items: shipped projects, years/months of real experience, platforms or technologies.
- If meaningful metrics are unavailable, use concrete capabilities rather than vanity counters.

### H04 â€” Services overview

Cards for Web Development, Mobile Apps, Business Systems, 3D Experiences, SEO & Performance and Ongoing Support.

Each card includes:

- A buyer-facing outcome.
- 3â€“5 understandable deliverables.
- â€œStarting atâ€ price or â€œCustom estimate.â€
- Link to its detail route.
- A restrained visual or 3D module.

### H05 â€” Featured work

- 3â€“6 case studies, ordered manually.
- Show title, client/sector when permitted, short challenge, role, services, year and thumbnail.
- Provide live site and case-study links only when available.
- Never make the entire card inaccessible; use semantic links and clear focus states.

### H06 â€” Why work with me

Suggested pillars:

1. Product thinking before code.
2. Design aligned to your brand.
3. Clear milestones and communication.
4. Performance and maintainability built in.

### H07 â€” Process

Four stages:

1. Discover â€” goals, users, constraints and success measures.
2. Design â€” structure, journeys, interface and technical plan.
3. Build â€” milestone-based implementation with staging reviews.
4. Launch & improve â€” QA, deployment, handover and optional care.

### H08 â€” Packages preview

- Show Launch Page, Business Website, MVP App and Custom System.
- Include starting prices for India and International via explicit toggle.
- Toggle must not imply live currency conversion.
- Link to `/pricing` for full details.

### H09 â€” Industries/use cases

- Display 8 concise sectors on home, with all sectors on `/industries`.
- Language format: â€œFor real estate: listings, lead capture, maps and 3D project stories.â€
- Avoid â€œtrusted by the healthcare industryâ€ unless substantiated.

### H10 â€” Testimonial or working principle

- Use verified testimonials only.
- Until testimonials are available, render a â€œWhat you can expectâ€ statement instead of placeholder quotes.

### H11 â€” FAQ

Minimum questions:

- How much will my project cost?
- How long does a project take?
- Do you work with international clients?
- Can you handle design and development?
- Will I own the code?
- Can you improve an existing product?
- What does a 3D website require?
- What happens after launch?

### H12 â€” Contact CTA

- Short reassurance and primary form teaser.
- Email and WhatsApp links.
- Mention typical response window only if operationally sustainable.
- WhatsApp opens a prefilled, editable message.

## 9. Service-detail page template

Each service route must include:

1. Outcome-led hero.
2. Who the service is for.
3. Common business problems addressed.
4. Plain-language deliverables.
5. Package comparison or starting range.
6. Typical timeline.
7. Related case studies.
8. Process specific to that service.
9. Inclusions and exclusions.
10. FAQ.
11. Contextual contact CTA with the service preselected.

Service data must come from typed content objects so home cards, service pages, pricing and contact options do not drift.

## 10. Work and case-study requirements

### Work index

- Filter by Web, Mobile, Business Systems, 3D and Experiments.
- Optional sector filter only when enough projects exist.
- Cards must include thumbnail/poster, title, short outcome and services.
- Filters update without creating inaccessible motion or losing focus.
- Empty states explain that selected/private work can be discussed on a call.

### Case-study schema

Each `/work/[slug]` entry supports:

- Title
- Slug
- Client or anonymized label
- Sector
- Year
- Status: live, prototype, archived or private
- Services
- Role and collaborators
- Duration
- Challenge
- Constraints
- Approach
- Key decisions
- Deliverables
- Technology used
- Screenshots/video/model assets
- Outcomes with source/qualification
- Testimonial with permission flag
- Live URL and repository URL where public
- Next/previous case study

### Case-study rules

- Separate â€œclient work,â€ â€œpersonal product,â€ â€œconceptâ€ and â€œtechnical experiment.â€
- Metrics need provenance. Use â€œmeasured,â€ â€œclient-reportedâ€ or â€œproject goalâ€ labels.
- Do not expose confidential implementation details.
- Every visual includes meaningful alt text or is marked decorative.

## 11. Pricing-page requirements

- India/International region toggle with persisted preference.
- Web, Mobile, Business Systems, 3D, SEO and Care sections.
- Use â€œStarting atâ€ and explain scope variables.
- Show timeline ranges, primary inclusions and exclusions.
- Include paid discovery.
- Include payment milestone models.
- Explain ownership transfer after final payment.
- State that tax, hosting, paid assets and third-party subscriptions are separate unless quoted.
- CTA passes selected package to the contact form.
- Source the actual package data from `Jigar-Veera-Services-and-Pricing.md` or its normalized TypeScript equivalent.

## 12. Contact and lead-management requirements

### Contact form

Fields:

- Full name â€” required
- Work email â€” required
- Company â€” optional
- Existing website â€” optional URL
- Country/time zone â€” required for international workflow
- Project type â€” required
- Services â€” multi-select
- Business goal/project description â€” required; 100â€“2,000 characters
- Budget range â€” required
- Desired launch date â€” required or â€œflexibleâ€
- Referral source â€” optional
- Brief URL â€” optional
- Consent to receive a response â€” required

### Form behavior

- Validate on client and server using the same schema.
- Preserve input after recoverable errors.
- Provide field-level accessible error messages and an error summary.
- Disable repeat submission while pending.
- Rate-limit by a privacy-conscious combination of IP hash and email.
- Add a honeypot and time-based bot check. CAPTCHA should be added only if spam warrants it.
- Store the inquiry in a database and send an email notification.
- Send a non-promotional confirmation email to the sender.
- Never log full message bodies or personal information to analytics.
- Show a unique success state and next-step expectation.

### WhatsApp

- Floating action is allowed on home and contact routes but must not cover navigation, form controls or cookie/privacy UI.
- Also provide a normal text link in the contact section and footer.
- Use `https://wa.me/<international-number>?text=<encoded-message>`.
- Phone number comes from an environment/config value; never duplicate it across components.
- Suggested message: â€œHi Jigar, I found jigarveera.in and would like to discuss a [project type] project.â€
- Label the link â€œChat on WhatsAppâ€; icon-only controls require an accessible name.
- Opening WhatsApp must be a user-initiated action in a new tab.

### Email

- Use a domain email such as `hello@jigarveera.in` once configured.
- Obfuscation must not prevent keyboard or assistive-technology access.

## 13. Functional requirements

### Content configuration

- Central `siteConfig` for name, domain, availability, email, WhatsApp, social links and regional pricing default.
- Typed service, package, industry and project collections.
- Case-study body content in MDX or typed structured content.
- No repeated hard-coded pricing values across pages.

### Region pricing

- Explicit India/International choice.
- First visit may suggest a default from locale, but must not silently hide the other region.
- Persist preference locally without requiring an account.
- Do not fetch currency exchange rates.

### Search and filtering

- No site-wide search required for v1.
- Work filters must support shareable query parameters if there are more than eight cases.

### Links and downloads

- External links visibly indicated where helpful and use safe new-tab attributes.
- CV download is optional and tracked without collecting personal data.
- Broken live-project links should be removable via content configuration.

## 14. Technical architecture

### Required stack

- Next.js 16 App Router
- React 19
- TypeScript with strict mode
- Tailwind CSS for layout and design tokens
- React Three Fiber v9 with Three.js
- `@react-three/drei` for established scene helpers
- Motion for React via `motion/react` for DOM animation
- Zod for shared form/content validation
- MDX or typed local content for case studies in v1
- Vitest and React Testing Library for unit/component tests
- Playwright for critical end-to-end flows
- ESLint and Prettier-compatible formatting

Use the current stable patch versions when implementation starts and commit the lockfile. Confirm peer compatibility before installing 3D libraries.

### Hosting and services

Recommended default:

- Vercel for deployment and preview environments.
- A managed Postgres service for inquiries if persistent lead storage is required.
- Resend or an equivalent transactional provider for form emails.
- Vercel Analytics/Speed Insights or a privacy-conscious alternative.
- Optional Sentry for production error monitoring.

All providers must be replaceable behind small adapters. The repository must work locally without production credentials by using a safe mock email adapter and local form-success behavior.

### Rendering strategy

- Server Components by default.
- Client Components only for interaction, form state, regional toggle and 3D scenes.
- Dynamically import WebGL scenes and avoid SSR for the Canvas itself.
- Render semantic HTML copy and CTA before loading 3D.
- Statically generate service and case-study routes where possible.
- Use route-level metadata, canonical URLs and Open Graph images.

### Suggested source structure

```text
src/
  app/
    (marketing)/
      page.tsx
      about/page.tsx
      contact/page.tsx
      industries/page.tsx
      pricing/page.tsx
      process/page.tsx
      services/
        page.tsx
        [slug]/page.tsx
      work/
        page.tsx
        [slug]/page.tsx
    api/
      contact/route.ts
    privacy/page.tsx
    terms/page.tsx
    sitemap.ts
    robots.ts
    layout.tsx
    not-found.tsx
  components/
    analytics/
    contact/
    layout/
    sections/
    seo/
    three/
    ui/
  content/
    projects/
    industries.ts
    packages.ts
    services.ts
  lib/
    analytics.ts
    email.ts
    env.ts
    lead-store.ts
    metadata.ts
    rate-limit.ts
    schemas.ts
  styles/
  tests/
public/
  models/
  posters/
  projects/
  textures/
```

## 15. 3D engineering requirements

### Scene implementation

- One shared WebGL canvas is preferred on the home page if it reduces context creation and asset duplication.
- Use a stable camera and limited post-processing.
- Favor instancing, baked lighting and compressed models over many independent meshes/lights.
- UI remains HTML layered with or adjacent to Canvas.
- Use Drei helpers selectively; do not add packages for a single trivial utility.
- Clean up listeners, textures, render targets and animation subscriptions.

### Performance tiers

Determine an experience tier using viewport, reduced-motion preference, device memory where supported and a short non-blocking performance heuristic.

| Tier | Experience |
| --- | --- |
| Full | Desktop-quality model, subtle post-processing and pointer response |
| Balanced | Lower DPR, reduced particles/post-processing and fewer active animations |
| Lite | Simplified model and short transitions, no expensive post-processing |
| Static | Optimized poster or CSS/SVG composition with full HTML functionality |

Never use user-agent strings as the only decision method. Provide a visible â€œReduce effectsâ€ control and remember the selection.

### Asset budgets

- Initial 3D JavaScript must load after critical content and should be split from route essentials.
- Compressed hero model target: â‰¤ 1.5 MB; hard ceiling 3 MB.
- Initial textures target: â‰¤ 1.5 MB total using modern compressed formats where supported.
- Initial home-page transfer target excluding deferred 3D: â‰¤ 500 KB compressed.
- Cap device pixel ratio, e.g. 1â€“1.75 based on tier.
- Pause render loops when the scene is offscreen or the tab is hidden.
- Use demand rendering for static sections where practical.

### Fallbacks

- Provide poster image with same composition as the 3D hero.
- WebGL/context failure must replace Canvas without an error flash.
- Reduced-motion mode removes idle loops, large parallax and scroll scrubbing.
- Mobile fallback must still feel intentionally designed, not broken or empty.

## 16. Animation and interaction principles

- Motion communicates hierarchy, state and craft; it does not delay reading.
- Default durations: 150â€“250ms for controls, 300â€“600ms for section transitions.
- Limit major scroll-driven sequences to the hero/service transition and one work moment.
- Avoid scroll hijacking and mandatory horizontal scrolling.
- Hover enhancements must have touch and keyboard equivalents.
- Do not use a custom cursor on touch devices or as the only interaction feedback.
- Pause animations when the page is not visible.
- Respect `prefers-reduced-motion` throughout CSS, Motion and R3F.

## 17. Responsive requirements

Test at minimum:

- 320Ã—568
- 360Ã—800
- 390Ã—844
- 768Ã—1024
- 1024Ã—768
- 1366Ã—768
- 1440Ã—900
- 1920Ã—1080

### Mobile behavior

- Hero copy appears before the 3D object.
- Primary CTA stays visible without requiring a precision gesture.
- Navigation becomes a focus-managed drawer.
- Pricing tables transform into labeled cards; never require horizontal table scrolling for comprehension.
- WhatsApp action observes safe areas and does not block content.
- Touch targets are at least 44Ã—44 CSS pixels.
- No meaningful content depends on hover.

## 18. Accessibility requirements

- Target WCAG 2.2 AA.
- Semantic landmarks and logical heading order.
- Visible skip link and strong focus indicators.
- Full keyboard operation, including navigation, filters, dialogs and forms.
- Sufficient contrast in every theme/state.
- Decorative Canvas is hidden from assistive technology; an equivalent concise description is available when it conveys meaning.
- No primary copy inside Canvas.
- Form errors are programmatically associated with fields.
- Status and success messages use appropriate live regions.
- Reduced-motion support includes a user control.
- Auto-moving content is pauseable.
- Audio is absent by default; no auto-play sound.
- Automated axe checks plus manual keyboard and screen-reader spot checks.

## 19. Performance and quality requirements

### Core Web Vitals

- LCP â‰¤ 2.5 seconds at p75.
- INP â‰¤ 200 ms at p75.
- CLS â‰¤ 0.1 at p75.
- Measure real-user performance after launch; Lighthouse alone is insufficient.

### Implementation safeguards

- Prioritize the LCP resource and never lazy-load it.
- Lazy-load below-fold media and all non-critical 3D assets.
- Set explicit image/video dimensions.
- Self-host and subset fonts; minimize weights.
- Avoid layout-triggering animations.
- Analyze JavaScript bundles in CI or before releases.
- Provide loading, empty and error states without layout jumps.
- Optimize images through Next.js where appropriate.

## 20. SEO requirements

- Unique title and description for every indexable route.
- Canonical URL and consistent trailing-slash policy.
- Generated `sitemap.xml` and `robots.txt`.
- Open Graph and social images for home, services and case studies.
- `Person` and `ProfessionalService` structured data on appropriate pages.
- `Service` structured data for real offerings.
- `BreadcrumbList` on detail routes.
- Do not publish `Review` or aggregate rating schema without eligible, visible and genuine reviews.
- Descriptive URLs and one primary H1 per page.
- Internal links between related services, industries and work.
- Case-study images with meaningful alt text.
- Contact details remain consistent across site and structured data.
- Index only useful, complete pages; keep drafts out of sitemap and search indexing.

## 21. Security and privacy

- Validate and normalize all server input.
- Rate-limit contact submissions and reject oversized payloads.
- Escape/sanitize user content before including it in HTML emails or dashboards.
- Secrets only in environment variables validated at startup/build as appropriate.
- Use least-privilege credentials for email and database.
- Apply sensible security headers and a Content Security Policy compatible with required assets.
- Do not expose raw stack traces or provider responses.
- Collect only information needed to answer inquiries.
- Define inquiry retention and deletion practices in the privacy notice.
- Cookie consent is required only for non-essential storage/tracking that legally requires it for targeted regions; do not show a meaningless banner.
- Dependency and production error checks should be part of release work.

## 22. Analytics events

Capture minimal, non-sensitive events:

- `cta_click` with placement and destination
- `service_view` with service slug
- `package_select` with package slug and region
- `work_filter` with selected filter
- `case_study_view` with project slug
- `contact_start`
- `contact_submit_success` with broad project type and budget band only
- `contact_submit_error` with non-sensitive error category
- `whatsapp_click` with placement
- `email_click` with placement
- `external_project_click` with project slug
- `effects_mode_change` with full/balanced/lite/static

Never send names, email addresses, project descriptions, phone numbers or full URLs containing user data to analytics.

## 23. Content requirements before launch

Required owner-provided content:

- Final portrait or approved no-portrait direction
- Professional biography
- Contact email
- WhatsApp number in international format
- LinkedIn and GitHub URLs
- Availability statement
- At least three truthful case studies or clearly labeled personal projects
- Screenshots and permissions for every published project
- Verified testimonials and permissions, if used
- Final regional package prices
- Business/legal details for invoicing and policies

The implementation must support content-pending states without fake filler. Do not launch lorem ipsum, placeholder client logos or fabricated metrics.

## 24. Testing plan

### Unit and component tests

- Content schemas reject invalid slugs, duplicate IDs and malformed pricing.
- Region toggle returns correct package set and persists preference.
- Contact schema covers valid and invalid inputs.
- WhatsApp URL encoding is correct.
- Metadata generation returns correct canonical and social values.
- Reduced-motion and static modes choose expected scene behavior.

### End-to-end tests

- Navigate every primary header/footer route.
- Select a package and verify contact preselection.
- Submit valid inquiry using test adapter.
- Verify required field, invalid email and server-error recovery.
- Open WhatsApp link with correct accessible label and prefilled message.
- Filter work and open a case study.
- Use full site via keyboard.
- Verify mobile navigation focus trap, close and focus restoration.
- Test WebGL unavailable fallback.
- Test reduced-motion preference.

### Cross-browser/device QA

- Latest stable Chrome, Edge, Firefox and Safari.
- iOS Safari and Android Chrome on at least one real device each.
- Touch, keyboard, slow-network and low-power conditions.
- WebGL context loss/recovery or fallback.

## 25. Acceptance criteria

The v1 release is accepted only when:

- All required routes render and contain final or explicitly approved content.
- Home page summarizes every required service category and links to details.
- At least three case studies/projects are published with honest status labels.
- Pricing region toggle is consistent everywhere.
- Contact submissions are validated, stored and emailed in production.
- WhatsApp works from home, contact and footer without obscuring mobile UI.
- Primary content and conversion work when the 3D scene fails or is disabled.
- Reduced-motion behavior is verified.
- Required SEO metadata, sitemap, robots and structured data validate.
- Automated tests pass and critical flows pass manual QA.
- No critical/high accessibility defects remain.
- Performance targets have been measured on a production-like deployment.
- Environment variables, setup, content editing and deployment are documented.
- The repository contains no secrets, placeholder claims or unlicensed assets.

## 26. Delivery phases

### Phase 0 â€” Content and discovery

- Confirm audience priority, services, pricing and availability.
- Inventory projects and select launch case studies.
- Confirm contact channels and legal/business details.
- Approve brand direction and 3D metaphor.

Exit: signed-off content outline, project list and visual direction.

### Phase 1 â€” Foundation

- Initialize stack and quality tooling.
- Implement tokens, typography, layout and core UI.
- Create typed content models and route skeletons.
- Add metadata infrastructure.

Exit: responsive static skeleton of all required routes.

### Phase 2 â€” Sales content and flows

- Build home, services, pricing, work, about, process and industries.
- Implement contact form, email, storage and WhatsApp.
- Add analytics contract and consent behavior if needed.

Exit: complete conversion flow without 3D dependency.

### Phase 3 â€” 3D system

- Prototype JV Core in isolation.
- Optimize model, textures, lighting and interaction.
- Implement performance tiers, poster fallback and effects control.
- Integrate with hero and selected sections.

Exit: approved visual experience meeting asset budgets.

### Phase 4 â€” Content integration and polish

- Add real case studies and images.
- Implement route-level social artwork.
- Refine animation, microcopy, empty states and errors.

Exit: content-complete release candidate.

### Phase 5 â€” QA and launch

- Automated and manual functional tests.
- Accessibility and performance passes.
- Production configuration, redirects, sitemap and monitoring.
- Domain deployment and form smoke test.

Exit: production release and handover.

## 27. Codex implementation instructions

When this PRD is given to Codex for implementation:

1. Inspect the existing repository, package manager, `AGENTS.md`, current routes and uncommitted changes before editing.
2. Preserve existing user work and brand assets.
3. Present a short implementation plan and identify missing blocking values. Use safe placeholders only for config values such as email/WhatsApp, never for public claims.
4. Build the semantic, responsive, non-3D experience first.
5. Implement typed content collections so repeated content has one source of truth.
6. Add the contact flow behind adapters so local development does not send real email or write production data.
7. Build the 3D prototype as an isolated component/route before home integration.
8. Measure bundle and runtime performance after integration; implement the lite/static paths before calling the scene complete.
9. Add tests with each functional slice rather than at the end.
10. Run lint, type-check, tests and production build before handoff.
11. Render and inspect key desktop/mobile pages. Fix overflow, focus, contrast, layout shifts and scene/text collisions.
12. Document setup, environment variables, content editing, deployment and asset licenses.

### Required environment variable contract

Names may be adapted to the chosen providers, but provide a validated `.env.example` containing no secrets:

```text
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_CONTACT_EMAIL=
NEXT_PUBLIC_WHATSAPP_NUMBER=
CONTACT_NOTIFICATION_EMAIL=
EMAIL_PROVIDER_API_KEY=
DATABASE_URL=
CONTACT_RATE_LIMIT_SECRET=
NEXT_PUBLIC_ANALYTICS_ID=
SENTRY_DSN=
```

### Required verification commands

Use the repository's chosen package manager. At minimum expose scripts equivalent to:

```text
dev
lint
typecheck
test
test:e2e
build
```

## 28. Decisions intentionally left configurable

These are not technical blockers for scaffolding, but must be finalized before public launch:

- Exact WhatsApp number and contact email
- Whether a portrait is used
- Final logo/monogram geometry
- Final fonts and their licenses
- Which real projects can be named
- Final starting prices and regional visibility
- Availability wording and response time
- Lead database/email providers
- Analytics and error-monitoring providers
- Whether scheduling software is offered after form submission
- Legal text and inquiry retention period

## 29. Reference standards and documentation

- Next.js App Router, project structure and installation: https://nextjs.org/docs/app/getting-started
- Next.js metadata and Open Graph support: https://nextjs.org/docs/app/getting-started/metadata-and-og-images
- React Three Fiber installation and React compatibility: https://r3f.docs.pmnd.rs/getting-started/installation
- Drei component documentation: https://drei.docs.pmnd.rs/
- Motion for React: https://motion.dev/docs/react
- Core Web Vitals targets: https://web.dev/articles/vitals
- WCAG 2.2 quick reference and reduced-motion techniques: https://www.w3.org/WAI/WCAG22/quickref/
