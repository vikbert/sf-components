<script lang="ts">
  import { filterTag } from '../service/store';
  export let tooltip: string = 'no description';
  export let item: any;

  const limit = 200;

  let validTooltip: string = tooltip;
  let colorClass: string = '';
  let tagFromStore: string = '';

  filterTag.subscribe((value) => {
    tagFromStore = value;
  });

  $: {
    if (tagFromStore !== item.tag) {
      colorClass = '';
    }

    if (tagFromStore === item.tag && tagFromStore === 'framework') {
      colorClass = 'is-warning';
    }
    if (tagFromStore === item.tag && tagFromStore === 'core') {
      colorClass = 'is-info';
    }
    if (tagFromStore === item.tag && tagFromStore === 'application') {
      colorClass = 'is-primary';
    }
    if (tagFromStore === item.tag && tagFromStore === 'utility') {
      colorClass = 'is-success';
    }

    if (tooltip && tooltip.length > limit) {
      validTooltip = tooltip.substring(0, limit + 1) + ' ...';
    }
  }
</script>

<a href={'https://symfony.com/components/' + item.name} target="_blank">
  <div
  class={"grid-item centered-xy tilt-in-fwd-tr " + colorClass}
  data-tooltip={validTooltip}>
    {item.name}
  </div>
</a>

<svelte:head>
  <style>
    .grid-item {
      flex: 1 0 20%;
      padding: 2rem 0;
      margin: 0.5rem;
      min-width: 150px;
      outline: 1px solid #8f8b8b;
      color: black;
      font-size: 14px;
      font-weight: 500;#
    }
    div.grid-item.is-primary,
    div.grid-item.is-info {
      color: white;
    }
    .grid-item:hover {
      background-color: black;
      color: white;
    }
    /**
    * ----------------------------------------
    * animation tilt-in-fwd-tr
    * ----------------------------------------
    */
    .tilt-in-fwd-tr {
      -webkit-animation: tilt-in-fwd-tr 0.6s
      cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: tilt-in-fwd-tr 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes tilt-in-fwd-tr {
      0% {
        -webkit-transform: rotateY(20deg) rotateX(35deg)
        translate(300px, -300px) skew(-35deg, 10deg);
        transform: rotateY(20deg) rotateX(35deg) translate(300px, -300px)
        skew(-35deg, 10deg);
        opacity: 0;
      }
      100% {
        -webkit-transform: rotateY(0) rotateX(0deg) translate(0, 0)
        skew(0deg, 0deg);
        transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
        opacity: 1;
      }
    }
    @keyframes tilt-in-fwd-tr {
      0% {
        -webkit-transform: rotateY(20deg) rotateX(35deg)
        translate(300px, -300px) skew(-35deg, 10deg);
        transform: rotateY(20deg) rotateX(35deg) translate(300px, -300px)
        skew(-35deg, 10deg);
        opacity: 0;
      }
      100% {
        -webkit-transform: rotateY(0) rotateX(0deg) translate(0, 0)
        skew(0deg, 0deg);
        transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
        opacity: 1;
      }
    }
  </style>
</svelte:head>
