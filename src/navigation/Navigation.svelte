<script lang="ts">
    import { currentTab } from '../service/store';
    type NavItem = {
        tabName: string,
        tabTitle: string,
    };
    const items: NavItem[] = [
        { tabName: 'components', tabTitle: 'Components' },
        { tabName: 'packages', tabTitle: 'Packages' },
        { tabName: 'flows', tabTitle: 'Flows' },
        { tabName: 'awesome', tabTitle: 'Awesome' },
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

<div class="container centered-xy py-2">
    <div class="navigation tabs">
        <ul>
            {#each items as item}
                <li on:click={() => setTabName(item.tabName)} class:is-active={tab === item.tabName}>
                    <a href="#/">{item.tabTitle}</a>
                </li>
            {/each}
        </ul>
    </div>
</div>

<style>
    .navigation {
        width: 45rem;
    }
</style>
