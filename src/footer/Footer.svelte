<script>
    import FooterShape from './FooterShape.svelte';
</script>

<FooterShape>
    <div class="space-between">
        <div class="project-info">
            <a href="https://github.com/vikbert/sf-components">
                <img
                    src="https://img.shields.io/badge/License-MIT-brightgreen.svg?style=flat-square"
                    alt="MIT License"
                />
            </a>

            <a href="https://github.com/vikbert/sf-components">
                <img
                    src="https://img.shields.io/github/last-commit/vikbert/sf-components?color=orange&style=flat-square"
                    alt="Last Commit"
                />
            </a>
            <p>Vikbert ® 2021</p>
        </div>
        <div class="tech-info">
            <a href="https://vikbert.github.io/pixss/"><img src="pixss.png" alt="pixss" width="34" class="pixss"/></a>
            <a href="https://svelte.dev/"><img src="svelte.png" alt="made-with-svelte" width="120"/></a>
        </div>
    </div>
</FooterShape>

<style>
  .project-info p {
    margin-bottom: .5rem;
  }

  .tech-info {
    padding-top: .5rem;
  }

  img.pixss {
    filter: invert(1);
  }
</style>
