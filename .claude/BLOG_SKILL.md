# Targy's Twigs Blog Post Creation Skill

## Purpose
This skill defines the standardized format for creating blog posts about Targy's stick collection. When given a date, wood type, measurements, location, and story description, use this skill to generate consistent, high-quality blog posts.

## File Structure

### Location
All blog posts are stored in `/src/content/posts/` with filenames in the format: `[date-slug].md`
- Example: `march-21.md`, `feb-1.md`

### Required Frontmatter
```yaml
---
title: "[Catchy title about the stick/adventure]"
description: "[One-line summary of the story]"
date: [YYYY-MM-DD]
image: "/images/[filename].jpg"
location: "[Location name]"
length: "[measurement with units]"
diameter: "[measurement with units]"
scientific_name: "[Latin scientific name]"
---
```

**Guidelines:**
- Title should be action-oriented or descriptive, not generic
- Description is the meta description for pages/previews (short and punchy)
- Date format: YYYY-MM-DD (use 2026 for current posts)
- Image path follows pattern: `/images/[post-slug].jpg`
- Scientific name must use proper Latin binomial nomenclature

## Content Structure

### 1. Stick Stats Section
```html
## Stick Stats

<div class="stick-stats">
  <div class="stat-item">
    <span class="stat-label">Length</span>
    <span class="stat-value">[measurement]</span>
  </div>
  <div class="stat-item">
    <span class="stat-label">Diameter</span>
    <span class="stat-value">[measurement]</span>
  </div>
  <div class="stat-item">
    <span class="stat-label">Type</span>
    <span class="stat-value">[wood type]</span>
  </div>
  <div class="stat-item">
    <span class="stat-label">Scientific Name</span>
    <span class="stat-value">[scientific name]</span>
  </div>
  <div class="stat-item">
    <span class="stat-label">Origin</span>
    <span class="stat-value">[where found]</span>
  </div>
  <div class="stat-item">
    <span class="stat-label">Found</span>
    <span class="stat-value">[month day, format: "March 21st"]</span>
  </div>
</div>
```

### 2. The Story Section
- **Maximum length:** 160 words (strict limit)
- **Point of view:** Third person about Targy (use "Targy" not "I")
- **Content:** Narrative that answers:
  - How/where did Targy find the stick?
  - What makes it special?
  - How was it used (fetch, zoomies, chewing, theft, etc.)?
  - What's the vibe/feeling of this stick?

- **Images:** Include 1-2 inline images using markdown syntax:
  ```markdown
  ![Description of image](/images/filename.jpg)
  ```
  Place images naturally within the narrative flow, not at the beginning or end.

- **Tone:** Conversational, playful, from a dog's perspective but written as third-person narrative
- **Structure:** Single paragraph flow is okay; can have subtle breaks within the section but NOT multiple heading subdivisions

### 3. Stick Fact Section
```markdown
## Stick Fact

[Wood type] ([Scientific Name]) [interesting fact about the wood type]. [Additional context about its properties, history, or uses]. [Final sentence about why it's great for sticks/chewing].
```

**Guidelines:**
- Information density: 2-3 sentences covering:
  1. Key characteristic or historical fact
  2. Specific properties (hardness, growth rate, uses, cultural significance)
  3. Why it's good for sticks/chewing
- Use factual information about the actual wood species
- Tone: Educational but friendly and relevant to stick collecting

## Measurement Conventions
- Length: Use feet/inches format (e.g., "2 feet", "8 inches", "2x4 inches" for processed lumber)
- Diameter: Use inches format (e.g., "2 inches")
- For milled lumber: Use lumber dimensions (e.g., "2x4 inches")

## Wood Type Guidelines

### Common woods in Targy's collection:
- **Cottonwood** (*Populus deltoides*): Fast-growing, light, ideal for fetch
- **Pine/Ponderosa Pine** (*Pinus ponderosa*): Soft but durable, aromatic, good for chewing
- **Hickory** (*Carya ovata*): Very hard, dense, strong
- **Oak**: Very hard, tight grain
- **Birch** (*Betula*): Medium hardness, flexible

Always verify scientific names are accurate for the wood type.

## Story Prompt Template

When given story description, follow this framework:
1. **Opening:** Where and when Targy found it + immediate reaction
2. **Middle:** Why it's special + specific details about size/quality + how it was used
3. **Ending:** The outcome/impact + memorable moment or feeling

**Example prompt handling:**
- "Stick from neighbor's yard, 8 inches, hickory, quick work, fresh vibes"
  → Story: Sneak mission to yard, surprise heist, premium hickory, fast chewing, success narrative

## Image File Naming
- Format: `/images/[post-slug][-optional-descriptor].jpg`
- Examples: 
  - `/images/march-21.jpg` (main/hero image)
  - `/images/march-21-hero.jpeg`
  - `/images/march-22-chew.jpeg` (specific moment)

## Consistency Checklist

- [ ] Frontmatter complete with all required fields
- [ ] Date format: YYYY-MM-DD
- [ ] Author always "Targy"
- [ ] Scientific name in proper format
- [ ] Stick Stats HTML block formatted correctly
- [ ] Story section 160 words or less
- [ ] Story in third person narrative (Targy, he, his)
- [ ] 1-2 images embedded in story with markdown syntax
- [ ] Stick Fact section includes interesting wood information
- [ ] All measurements consistent with frontmatter

## Quick Reference

**Minimum input needed to create post:**
1. Date (YYYY-MM-DD format)
2. Wood type (common name)
3. Measurements (length and diameter)
4. Location found
5. Story description (how found, vibe, use case)

**Output:** Complete .md file ready to display, just needs image assets added to `/public/images/`
