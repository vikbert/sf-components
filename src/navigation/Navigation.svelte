<script lang="ts">
    import {currentTab} from '../service/store'

    let tab = 'components';
    currentTab.subscribe((value) => {
        tab = value;
    });

    const clickTab = (tabName: string) => {
        tab = tabName;
        currentTab.set(tabName);
    }
</script>
<div class="container centered-xy py-2">
    <div class="navigation tabs">
        <ul>
            <li on:click={() => clickTab('components')} class:is-active={tab === 'components'}>
                <a href='#/'>Components</a>
            </li>
            <li on:click={() => clickTab('packages')} class:is-active={tab === 'packages'}>
                <a href='#/' >Packages</a>
            </li>
        </ul>
    </div>
</div>

<style>
  .navigation {
    width: 22rem;
  }
</style>
