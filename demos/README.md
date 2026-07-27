# Service Business Demo Sites

Four portfolio demo websites for local service industries. Each is a self-contained, mobile-first single page with conversion-focused layout, trust signals, and contact forms (demo only — no backend).

## Sites

| Site | Industry | Style | Path |
|------|----------|--------|------|
| **BluePeak HVAC** | Heating & cooling | Cool industrial blue/navy | `bluepeak-hvac/` |
| **Oak & Stone Landscaping** | Outdoor design & care | Warm organic green/cream | `oakstone-landscaping/` |
| **RapidFlow Plumbing** | Emergency plumbing | Bold red urgency UI | `rapidflow-plumbing/` |
| **Guardian Roofing** | Roofing & storm repair | Premium navy/gold | `guardian-roofing/` |

## How to preview

Open any `index.html` in a browser, or serve the folder:

```bash
# from this demos folder (Python)
python -m http.server 8080

# then visit:
# http://localhost:8080/bluepeak-hvac/
# http://localhost:8080/oakstone-landscaping/
# http://localhost:8080/rapidflow-plumbing/
# http://localhost:8080/guardian-roofing/
```

## Stack

- HTML5
- CSS3 (custom properties, grid/flex, responsive)
- Vanilla JavaScript (mobile nav, form toast, sticky header)

## Notes

- All businesses, phone numbers, and emails are fictional.
- Forms show a success toast only; wire to Formspree, Netlify Forms, or your backend when deploying.
- Safe to add as portfolio project cards with local or hosted links.
