<script lang="ts">
    import {currentTab} from '../service/store';

    type NavItem = {
        tabName: string,
        tabTitle: string,
    };
    const items: NavItem[] = [
        {tabName: 'components', tabTitle: 'Components', icon: 'gg:components'},
        {tabName: 'packages', tabTitle: 'Packages', icon: 'ph:package'},
        {tabName: 'flows', tabTitle: 'Flows', icon: 'carbon:graphical-data-flow'},
        {tabName: 'awesome', tabTitle: 'Awesome', icon: 'ic:outline-auto-awesome'},
    ];

    let tab: string;
    currentTab.subscribe((value) => {
        tab = value;
    });

    const setTabName = (tabName: string) => {
        tab = tabName;
        currentTab.set(tabName);
    };
</script>

<div class="container centered-xy navigation">
        <ul>
            {#each items as item}
                <a href="#/" on:click={() => setTabName(item.tabName)} class:is-active={tab === item.tabName} title={item.tabTitle}>
                    <span class="iconify" data-icon={item.icon} data-inline="false"></span>
                </a>
            {/each}
        </ul>
</div>

<style>
  .navigation {
    display: flex;
    justify-content: center;
  }
  a {
    font-size: 5rem;
    padding: .5rem;
    color: #dedede;
  }
  a.is-active {
    color: #7b2083;
  }
</style>
