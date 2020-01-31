<template lang="md">
<section class="container">

# Resume - CV

<div class="resume">
<div class="resume-grid">
<div class="resume-grid-item">

## Skills

### Web development

- Responsive design, accessibility (ARIA, WCAG), cross-browser integration
- Atomic Design, DRY, Mobile First approaches
- CMS (Content Management Systems), Umbraco, Episerver
- PWAs (Progressive web apps) and service workers
- KSS node
- HTML5, Semantic HTML, HTML Email, SVGs
- CSS/Sass, Flexbox, CSS Grid layout, CSS animation, CSS frameworks (Bootstrap, bulma)
- JavaScript, Vue.js, Nuxt.js, Vue CLI 3, AngularJs, Angular2, jQuery, handlebars
- Task runner (Gulp), Webpack
- Git version control, Github
- Visual Studio, VS code
- Trello, Jira

### Marketing

Email Marketing, KPI Follow-up, Split testing, Direct mailing, Brand strategy, Google Analytics, Google Tag Manager, Mailchimp/Dotmailer, SalesForce

### Management

Line management, Project management, Mentoring

### Graphic Design

UI and UX, Wireframing, Branding, Print design, Photoshop CC, Illustrator CC, Indesign CC, Adobe Xd

### Soft Skills

Creativity, Problem solving, Adaptability, Team spirit, Enthusiasm

### Languages

- French: native language
- English: Fluent, 920 TOEIC score
- Spanish: B1 level (European language level)

</div>
<div class="resume-grid-item">

## Experiences

### The New York Times (T Brand Studio) | London, UK

#### Front End Developer (Permanent)

*August 2019 - Present*

### Dam Digital | London, UK

#### Lead Front End Developer (Permanent)

*April 2018 - July 2019*

- Lead Front End development for multiple clients' projects
- Manage and mentor the Front End development team
- Set the technical direction regarding Front End technologies, establish and maintain coding standards
- Work with UI, UX and project management teams to ensure product quality and delivery
- Implement code into responsive UI using the latest web standards
- Translate designs into design systems (pattern libraries)

#### Front End Developer (Permanent)

*February 2017 - April 2018*

- Implement code into responsive UI using the latest web standards
- Translate designs into design systems (pattern libraries)

### SSL247 | London, UK

#### Digital Marketing and Communications Assistant (Internship)

*May 2016 - October 2016*

SLL247 is a fast growing, multi-award winning web security company.

- Support the web project management (implementation of new functionalities/features (HTML and CSS integration), improve the UX, AB testing, overall website performance report)
- Create, manage and improve the company’s existing content (online and offline)
- Manage the company’s websites (Production of visuals and content, bugs, reporting, integration, etc.)
- Campaign management (execute digital and offline acquisition campaigns(email marketing, direct mailing, social media, PPC) and support performance monitoring)

### AIESEC LC Lyon | Lyon, France

#### Marketing Communication Team Leader (Volunteer)

*October 2015 - May 2016*

- Brand development
- Community management
- Creation of graphic content

## Education

### IDRAC Business School | Lyon, France

*2010 to 2013, 2014 to 2016 (5 academic years)*

Master's degree - Marketing and Management

### Đại học Ngoại thương (Foreign Trade University) University | Hanoi, Vietnam

*2014 to 2015 (1 academic year)*

University exchange program with my home university (IDRAC Lyon).

Studied international marketing, multicultural management, Asian
market and culture.

### Aries, Graphic Design School | Lyon, France

*2013 to 2014 (1 academic year)*

Training in UI/UX design, front-end integration, print design, 3D and motion design.

</div>
</div>
</div>
</section>
</template>

<style lang="scss" scoped>
@media print {
  header,
  footer,
  h1 {
    display: none !important;
  }

  .resume {
    font-size: 14px;

    .resume-grid {
      display: grid;
      grid-template-columns: 35% 1fr;
      grid-gap: 2rem;
    }
  }
}
.resume {
  // font-size: 15px;

  .resume-grid {
    @include min(bp(sm)) {
      display: grid;
      grid-template-columns: 35% 1fr;
      grid-gap: 2rem;
    }
  }

  h2 {
    margin-top: 1.5rem;
    margin-bottom: 0rem;
    padding-bottom: 0.25rem;
    border-bottom: 3px dashed color(dark);
  }

  h3 {
    margin-top: 1rem;
    margin-bottom: 0.25rem;
  }

  h4,
  p,
  ul {
    margin-top: 0;
    margin-bottom: 0.25rem;
  }

  ul {
    padding-left: 1.5rem;
  }
}
</style>
