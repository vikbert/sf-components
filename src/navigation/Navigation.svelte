<script lang="ts">
    import {currentTab} from '../service/store'

    let tab = 'components';
    currentTab.subscribe((value) => {
        tab = value;
    });

    const setTabName = (tabName: string) => {
        tab = tabName;
        currentTab.set(tabName);
    }
</script>
<div class="container centered-xy py-2">
    <div class="navigation tabs">
        <ul>
            <li on:click={() => setTabName('components')} class:is-active={tab === 'components'}>
                <a href='#/'>Components</a>
            </li>
            <li on:click={() => setTabName('packages')} class:is-active={tab === 'packages'}>
                <a href='#/' >Packages</a>
            </li>
            <li on:click={() => setTabName('flows')} class:is-active={tab === 'flows'}>
                <a href='#/' >Flows</a>
            </li>
        </ul>
    </div>
</div>

<style>
  .navigation {
    width: 35rem;
  }
</style>
